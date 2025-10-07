import * as yup from "yup";

const registerSchema = yup.object({
  lastname: yup
    .string()
    .required("Le nom est obligatoire")
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .matches(
      /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+(?:[ -][A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+)*$/,
      "Le nom doit commencer par une majuscule et ne contenir que des lettres"
    ),
  firstname: yup
    .string()
    .required("Le prénom est obligatoire")
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .matches(
      /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+(?:[ -][A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+)*$/,
      "Le prénom doit commencer par une majuscule et ne contenir que des lettres"
    ),
  username: yup
    .string()
    .required("Le nom d'utilisateur est obligatoire")
    .min(2, "Le nom d'utilisateur est trop court")
    .matches(
      /^[A-Za-z][A-Za-z0-9_-]*$/,
      "Le nom d'utilisateur doit commencer par une lettre"
    ),
  mail: yup
    .string()
    .email("Adresse mail invalide")
    .required("Adresse mail obligatoire"),
  password: yup
    .string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial"
    ),
});

export default registerSchema;
