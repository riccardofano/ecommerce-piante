import { NextApiRequest, NextApiResponse } from "next";

import { validateCartItems } from "use-shopping-cart/src/serverUtil";
import { Product } from "use-shopping-cart";
import { openDB } from "../../../utils/openDB";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-03-02",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const db = await openDB();
      const products = await db.all("SELECT * FROM Product");
      const inventory: Product[] = products.map((p) => {
        return {
          sku: p.sku.toString(),
          name: p.name,
          price: p.salePrice ? p.salePrice : p.price,
          currency: p.currency,
        };
      });

      // Validate the cart details that were sent from the client.
      const cartItems = req.body;
      const line_items = validateCartItems(inventory, cartItems);
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        payment_method_types: ["card"],
        line_items,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      };
      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
        params
      );

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
