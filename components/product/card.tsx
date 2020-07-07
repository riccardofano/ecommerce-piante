import { Product } from "../../model/product";
import { formatCurrencyString } from "use-shopping-cart";
import Link from "next/link";

export default function card({
  name,
  price,
  imageUrl,
  currency,
  sku,
}: Product) {
  return (
    <Link href={`/product/${sku}`}>
      <a className="md:text-lg hover:underline">
        <img
          src={require(`../../public${imageUrl}?resize&size=200`)}
          alt={`Immagine di ${name}`}
          className="rounded object-cover object-center min-w-full"
        />
        <h1 className="font-bold mt-2" suppressHydrationWarning>
          {formatCurrencyString({ value: price, currency })}
        </h1>
        <p>{name}</p>
      </a>
    </Link>
  );
}
