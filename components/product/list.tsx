import Card from "./card";
import { Product } from "../../model/product";

interface listProps {
  title?: string;
  products: Product[];
}

export default function list({ title, products }: listProps) {
  return (
    <section>
      {title ? (
        <h1 className="font-bold text-center text-xl md:text-2xl mt-10 mb-4">
          {title}
        </h1>
      ) : null}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 row-gap-4">
        {products
          ? products.map((product) => <Card key={product.sku} {...product} />)
          : null}
      </div>
    </section>
  );
}
