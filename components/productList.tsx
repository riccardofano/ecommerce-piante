import Card from "../components/card";

export default function productList() {
  return (
    <section>
      <h1 className="font-bold text-center text-xl mt-10 mb-4">
        Nuovi prodotti
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 row-gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
