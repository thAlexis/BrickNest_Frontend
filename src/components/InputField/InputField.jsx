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
      <label
        className="text-[1rem] md:text-[1.2rem] mt-[1rem] lg:self-start"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="bg-white text-black rounded-[0.5rem] p-[0.2rem] w-[100%]"
        type={type}
        {...register(name)}
        name={name}
      />
      {name !== "password"
        ? touchedFields[name] &&
          errors[name] && (
            <p className="text-[0.6rem] md:text-[0.8rem] lg:self-start">
              {errors[name].message}
            </p>
          )
        : errors[name] && (
            <p className="text-[0.6rem] md:text-[0.8rem] lg:self-start">
              {errors[name].message}
            </p>
          )}
    </>
  );
}
