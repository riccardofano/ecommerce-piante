import { Type, getTypes } from "../utils/search-options-helpers";
import { GetServerSideProps } from "next";

interface SearchProps {
  types: Type[];
}

export default function Search({ types }: SearchProps) {
  return (
    <div>
      <select name="types" id="types">
        {types.map((type, i) => (
          <option value={type.type} key={i}>
            {type.type}
          </option>
        ))}
      </select>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const types = await getTypes();
  return { props: { types } };
};
