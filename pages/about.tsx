import Navbar from "../components/navbar";

export default function About() {
  const faq = [
    {
      question: "Quali sono i metodi di pagamento disponibili?",
      answer:
        "Il sito è in modalità test al momento, consigniamo di pagare can una carta VISA numbero 4242 4242 4242 4242 con data di scadenza nel futuro e un codice di sicurezza casuale.",
      tag: "payment",
    },
    {
      question: "Quali sono i tempi di spedizione?",
      answer:
        "Al momento non disponiamo di nessun metodo di spedizione perchè questo è un sito di dimostrazione.",
      tag: "delivery",
    },
    {
      question: "Dove si trova il mio ordine?",
      answer: "Mi dispiace dirlo ma il suo ordine non esiste.",
      tag: "order",
    },
    {
      question: "Come faccio ad effettuare un reso?",
      answer:
        "Per effettuare un reso è sufficiente mandare un email a nonesistente@nessunsito.com.",
      tag: "return",
    },
  ];
  const contacts = [
    { title: "Telefono:", subtitle: "+39 1234 567 890" },
    { title: "Indirizzo:", subtitle: "Via Roma, 1 20121 Milano MI, Italia" },
    { title: "Email:", subtitle: "piante@example.it" },
  ];
  return (
    <>
      <Navbar />
      <div className="container mb-20">
        <h1 className="font-bold text-xl md:text-2xl mt-10 mb-4">
          Domande frequenti
        </h1>
        {faq.map((v, i) => (
          <div key={i}>
            <h2 className="font-bold text-base md:text-lg" id={v.tag}>
              {v.question}
            </h2>
            <p className="text-base md:text-lg mb-4">{v.answer}</p>
          </div>
        ))}
        <h1 className="font-bold text-xl md:text-2xl mt-10 mb-4" id="contacts">
          Contatti
        </h1>
        {contacts.map((v, i) => (
          <div key={i}>
            <h2 className="font-bold text-base md:text-lg inline-block mr-4">
              {v.title}
            </h2>
            <p className="text-base md:text-lg inline-block">{v.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
}
