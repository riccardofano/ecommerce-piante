import { GetServerSideProps } from "next";
import inventory from "../../data/inventory.json";
import { Product } from "../../model/product";

import Layout from "../../components/layout";
import Details from "../../components/product/details";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

interface productProps {
  product: Product | null | undefined;
  relatedProducts: Product[];
}

export default function product({ product, relatedProducts }: productProps) {
  return (
    <>
      <ToastContainer />
      <Layout title={product ? product.name : "Prodotto non trovato"}>
        <div className="container">
          {product ? (
            <Details product={product} relatedProducts={relatedProducts} />
          ) : (
            <>
              <h1 className="mt-10 font-bold text-xl md:text-2xl text-center">
                Non è stato possibile trovare questo prodotto.
              </h1>
              <Link href="/">
                <a className="">
                  <p className="mt-4 text-lg md:text-xl text-center underline hover:text-gray-dark">
                    Torna alla homepage
                  </p>
                </a>
              </Link>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sku = ctx.params?.sku;
  const product = sku
    ? inventory.filter((p) => p.sku.toString() === sku)[0]
    : null;

  const relatedProducts = product
    ? inventory.filter((p) => p.type === product.type)
    : [];

  return { props: { product, relatedProducts } };
};
