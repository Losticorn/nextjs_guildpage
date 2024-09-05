import { useController } from "react-hook-form";

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
      <label className="text-xl mb-0" htmlFor={id}>
        {label}
      </label>
      <select
        className="p-2 rounded-3xl border-none text-white bg-[#505050]"
        id={id}
        onChange={onChange}
        {...rest}
        {...field}
      >
        <option value="" disabled selected>
          Please select...
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {invalid && (
        <p className="text-red m-0 p-0 text-xl">This cannot be empty!</p>
      )}
    </>
  );
}
