import Card from "./card";

interface listProps {
  title: string;
  amount?: number;
}

export default function list({ title, amount }: listProps) {
  return (
    <section>
      {title ? (
        <h1 className="font-bold text-center text-xl md:text-2xl mt-10 mb-4">
          Nuovi prodotti
        </h1>
      ) : null}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 row-gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
