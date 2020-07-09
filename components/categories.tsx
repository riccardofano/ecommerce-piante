import Link from "next/link";

const fiorite = require("../public/fiorite.jpg?resize=1000");
const grasse = require("../public/grasse.jpg?resize=500");
const aromatiche = require("../public/aromatiche.jpg?resize=500");

export default function Categories() {
  return (
    <section className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-5 categories text-center">
      <div
        className="col-span-2 md:col-span-3 md:row-span-2 hover:shadow-inner-lg transition-shadow ease-in-out duration-150"
        style={{ backgroundImage: `url(${fiorite})` }}
      >
        <Link href="/search?type=fiorita">
          <a>
            <h2 className="font-bold text-lg md:text-xl">Fiorite</h2>
            <p className="md:mx-auto md:w-2/3 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </a>
        </Link>
      </div>
      <div
        className="md:col-span-2 hover:shadow-inner-lg transition-shadow ease-in-out duration-150"
        style={{ backgroundImage: `url(${grasse})` }}
      >
        <Link href="/search?type=grassa">
          <a>
            <h2 className="font-bold text-lg md:text-xl">Grasse</h2>
          </a>
        </Link>
      </div>
      <div
        className="md:col-span-2 hover:shadow-inner-lg transition-shadow ease-in-out duration-150"
        style={{ backgroundImage: `url(${aromatiche})` }}
      >
        <Link href="/search?type=aromatica">
          <a>
            <h2 className="font-bold text-lg md:text-xl">Aromatiche</h2>
          </a>
        </Link>
      </div>
    </section>
  );
}
