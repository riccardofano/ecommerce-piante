import data from "../data/inventory.json";

export function getTypes() {
  let types = [...new Set(data.map((product) => product.type))];
  return types; // [ "grassa", "fiorita", "aromatica" ]
}
