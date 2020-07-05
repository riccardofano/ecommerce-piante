import { Type, getTypes } from "../utils/search-options-helpers";
import { GetServerSideProps } from "next";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";

interface SearchProps {
  types: Type[];
}

export default function Search({ types }: SearchProps) {
  const { query } = useRouter();
  const initialValues = {
    type: query.type || "all",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ values }) => (
        <Field as="select" name="type">
          <option value="all">Tipologia</option>
          {types.map((type, i) => (
            <option value={type.type} key={i}>
              {type.type}
            </option>
          ))}
        </Field>
      )}
    </Formik>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const types = await getTypes();
  return { props: { types } };
};
