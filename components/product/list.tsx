import Card from "./card";

export default function list() {
  return (
    <section>
      <h1 className="font-bold text-center text-xl md:text-2xl mt-10 mb-4">
        Nuovi prodotti
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 row-gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
