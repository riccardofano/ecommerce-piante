import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/api-helpers";
import { useState, useEffect } from "react";

import CartDetails from "../components/cartDetails";

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
    <div>
      <CartDetails />

      <form onSubmit={handleCheckout}>
        <h2>Cart summary</h2>
        {/* This is where we'll render our cart */}
        <p suppressHydrationWarning>
          <strong>Number of Items:</strong> {cartCount}
        </p>
        <p suppressHydrationWarning>
          <strong>Total:</strong> {formattedTotalPrice}
        </p>

        <button type="submit" disabled={cartEmpty}>
          Checkout
        </button>
      </form>
    </div>
  );
}
