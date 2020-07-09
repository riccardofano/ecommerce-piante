import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

interface layoutProps {
  children: React.ReactNode;
  title: string;
}

export default function layout({ children, title }: layoutProps) {
  return (
    <>
      <Head>
        <meta lang="it" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta
          name="description"
          content="Un sito d'esempio per e-commerce. Comprende server side rendering con next.js, typescript e integrazione con Stripe"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <NavBar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
