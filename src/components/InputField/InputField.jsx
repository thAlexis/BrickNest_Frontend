export default function InputField({
  name,
  label,
  type,
  register,
  errors,
  touchedFields,
}) {
  return (
    <>
      <label className="text-base mt-[1rem] lg:self-start" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-white text-black rounded-[0.5rem] p-[0.2rem] w-[100%]"
        type={type}
        {...register(name)}
        name={name}
      />
      <div className="h-[1rem] flex w-[100%] justify-center lg:justify-start">
        {name !== "password"
          ? touchedFields[name] &&
            errors[name] && <p className="text-xs">{errors[name].message}</p>
          : errors[name] && <p className="text-xs">{errors[name].message}</p>}
      </div>
    </>
  );
}
