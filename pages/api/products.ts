import { NextApiRequest, NextApiResponse } from "next";
import { getPaginatedProducts } from "../../utils/paginated-products";

export default async function products(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = await getPaginatedProducts(req.query);
  res.json(products);
}
