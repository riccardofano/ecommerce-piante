import Select from "./select";
import { Field } from "formik";
import { Type } from "../utils/search-options-helpers";

interface FiltersInterface {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  types: Type[];
}

export default function Filters({ types, handleSubmit }: FiltersInterface) {
  const priceRange = [5, 10, 15, 20, 25, 30, 50];
  const dimensionRange = [8, 12, 16, 20, 24, 28, 36];

  const priceOptions = [
    { value: "all", label: "Prezzo" },
    ...priceRange.map((v) => ({
      value: v,
      label: `Meno di ${v} €`,
    })),
  ];
  const dimensionOptions = [
    { value: "all", label: "Dimensioni" },
    ...dimensionRange.map((v) => ({
      value: v,
      label: `Meno di ${v} cm`,
    })),
  ];
  const typeOptions = [
    { value: "all", label: "Tipologia" },
    ...types.map((v) => ({
      value: v.type,
      label: `Pianta ${v.type}`,
    })),
  ];

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: put search field in navbar */}
      {/* <Field placeholder="Cerca prodotto" name="search" /> */}
      <Field
        className="flex-1"
        name="type"
        component={Select}
        options={typeOptions}
        submit
      />
      <Field
        className="flex-1"
        name="price"
        component={Select}
        options={priceOptions}
        submit
      />
      <Field
        className="flex-1"
        name="dimensions"
        component={Select}
        options={dimensionOptions}
        submit
      />
    </form>
  );
}
