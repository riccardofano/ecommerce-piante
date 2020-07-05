import { Type, getTypes } from "../utils/search-options-helpers";
import { GetServerSideProps } from "next";
import { Field, Formik } from "formik";
import router, { useRouter } from "next/router";

interface SearchProps {
  types: Type[];
}

export default function Search({ types }: SearchProps) {
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
        </form>
      )}
    </Formik>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const types = await getTypes();
  return { props: { types } };
};
