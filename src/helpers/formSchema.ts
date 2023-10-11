import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Jméno je vyžadováno"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Pouze čísla jsou povolena")
    .required("Telefonní číslo je vyžadováno"),
  email: yup.string().email("Neplatný e-mail").required("E-mail je vyžadován"),
  language: yup
    .string()
    .oneOf(["Čeština", "Angličtina", "Slovenština"], "Vyberte platný jazyk")
    .required("Jazyk je vyžadován"),
});
