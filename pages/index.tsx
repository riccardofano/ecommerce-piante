import Head from "next/head";
import { GetServerSideProps } from "next";
import { openDB } from "../utils/openDB";
import { Product } from "../model/product";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Categories from "../components/categories";
import Delivery from "../components/delivery";
import ProductList from "../components/product/list";

interface homeProps {
  products: Product[];
}

export default function Home({ products }: homeProps) {
  return (
    <>
      <Layout>
        <Hero />
        <div className="container">
          <Categories />
          <Delivery
            title="Spedizione gratuita"
            subtitle="su tutti i nostri prodotti con importo superiore a 10,00€"
          />
          <ProductList title="Nuovi prodotti" products={products} />
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const db = await openDB();
  const products = await db.all(
    "SELECT * FROM Product ORDER BY ROWID ASC LIMIT 4"
  );

  return { props: { products } };
};
