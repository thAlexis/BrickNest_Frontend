import * as yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const newPostSchema = yup.object({
  image: yup
    .mixed()
    .test("required", "L'image est obligatoire", (value) => {
      return value && value.length > 0;
    })
    .test("fileSize", "L'image est trop lourde (5Mo max)", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= MAX_FILE_SIZE;
    })
    .test(
      "fileType",
      "Format non autorisé (JPG, PNG ou WEBP uniquement)",
      (value) => {
        if (!value || value.length === 0) return true;
        return SUPPORTED_FORMATS.includes(value[0].type);
      }
    ),
  title: yup.string().required("Le titre est obligatoire"),
  text: yup
    .string()
    .required("Le texte est obligatoire")
    .max(1500, "1500 caractères maximum"),
});

export default newPostSchema;
