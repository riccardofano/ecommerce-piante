import { GetServerSideProps } from "next";
import { openDB } from "../../utils/openDB";
import { Product } from "../../model/product";

import Layout from "../../components/layout";
import Details from "../../components/product/details";
import Link from "next/link";

interface productProps {
  product: Product | null | undefined;
  relatedProducts: Product[];
}

export default function product({ product, relatedProducts }: productProps) {
  return (
    <>
      <Layout>
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
