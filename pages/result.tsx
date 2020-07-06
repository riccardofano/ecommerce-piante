import { NextPage } from "next";
import { useRouter } from "next/router";

import useSWR from "swr";
import { useEffect } from "react";
import { fetchGetJSON } from "../utils/api-helpers";
import { useShoppingCart } from "use-shopping-cart";

const ResultPage: NextPage = () => {
  const router = useRouter();
  const { clearCart } = useShoppingCart();
  useEffect(() => clearCart(), [clearCart]);

  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  return (
    <div className="page-container">
      <h1>Checkout Payment Result</h1>
      <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2>
      <h3>CheckoutSession response:</h3>
      <pre>{JSON.stringify(data) ?? "loading..."}</pre>
    </div>
  );
};

export default ResultPage;
