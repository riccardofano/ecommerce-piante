import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";
import InlineIcon from "@iconify/react";
import trashLine from "@iconify/icons-clarity/trash-line";

export default function CartDetails() {
  const {
    removeItem,
    cartDetails,
    decrementItem,
    incrementItem,
  } = useShoppingCart();

  const [cart, setCart] = useState<React.ReactNode>([]);
  const tempCart: React.ReactNode[] = [];

  useEffect(() => setCart(tempCart), [cartDetails]);

  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku];

    tempCart.push(
      <article key={sku} className="flex gap-4 mb-4">
        <img
          className="object-cover bg-cover w-1/3 rounded"
          src={require(`../public${cartEntry.image}?resize&size=200`)}
          alt={`Immagine di ${cartEntry.name}`}
        />
        <div className="flex flex-col items-start">
          <h1>{cartEntry.name}</h1>
          <p className="font-bold">{cartEntry.formattedValue}</p>

          <div className="flex justify-center gap-2 border border-gray-lighter px-1 rounded">
            <button
              className="font-bold"
              onClick={() => decrementItem(cartEntry.sku)}
              aria-label={`Rimuovi un ${cartEntry.name} dal tuo carrello`}
            >
              -
            </button>
            <p>{cartEntry.quantity}</p>
            <button
              className="font-bold"
              onClick={() => incrementItem(cartEntry.sku)}
              aria-label={`Rimuovi un ${cartEntry.name} dal tuo carrello`}
            >
              +
            </button>
          </div>

          <div className="flex gap-2 items-center mt-2">
            <InlineIcon
              icon={trashLine}
              className="text-sm md:text-base text-gray-dark"
            />
            <button
              className="text-sm md:text-base text-gray-dark self-end"
              onClick={() => removeItem(cartEntry.sku)}
              aria-label={`Remove all ${cartEntry.name} from your cart`}
            >
              Remove
            </button>
          </div>
        </div>
      </article>
    );
  }

  return <section>{cart}</section>;
}