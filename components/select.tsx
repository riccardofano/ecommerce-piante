import { FieldProps } from "formik";
import Select, { ValueType } from "react-select";

interface Option {
  value: number;
  label: string;
}

interface SelectFieldProps extends FieldProps {
  options: Option[];
}

export default function SelectField({
  options,
  field,
  form,
}: SelectFieldProps) {
  return (
    <Select
      options={options}
      name={field.name}
      // give instance id to remove hydration error
      // might be a problem if there are more than one select boxes
      instanceId={1}
      value={
        (options
          ? options.find((option) => option.value === field.value)
          : "") as any
      }
      onChange={(option: ValueType<Option>): void =>
        form.setFieldValue(field.name, (option as Option).value)
      }
      onBlur={field.onBlur}
    />
  );
}
