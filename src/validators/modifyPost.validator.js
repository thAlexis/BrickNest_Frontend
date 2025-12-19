import * as yup from "yup";

const modifyPostSchema = yup.object({
  title: yup.string().required("Le titre est obligatoire"),
  text: yup
    .string()
    .required("Le texte est obligatoire")
    .max(1500, "1500 caractères maximum"),
});

export default modifyPostSchema;
