import { useController } from "react-hook-form";
import classes from "../styles/InputRadio.module.css";
import { useState, useEffect } from "react";

export default function InputText({
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
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
  });
  const [value, setValue] = useState(field.value || "");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // this will show error message only when there is an error and the form is submitted
    setShowError(!!error);
  }, [error]);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className={classes.checkbox}>
        {options.map((option, index) => (
          <div key={option}>
            <input
              onChange={(e) => {
                const selectedValue = e.target.value;
                setValue(selectedValue);
                field.onChange(selectedValue);
              }}
              id={`${id}-${index}`}
              name={name}
              checked={value === option}
              type="radio"
              value={option}
              {...rest}
            />
            <label htmlFor={`${id}-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      {showError && <p className={classes.error}>You have to choose!</p>}
    </>
  );
}
