import * as yup from "yup";

const loginSchema = yup.object({
  mail: yup
    .string()
    .email("Adresse mail invalide")
    .required("Adresse mail obligatoire"),
});

export default loginSchema;
