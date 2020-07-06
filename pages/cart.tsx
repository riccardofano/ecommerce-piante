import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/api-helpers";
import { useState, useEffect } from "react";

import CartDetails from "../components/cartDetails";
import Layout from "../components/layout";
import Btn from "../components/button";

export default function cart() {
  const {
    cartDetails,
    cartCount,
    formattedTotalPrice,
    redirectToCheckout,
  } = useShoppingCart();
  const [cartEmpty, setCartEmpty] = useState(false);

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const response = await fetchPostJSON("/api/checkout/cart", cartDetails);

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };

  return (
    <Layout>
      <section className="container">
        <h1 className="font-bold text-xl md:text-2xl text-center mb-4">
          Carrello
        </h1>
        <CartDetails />
        <form onSubmit={handleCheckout}>
          <div className="p-4 my-4 rounded border border-gray-lighter">
            <h2 className="font-bold text-center">Totale</h2>
            <p suppressHydrationWarning className="flex justify-between">
              <span>Subtotale</span> <span>{formattedTotalPrice}</span>
            </p>
            <p suppressHydrationWarning className="flex justify-between">
              <span>Spedizione</span> <span>0,00€</span>
            </p>
            <p
              suppressHydrationWarning
              className="font-bold flex justify-between"
            >
              <span>Totale (IVA inclusa)</span>{" "}
              <span>{formattedTotalPrice}</span>
            </p>
          </div>
          <Btn type="submit" disabled={cartEmpty} className="w-full">
            Paga
          </Btn>
        </form>
      </section>
    </Layout>
  );
}
