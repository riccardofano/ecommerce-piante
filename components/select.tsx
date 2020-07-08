import { FieldProps } from "formik";
import Select, { ValueType } from "react-select";

interface Option {
  value: number | string;
  label: string;
}

interface SelectFieldProps extends FieldProps {
  options: Option[];
  submit?: boolean;
  className?: string;
}

export default function SelectField({
  options,
  field,
  form,
  submit,
  className,
}: SelectFieldProps) {
  const value = (options
    ? options.find((option) => option.value.toString() === field.value)
    : "") as any;

  return (
    <Select
      options={options}
      name={field.name}
      // give instance id to remove hydration error
      // might be a problem if there are more than one select boxes
      instanceId={1}
      defaultValue={options[0]}
      value={value}
      onChange={(option: ValueType<Option>): void => {
        form.setFieldValue(field.name, (option as Option).value);
        submit ? form.submitForm() : null;
      }}
      styles={{
        indicatorSeparator: () => ({
          display: "none",
        }),
      }}
      onBlur={field.onBlur}
      className={className}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "#49c78c",
          primary75: "#81e3b5",
          primary50: "#81e3b5",
          primary25: "#bef0d9",
        },
      })}
    />
  );
}
