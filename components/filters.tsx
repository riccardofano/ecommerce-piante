import Select from "./select";
import { Field } from "formik";

interface FiltersInterface {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  types: string[];
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
      value: v,
      label: `Pianta ${v}`,
    })),
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-center"
    >
      {/* TODO: put search field in navbar */}
      {/* <Field placeholder="Cerca prodotto" name="search" /> */}
      <Field
        className="flex-1 mb-2 md:mr-4"
        name="type"
        component={Select}
        options={typeOptions}
        submit
      />
      <Field
        className="flex-1 mb-2 md:mr-4"
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
