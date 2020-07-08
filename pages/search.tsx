import { Type, getTypes } from "../utils/search-options-helpers";
import { getPaginatedProducts } from "../utils/paginated-products";
import { getAsString } from "../utils/get-as-string";

import { Product } from "../model/product";
import List from "../components/product/list";
import Filters from "../components/filters";

import { useState } from "react";
import { GetServerSideProps } from "next";
import router, { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import { stringify } from "querystring";
import deepEqual from "fast-deep-equal";
import { Formik } from "formik";
import Layout from "../components/layout";

interface SearchProps {
  types: Type[];
  products: Product[];
  totalPages: number;
}

export default function Search({ types, products, totalPages }: SearchProps) {
  const { query } = useRouter();
  const [serverQuery] = useState(query);

  const initialValues = {
    type: getAsString(query.type) || "all",
    price: getAsString(query.price) || "all",
    dimensions: getAsString(query.dimensions) || "all",
    search: getAsString(query.search) || "",
  };

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/products?" + stringify(query), fetcher, {
    dedupingInterval: 60000,
    initialData: deepEqual(query, serverQuery)
      ? { products, totalPages }
      : undefined,
  });

  return (
    <Layout>
      <div className="container">
        <h1 className="font-bold text-center text-xl md:text-2xl mb-4">
          {getAsString(query.search) || "Risultati della ricerca"}
        </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            router.replace(
              {
                pathname: "/search",
                query: { ...values, page: 1 },
              },
              undefined,
              { shallow: true }
            );
          }}
        >
          {({ handleSubmit }) => (
            <Filters types={types} handleSubmit={handleSubmit} />
          )}
        </Formik>
        {data ? (
          <div className="mt-4">
            <List products={data.products} />
            <div className="flex gap-2 items-center mt-10">
              {new Array(data.totalPages).fill(1).map((_, id) => (
                <Link
                  key={id}
                  href={{
                    pathname: "/search",
                    query: { ...query, page: id + 1 },
                  }}
                >
                  <a>
                    <p
                      className={`w-6 h-6 text-center text-base md:text-lg leading-6 ${
                        parseInt(getAsString(query.page) || "1") === id + 1
                          ? "bg-green-dark text-white rounded hover:bg-green-light"
                          : "hover:underline"
                      }
                    `}
                    >
                      {id + 1}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <h1>No data</h1>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [types, { products, totalPages }] = await Promise.all([
    getTypes(),
    getPaginatedProducts(ctx.query),
  ]);

  return { props: { types, products, totalPages } };
};
