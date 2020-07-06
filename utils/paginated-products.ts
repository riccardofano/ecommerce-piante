import { ParsedUrlQuery } from "querystring";
import { openDB } from "./openDB";
import { getAsString } from "./get-as-string";
import { Product } from "../model/product";

const mainQuery = `
    FROM Product
    WHERE (@type is NULL OR @type = type)
`;

export async function getPaginatedProducts(query: ParsedUrlQuery) {
  const db = await openDB();

  const page = getValueNumber(query.page) || 1;
  const rowsPerPage = getValueNumber(query.rowsPerPage) || 3;
  const offset = (page - 1) * rowsPerPage;

  const dbParams = {
    "@type": getValueStr(query.type),
  };

  const productPromise = db.all<Product[]>(
    `SELECT * ${mainQuery} LIMIT @rowsPerPage OFFSET @offset`,
    {
      ...dbParams,
      "@rowsPerPage": rowsPerPage,
      "@offset": offset,
    }
  );

  const totalRowsPromise = db.get<{ count: number }>(
    `SELECT COUNT(*) as count ${mainQuery}`,
    dbParams
  );

  const [products, totalRows] = await Promise.all([
    productPromise,
    totalRowsPromise,
  ]);

  return { products, totalPages: Math.ceil(totalRows!.count / rowsPerPage) };
}

function getValueNumber(value: string | string[] | undefined) {
  const str = getValueStr(value);
  const number = parseInt(str!);
  return isNaN(number) ? null : number;
}

function getValueStr(value: string | string[] | undefined) {
  const str = getAsString(value);
  return !str || str.toLowerCase() === "all" ? null : str;
}
