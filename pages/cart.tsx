import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/api-helpers";
import { useState, useEffect } from "react";

export default function cart() {
  const {
    removeItem,
    cartDetails,
    decrementItem,
    incrementItem,
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

  const cart = [];
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku];

    cart.push(
      <article key={sku}>
        <img
          width={200}
          src={require(`../public${cartEntry.image}?resize&size=200`)}
          alt={`Immagine di ${cartEntry.name}`}
        />
        <h1>{cartEntry.name}</h1>
        <p>Line total: {cartEntry.formattedValue}</p>

        <button
          onClick={() => decrementItem(cartEntry.sku)}
          aria-label={`Remove one ${cartEntry.name} from your cart`}
        >
          -
        </button>
        <p>Quantity: {cartEntry.quantity}</p>
        <button
          onClick={() => incrementItem(cartEntry.sku)}
          aria-label={`Add one ${cartEntry.name} to your cart`}
        >
          +
        </button>

        <button
          onClick={() => removeItem(cartEntry.sku)}
          aria-label={`Remove all ${cartEntry.name} from your cart`}
        >
          Remove
        </button>
      </article>
    );
  }

  return (
    <div>
      {cart}

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
