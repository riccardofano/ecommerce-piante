import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Categories from "../components/categories";
import Delivery from "../components/delivery";
import ProductList from "../components/productList";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Piante</title>
      </Head>

      <Navbar />
      <Hero />
      <div className="container">
        <Categories />
        <Delivery />
        <ProductList />
      </div>
      <Footer />
    </>
  );
}
