import { Type, getTypes } from "../utils/search-options-helpers";
import { GetServerSideProps } from "next";
import { Field, Formik } from "formik";
import router, { useRouter } from "next/router";
import { getPaginatedProducts } from "../utils/paginated-products";
import { Product } from "../model/product";
import useSWR from "swr";
import { useState } from "react";
import { stringify } from "querystring";
import Link from "next/link";
import deepEqual from "fast-deep-equal";

interface SearchProps {
  types: Type[];
  products: Product[];
  totalPages: number;
}

export default function Search({ types, products, totalPages }: SearchProps) {
  const { query } = useRouter();
  const [serverQuery] = useState(query);

  const initialValues = {
    type: query.type || "all",
  };

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/products?" + stringify(query), fetcher, {
    dedupingInterval: 60000,
    initialData: deepEqual(query, serverQuery)
      ? { products, totalPages }
      : undefined,
  });

  return (
    <>
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
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Field as="select" name="type">
              <option value="all">Tipologia</option>
              {types.map(({ type }, i) => (
                <option value={type} key={i}>
                  {type}
                </option>
              ))}
            </Field>
            <button type="submit">Submit</button>
            {data ? (
              <pre>{JSON.stringify(data, null, 4)}</pre>
            ) : (
              <h1>No data</h1>
            )}
          </form>
        )}
      </Formik>
      {data ? (
        <div>
          {new Array(data.totalPages).fill(1).map((_, id) => (
            <Link
              key={id}
              href={{
                pathname: "/search",
                query: { ...query, page: id + 1 },
              }}
            >
              <a>{id + 1}</a>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [types, { products, totalPages }] = await Promise.all([
    getTypes(),
    getPaginatedProducts(ctx.query),
  ]);

  return { props: { types, products, totalPages } };
};