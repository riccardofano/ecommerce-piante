import { FormikProps, Field } from "formik";
import { Type } from "../utils/search-options-helpers";

interface FiltersInterface {
  props: FormikProps<any>;
  types: Type[];
}

export default function Filters({ props, types }: FiltersInterface) {
  const priceRange = [5, 10, 15, 20, 25, 30, 50];
  const dimensionRange = [8, 12, 16, 20, 24, 28, 36];

  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="Cerca prodotto" name="search" />
      <Field
        as="select"
        name="type"
        onChange={(e: React.FormEvent) => {
          props.handleChange(e);
          props.submitForm();
        }}
      >
        <option value="all">Tipologia</option>
        {types.map(({ type }, i) => (
          <option value={type} key={i}>
            {type}
          </option>
        ))}
      </Field>
      <Field
        as="select"
        name="price"
        onChange={(e: React.FormEvent) => {
          props.handleChange(e);
          props.submitForm();
        }}
      >
        <option value="all">Prezzo</option>
        {priceRange.map((price, i) => (
          <option value={price} key={i}>
            Meno di {price} €
          </option>
        ))}
      </Field>
      <Field
        as="select"
        name="dimensions"
        onChange={(e: React.FormEvent) => {
          props.handleChange(e);
          props.submitForm();
        }}
      >
        <option value="all">Dimensione</option>
        {dimensionRange.map((dimension, i) => (
          <option value={dimension} key={i}>
            Meno di {dimension} cm
          </option>
        ))}
      </Field>
    </form>
  );
}
