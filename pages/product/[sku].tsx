import { GetServerSideProps } from "next";
import { openDB } from "../../utils/openDB";
import { Product } from "../../model/product";

import Layout from "../../components/layout";
import Details from "../../components/product/details";

interface productProps {
  product: Product | null | undefined;
  relatedProducts: Product[];
}

export default function product({ product, relatedProducts }: productProps) {
  // TODO: make better error page
  if (!product) {
    return <h1>Non è stato possibile trovare questo prodotto</h1>;
  }
  return (
    <>
      <Layout>
        <div className="container">
          <Details product={product} relatedProducts={relatedProducts} />
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

  const relatedProducts = await db.all<Product[] | undefined>(
    `SELECT * FROM Product
     WHERE (@type = type)
     AND NOT (@sku = sku)
     ORDER BY ROWID ASC LIMIT 4`,
    {
      "@type": product?.type,
      "@sku": product?.sku,
    }
  );
  console.log(`relatedProducts: `, relatedProducts);

  return { props: { product: product || null, relatedProducts } };
};
