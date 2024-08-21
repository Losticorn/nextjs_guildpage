import { useController } from "react-hook-form";
import classes from "../styles/InputText.module.css";

export default function InputText({
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
      <input className={invalid ? "error" : ""} id={id} {...rest} {...field} />
      {invalid && <p className={classes.error}>This cannot be empty!</p>}
    </>
  );
}

//finish this component
