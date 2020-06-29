import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Piante</title>
      </Head>

      <div className="container mx-10">
        <Navbar />
      </div>
    </>
  );
}
