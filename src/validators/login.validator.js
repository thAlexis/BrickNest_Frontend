import * as yup from "yup";

const loginSchema = yup.object({
  mail: yup
    .string()
    .email("Adresse mail invalide")
    .required("Adresse mail obligatoire"),
  password: yup.string().required("Mot de passe obligatoire"),
});

export default loginSchema;
