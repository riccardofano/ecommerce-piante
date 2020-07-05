import { Type, getTypes } from "../utils/search-options-helpers";
import { GetServerSideProps } from "next";
import { Field, Formik } from "formik";
import router, { useRouter } from "next/router";
import { getPaginatedProducts } from "../utils/paginated-products";
import { Product } from "../model/product";

interface SearchProps {
  types: Type[];
  products: Product[];
  totalPages: number;
}

export default function Search({ types, products, totalPages }: SearchProps) {
  const { query } = useRouter();
  const initialValues = {
    type: query.type || "all",
  };

  return (
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
          <pre>{JSON.stringify({ totalPages, products }, null, 4)}</pre>
        </form>
      )}
    </Formik>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [types, { products, totalPages }] = await Promise.all([
    getTypes(),
    getPaginatedProducts(ctx.query),
  ]);

  return { props: { types, products, totalPages } };
};
