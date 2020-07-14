import Btn from "../components/button";
import Link from "next/link";

const hero = require("../public/hero.jpg?resize&size=1000");

export default function Hero() {
  return (
    <>
      <div
        className="w-full md:w-768 lg:w-1024 h-64 md:h-80 bg-cover bg-center mx-auto md:rounded"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="container pt-10 md:flex justify-center leading-tight h-full flex-col">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold w-4/6 mb-2 md:mb-4 md:-mt-20">
            Aggiungi un tocco di vitalità alla tua casa
          </h1>
          <Link href="/search">
            <a>
              <Btn className="md:px-10">Scopri tutti i prodotti</Btn>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
