import { Product } from "../../model/product";
import { formatCurrencyString } from "use-shopping-cart";
import { useEffect, useState } from "react";

export default function card({ name, price, imageUrl, currency }: Product) {
  const [formattedPrice, setFormattedPrice] = useState("");
  useEffect(() => {
    setFormattedPrice(formatCurrencyString({ value: price, currency }));
  }, []);
  return (
    <div className="md:text-lg">
      <img
        src={require(`../../public${imageUrl}?resize&size=200`)}
        alt={`Immagine di ${name}`}
        className="rounded object-cover object-center min-w-full"
      />
      <h1 className="font-bold mt-2">{formattedPrice}</h1>
      <p>{name}</p>
    </div>
  );
}
