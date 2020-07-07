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
        <div className="flex flex-col md:flex-row gap-4 relative">
          <CartDetails />
          <form className="md:w-2/5" onSubmit={handleCheckout}>
            <div className="p-4 mt-10 md:mt-0 sticky mb-4 rounded border border-gray-lighter">
              <h2 className="font-bold text-center">Totale</h2>
              <p className="flex justify-between">
                <span>Subtotale</span>{" "}
                <span suppressHydrationWarning>{formattedTotalPrice}</span>
              </p>
              <p className="flex justify-between">
                <span>Spedizione</span> <span>0,00€</span>
              </p>
              <p className="font-bold flex justify-between">
                <span>Totale (IVA inclusa)</span>{" "}
                <span suppressHydrationWarning>{formattedTotalPrice}</span>
              </p>
            </div>
            <Btn type="submit" disabled={cartEmpty} className="w-full">
              Paga
            </Btn>
          </form>
        </div>
      </section>
    </Layout>
  );
}
