import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <>
      <Head>
        <meta lang="it" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Piante</title>
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
