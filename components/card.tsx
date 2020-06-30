const plant = require("../public/plant1.jpg?resize&size=200");

export default function card() {
  return (
    <div>
      <img
        src={plant}
        alt=""
        className="rounded object-cover object-center min-w-full"
      />
      <h1 className="font-bold mt-2">14,99€</h1>
      <p>Pianta 1</p>
    </div>
  );
}
