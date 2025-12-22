import * as yup from "yup";

const deleteAccountSchema = yup.object({
  delete: yup
    .string()
    .oneOf(["Supprimer"], "Vous devez écrire exactement 'Supprimer'")
    .required("Ce champ est obligatoire"),
});

export default deleteAccountSchema;
