import { useController } from "react-hook-form";
import classes from "../styles/InputSelect.module.css";

export default function InputSelect({
  onChange,
  options,
  label,
  id,
  name,
  control,
  rules,
  ...rest
}) {
  const {
    field,
    fieldState: { invalid },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange} {...rest} {...field}>
        <option value="" disabled selected>
          Please select...
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {invalid && <p className={classes.error}>This cannot be empty!</p>}
    </>
  );
}
