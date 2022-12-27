import * as yup from "yup";

export const formSchema = yup.object().shape({
  description: yup.string().required("Campo obrigatório"),
  value: yup.number().required("Campo obrigatório"),
  type: yup.string().required("Campo obrigatório"),
});
