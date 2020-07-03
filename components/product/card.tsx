import { Product } from "../../model/product";
import { formatCurrencyString } from "use-shopping-cart";

export default function card({
  name,
  price,
  salePrice,
  imageUrl,
  currency,
}: Product) {
  return (
    <div className="md:text-lg">
      <img
        src={require(`../../public${imageUrl}?resize&size=200`)}
        alt={`Immagine di ${name}`}
        className="rounded object-cover object-center min-w-full"
      />
      <h1 className="font-bold mt-2">
        {formatCurrencyString({
          value: price,
          currency,
        })}
      </h1>
      <p>{name}</p>
    </div>
  );
}
