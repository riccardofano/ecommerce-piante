import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Categories from "../components/categories";
import Delivery from "../components/delivery";
import ProductList from "../components/product/list";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Piante</title>
      </Head>

      <Layout>
        <Hero />
        <div className="container">
          <Categories />
          <Delivery
            title="Spedizione gratuita"
            subtitle="su tutti i nostri prodotti con importo superiore a 10,00€"
          />
          <ProductList title="Nuovi prodotti" />
        </div>
      </Layout>
    </>
  );
}
