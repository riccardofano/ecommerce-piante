import { Type, getTypes } from "../utils/search-options-helpers";
import { GetServerSideProps } from "next";

interface SearchProps {
  types: Type[];
}

export default function Search({ types }: SearchProps) {
  return (
    <div>
      <pre>{JSON.stringify(types, null, 4)}</pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const types = await getTypes();
  return { props: { types } };
};
