import { Product } from "../../model/product";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { toast, Slide } from "react-toastify";

import AddToCart from "./addToCart";
import List from "./list";
import Delivery from "../delivery";
import { Formik } from "formik";

interface DetailsProps {
  product: Product;
  relatedProducts: Product[];
}
export default function Details({ product, relatedProducts }: DetailsProps) {
  const { sku, name, price, details, imageUrl, currency } = product;
  const { addItem } = useShoppingCart();
  const initialValues = {
    quantity: 1,
  };
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];

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
          <h2 className="font-bold inline-block mr-4" suppressHydrationWarning>
            {formatCurrencyString({ value: price, currency })}
          </h2>
          <p className="text-lg md:text-xl align-text-bottom inline-block">
            iva inclusa
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={({ quantity }) => {
              addItem(
                {
                  name,
                  sku: sku.toString(),
                  price,
                  currency,
                  image: imageUrl,
                },
                quantity
              );
              const message =
                quantity === 1
                  ? "È stato aggiunto un prodotto al carrello."
                  : `Sono stati aggiunti ${quantity} prodotti al carrello.`;
              toast(message, {
                position: "top-right",
                draggable: false,
                transition: Slide,
                progressStyle: { background: "#49c78c" },
                bodyStyle: {
                  color: "#000",
                  fontFamily: "Quicksand, Arial, sans-serif",
                },
              });
            }}
          >
            {(props) => (
              <AddToCart options={options} handleSubmit={props.handleSubmit} />
            )}
          </Formik>
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
      <List title="Prodotti correlati" products={relatedProducts} />
    </>
  );
}
