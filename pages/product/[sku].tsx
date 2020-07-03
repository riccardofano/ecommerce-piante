import { GetServerSideProps } from "next";
import { openDB } from "../../utils/openDB";
import { Product } from "../../model/product";

import Layout from "../../components/layout";
import Details from "../../components/product/details";

interface productProps {
  product: Product | null | undefined;
}

export default function product({ product }: productProps) {
  // TODO: make better error page
  if (!product) {
    return <h1>Non è stato possibile trovare questo prodotto</h1>;
  }
  return (
    <>
      <Layout>
        <div className="container">
          <Details {...product} />
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sku = ctx.params?.sku;
  const db = await openDB();
  const product = await db.get<Product | undefined>(
    "SELECT * FROM Product where sku = ?",
    sku
  );

  return { props: { product: product || null } };
};
