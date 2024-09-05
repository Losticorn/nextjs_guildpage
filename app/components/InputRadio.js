import { useController } from "react-hook-form";
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
      <label className="text-xl mb-0" htmlFor={id}>
        {label}
      </label>
      <div className="flex justify-left gap-4 m-2">
        {options.map((option, index) => (
          <div className="flex items-center gap-1" key={option}>
            <input
              className="w-4 h-4"
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
      {showError && (
        <p className="text-red m-0 p-0 text-xl">You have to choose!</p>
      )}
    </>
  );
}
