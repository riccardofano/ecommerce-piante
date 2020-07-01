const image = require("../../public/plant1.jpg?resize&size=1500");

export default function fullsize() {
  return (
    <div className="text-2xl flex flex-col md:flex-row md:gap-3">
      <img src={image} alt="" className="rounded md:w-1/2 md:max-h-3/4" />
      <div className="">
        <h1>Pianta</h1>
        <h2 className="font-bold inline-block mr-4">14,99€</h2>
        <p className="text-lg md:text-xl align-text-bottom inline-block">
          iva inclusa
        </p>
      </div>
    </div>
  );
}
