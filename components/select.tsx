import { Field } from "formik";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];
export default function select() {
  return (
    <Field
      as="select"
      className="rounded border border-gray-light px-4 text-lg"
    >
      {options.map((option) => {
        return <option value={option.value}>{option.label}</option>;
      })}
    </Field>
  );
}
