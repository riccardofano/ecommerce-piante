import AddToCart from "./addToCart";
import List from "./list";
import Delivery from "../delivery";

const image = require("../../public/plant1.jpg?resize&size=1500");

export default function fullsize() {
  return (
    <>
      <div className="text-2xl flex flex-col md:flex-row md:gap-3 md:relative">
        <img
          src={image}
          alt=""
          className="rounded md:w-1/2 md:max-h-3/4 self-start md:sticky md:top-0"
        />
        <div className="md:flex-1">
          <h1>Pianta</h1>
          <h2 className="font-bold inline-block mr-4">14,99€</h2>
          <p className="text-lg md:text-xl align-text-bottom inline-block">
            iva inclusa
          </p>
          <AddToCart />
          <Delivery
            title="Consegna prevista per:"
            subtitle="lunedì, 29.06 - lunedì 06.07"
          />
          <div className="mt-10">
            <h1 className="font-bold text-lg md:text-xl">Details</h1>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              deserunt perspiciatis mollitia magnam, qui aliquid a vel,
              quibusdam rem nemo dolores eos officiis! A iste similique quaerat
              labore, aut eius consectetur voluptas eos dolores consequatur
              vitae perspiciatis praesentium officia alias velit voluptatem
              obcaecati? Est perferendis cum odio beatae vero quaerat, inventore
              architecto labore. Sed voluptatem fugiat atque alias molestias
              velit. Voluptatem facilis expedita possimus cum. Libero commodi
              quisquam corporis dolor cupiditate a nisi voluptas labore? Magni
              labore non quae esse magnam delectus, odit officia ipsam similique
              sit ad nesciunt atque provident accusamus eum voluptas dignissimos
              alias. Consequatur aspernatur nam fugiat.
            </p>
          </div>
        </div>
      </div>
      <List title="Prodotti correlati" />
    </>
  );
}
