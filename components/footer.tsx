import Link from "next/link";

export default function footer() {
  const help = [
    {
      title: "Metodi di pagamento",
      tag: "payment",
    },
    {
      title: "Tempi di spedizione",
      tag: "delivery",
    },
    {
      title: "Dove si trova il mio ordine",
      tag: "order",
    },
    {
      title: "Come effettuare un reso",
      tag: "return",
    },
  ];
  return (
    <section className="mt-20 text-center py-8 bg-gray-lighter">
      <div className="container flex flex-col md:flex-row md:justify-around items-center text-sm md:text-base footer">
        <div className="mb-4 md:mb-0">
          <Link href="/about">
            <a>
              <h1 className="font-bold uppercase hover:underline">Aiuto</h1>
            </a>
          </Link>
          <ul>
            {help.map((v, i) => (
              <li key={i}>
                <Link href={`/about#${v.tag}`} key={i}>
                  <a>{v.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link href="/about#contacts">
            <a>
              <h1 className="font-bold uppercase hover:underline">Contatti</h1>
            </a>
          </Link>
          <ul>
            <li>Telefono: +39 1234 567 890</li>
            <li>Indirizzo: Via Roma, 1</li>
            <li>20121 Milano MI, Italia</li>
            <li>
              <a href="mailto:piante@example.it">email: piante@example.it</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
