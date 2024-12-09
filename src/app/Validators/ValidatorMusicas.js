import * as Yup from "yup";

const ValidatorMusicas = Yup.object().shape({
  nome: Yup.string()
    .required("Campo obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres!")
    .max(45, "O nome pode ter no máximo 45 caracteres!"),
  artista: Yup.string()
    .required("Campo obrigatório")
    .min(3, "O nome do artista deve ter pelo menos 3 caracteres!")
    .max(45, "O nome do artista pode ter no máximo 45 caracteres!"),
  data_lancamento: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Insira uma data válida no formato DD/MM/AAAA"
    ),
  duracao: Yup.string()
    .required("Campo obrigatório")
    .matches(/^\d{1,3}$/, "A duração deve ser um número entre 1 e 999 minutos"),
});

export default ValidatorMusicas;


