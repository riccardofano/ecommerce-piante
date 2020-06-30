import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Categories from "../components/categories";

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
      </div>
    </>
  );
}
