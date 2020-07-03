import { AppProps } from "next/app";
import "../styles/index.css";

import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_PUBLIC);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider mode="checkout-session" stripe={stripePromise} currency="EUR">
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
