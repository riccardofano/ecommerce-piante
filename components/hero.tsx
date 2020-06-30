import Btn from "../components/button";

const hero = require("../public/hero.jpg?resize&size=1000");

export default function Hero() {
  return (
    <>
      <div
        className="w-full md:w-768 h-64 bg-cover bg-center mx-auto"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="container pt-10 leading-tight">
          <h1 className="text-2xl font-bold w-4/6">
            Aggiungi un tocco di vitalità alla tua casa
          </h1>
          <Btn>Compra ora</Btn>
        </div>
      </div>
    </>
  );
}
