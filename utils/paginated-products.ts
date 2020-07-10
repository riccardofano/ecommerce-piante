import { ParsedUrlQuery } from "querystring";
import inventory from "../data/inventory.json";
import { getAsString } from "./get-as-string";

export function getPaginatedProducts(query: ParsedUrlQuery) {
  const page = getValueNumber(query.page) || 1;
  const rowsPerPage = getValueNumber(query.rowsPerPage) || 3;
  const offset = (page - 1) * rowsPerPage;

  const type = getValueStr(query.type);
  const price = getValueNumber(query.price) * 100 || null;
  const dimension = getValueNumber(query.dimensions) || null;
  const search = getValueOrEmpty(query.search);

  const filteredProducts = inventory.filter((product) => {
    return (
      (type ? product.type === type : true) &&
      (price ? product.price <= price : true) &&
      (dimension ? product.dimension <= dimension : true) &&
      product.name.includes(search)
    );
  });

  const pageProducts = filteredProducts.slice(offset, offset + rowsPerPage);
  const totalRows = filteredProducts.length;

  return {
    products: pageProducts,
    totalPages: Math.ceil(totalRows / rowsPerPage),
  };
}

function getValueNumber(value: string | string[] | undefined) {
  const str = getValueStr(value);
  const number = parseInt(str!);
  return isNaN(number) ? 0 : number;
}

function getValueStr(value: string | string[] | undefined) {
  const str = getAsString(value);
  return !str || str.toLowerCase() === "all" ? null : str;
}

function getValueOrEmpty(value: string | string[] | undefined) {
  const str = getAsString(value);
  return !str || str.toLowerCase() === "all" ? "" : str;
}
