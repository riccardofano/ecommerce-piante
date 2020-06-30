const fiorite = require("../public/fiorite.jpg?resize=1000");
const grasse = require("../public/grasse.jpg?resize=500");
const aromatiche = require("../public/aromatiche.jpg?resize=500");

export default function Categories() {
  return (
    <section className="grid grid-cols-2 gap-3 mt-10 md:grid-cols-5 categories">
      <div
        className="col-span-2 md:col-span-3 md:row-span-2 text-center"
        style={{ backgroundImage: `url(${fiorite})` }}
      >
        <h2 className="font-bold">Fiorite</h2>
        <p className="md:mx-auto md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div
        className="md:col-span-2"
        style={{ backgroundImage: `url(${grasse})` }}
      >
        <h2 className="font-bold text-center">Grasse</h2>
      </div>
      <div
        className="md:col-span-2"
        style={{ backgroundImage: `url(${aromatiche})` }}
      >
        <h2 className="font-bold text-center">Aromatiche</h2>
      </div>
    </section>
  );
}
