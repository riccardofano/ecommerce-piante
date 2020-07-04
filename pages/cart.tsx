import { useShoppingCart } from "use-shopping-cart";

export default function cart() {
  const {
    removeItem,
    cartDetails,
    decrementItem,
    incrementItem,
  } = useShoppingCart();

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

  return cart;
}
