import Link from "next/link";

const fiorite = require("../public/fiorite.jpg?resize&size=500");
const grasse = require("../public/grasse.jpg?resize&size=500");
const aromatiche = require("../public/aromatiche.jpg?resize&size=500");

export default function Categories() {
  const catagories = [
    {
      title: "Piante Fiorite",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at qui similique?",
      img: fiorite,
      keyword: "fiorita",
    },
    {
      title: "Piante Grasse",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum enim debitis adipisci dolorum.",
      img: grasse,
      keyword: "grassa",
    },
    {
      title: "Piante Aromatiche",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt provident distinctio blanditiis!",
      img: aromatiche,
      keyword: "aromatica",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row mt-10 categories">
      {catagories.map((v) => (
        <Link key={v.keyword} href={`/search?type=${v.keyword}`}>
          <div className="flex md:flex-col mb-4 md:mr-4 last:mb-0 md:last:mr-0 md:mb-0 items-center hover:underline cursor-pointer">
            <img
              className="w-24 md:w-full h-32 md:h-64 lg:h-72 mr-4 md:mr-0 object-cover rounded self-stretch"
              src={v.img}
              alt={v.title}
            />
            <div>
              <h2 className="font-bold text-lg md:text-xl md:mt-2 hover:underline">
                {v.title}
              </h2>
              <p className="text-base md:text-lg leading-tight">{v.text}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
