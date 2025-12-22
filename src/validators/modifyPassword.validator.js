import * as yup from "yup";

const modifyPasswordSchema = yup.object({
  password: yup.string().required("Le mot de passe est obligatoire"),
  newpassword: yup
    .string()
    .required("Le nouveau mot de passe est obligatoire")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial"
    ),
});

export default modifyPasswordSchema;
