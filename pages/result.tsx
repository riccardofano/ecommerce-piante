import { NextPage } from "next";
import { useRouter } from "next/router";

import useSWR from "swr";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Layout from "../components/layout";
import Link from "next/link";

const ResultPage: NextPage = () => {
  const router = useRouter();
  const { clearCart } = useShoppingCart();
  useEffect(() => clearCart(), [clearCart]);

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(`/api/checkout/${router.query.session_id}`, fetcher);

  return (
    <Layout
      title={
        data?.statusCode === 500
          ? "Qualcosa è andato storto"
          : data
          ? "Pagamento riuscito"
          : "Caricamento..."
      }
    >
      <div className="container">
        {data?.statusCode === 500 ? (
          <>
            <h1 className="mt-10 font-bold text-xl md:text-2xl text-center">
              Qualcosa è andato storto.
            </h1>
            <Link href="/">
              <a className="">
                <p className="mt-4 text-lg md:text-xl text-center underline hover:text-gray-dark">
                  Torna alla homepage
                </p>
              </a>
            </Link>
          </>
        ) : data ? (
          <div>
            <h1 className="mt-10 font-bold text-xl md:text-2xl text-center">
              Complimenti il pagamento è andato a buon fine!
            </h1>
            <Link href="/">
              <a className="">
                <p className="mt-4 text-lg md:text-xl text-center underline hover:text-gray-dark">
                  Torna alla homepage
                </p>
              </a>
            </Link>
          </div>
        ) : (
          <h1 className="mt-10 font-bold text-xl md:text-2xl text-center">
            Caricamento...
          </h1>
        )}
      </div>
    </Layout>
  );
};

export default ResultPage;
