import Btn from "../components/button";
import Link from "next/link";

const hero = require("../public/hero.jpg?resize&size=1000");

export default function Hero() {
  return (
    <>
      <div
        className="w-full md:w-768 lg:w-1024 h-64 bg-cover bg-center mx-auto md:rounded"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="container pt-10 leading-tight">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-4/6 mb-2 md:mb-4">
            Aggiungi un tocco di vitalità alla tua casa
          </h1>
          <Link href="/search">
            <a>
              <Btn>Compra ora</Btn>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
