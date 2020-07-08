import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";
import InlineIcon from "@iconify/react";
import trashLine from "@iconify/icons-clarity/trash-line";
import Link from "next/link";

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
          className="object-cover w-24 rounded flex-none"
          src={require(`../public${cartEntry.image}?resize&size=200`)}
          alt={`Immagine di ${cartEntry.name}`}
        />
        <div className="flex flex-col items-start">
          <Link href={`/product/${cartEntry.sku}`}>
            <a className="hover:underline">
              <h1>{cartEntry.name}</h1>
            </a>
          </Link>
          <p className="font-bold">{cartEntry.formattedValue}</p>

          <div className="flex justify-center gap-3 border border-gray-lighter px-1 rounded">
            <button
              onClick={() => decrementItem(cartEntry.sku)}
              aria-label={`Rimuovi un ${cartEntry.name} dal tuo carrello`}
            >
              -
            </button>
            <p>{JSON.stringify(cartEntry.quantity)}</p>
            <button
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

  return <section className="flex-1">{cart}</section>;
}
