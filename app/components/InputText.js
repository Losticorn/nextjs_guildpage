import { useController } from "react-hook-form";

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
      <label className="text-xl mb-0" htmlFor={id}>
        {label}
      </label>
      <input
        className={
          invalid
            ? "text-red m-0 p-0 text-xl"
            : "p-2 rounded-3xl text-white border-none placeholder:text-[#c2c2c2] placeholder:text-sm bg-[#505050]"
        }
        id={id}
        {...rest}
        {...field}
      />
      {invalid && (
        <p className="text-red m-0 p-0 text-xl">This cannot be empty!</p>
      )}
    </>
  );
}

//finish this component
