import Select from "../select";
import Btn from "../button";
import { Field } from "formik";

interface addToCartProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  options: {
    value: number;
    label: string;
  }[];
}

export default function addToCart({ options, handleSubmit }: addToCartProps) {
  return (
    <form className="flex gap-3 mt-10" onSubmit={handleSubmit}>
      <Field name="quantity" component={Select} options={options} />
      <Btn className="flex-1" type="submit">
        Aggiungi al carrello
      </Btn>
    </form>
  );
}
