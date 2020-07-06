import { Product } from "../../model/product";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

import AddToCart from "./addToCart";
import List from "./list";
import Delivery from "../delivery";
import { useState, useEffect } from "react";

export default function details({
  sku,
  name,
  price,
  details,
  imageUrl,
  currency,
}: Product) {
  const { addItem } = useShoppingCart();
  const [formattedPrice, setFormattedPrice] = useState("");
  useEffect(() => {
    setFormattedPrice(formatCurrencyString({ value: price, currency }));
  }, []);

  return (
    <>
      <div className="text-2xl flex flex-col md:flex-row md:gap-3 md:relative">
        <img
          src={require(`../../public${imageUrl}?resize&size=1500`)}
          alt={`immagine di ${name}`}
          className="rounded md:w-1/2 md:max-h-3/4 self-start md:sticky md:top-0"
        />
        <div className="md:flex-1">
          <h1>{name}</h1>
          <h2 className="font-bold inline-block mr-4">{formattedPrice}</h2>
          <p className="text-lg md:text-xl align-text-bottom inline-block">
            iva inclusa
          </p>
          <AddToCart
            handleClick={() =>
              addItem({
                name,
                sku: sku.toString(),
                price,
                currency,
                image: imageUrl,
              })
            }
          />
          <Delivery
            title="Consegna prevista per:"
            subtitle="lunedì, 29.06 - lunedì 06.07"
          />
          <div className="mt-10">
            <h1 className="font-bold text-lg md:text-xl">Details</h1>
            <p className="text-sm md:text-base">{details}</p>
          </div>
        </div>
      </div>
      {/* TODO: get related items from tag */}
      {/* <List title="Prodotti correlati" /> */}
    </>
  );
}
