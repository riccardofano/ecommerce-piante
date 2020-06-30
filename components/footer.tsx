import Link from "next/link";

export default function footer() {
  return (
    <section className="mt-20 text-center">
      <p className="bg-gray-light cursor-pointer font-bold py-1">Torna su</p>

      <div className="py-8 bg-gray-lighter">
        <div className="container flex flex-col row-gap-4 md:flex-row md:justify-around items-center">
          <div>
            <h1 className="font-bold uppercase">Aiuto</h1>
            <ul>
              <li>
                <Link href="#">
                  <a>Metodi di pagamento</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Tempi di spedizione</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Dove si trova il mio ordine</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Come effettuare un reso</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold uppercase">Contatti</h1>
            <ul>
              <li>
                <Link href="#">
                  <a>Telefono: +39 1234 567 890</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Indirizzo: Via Roma, 1</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>20121 Milano MI, Italia</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>email: piante@example.it</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
