'use client'

import Pagina from "@/app/Components/Pagina";
import ValidatorMusicas from "@/app/Validators/ValidatorMusicas";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";
import { mask } from "remask";

export default function Page({ params }) {
  const route = useRouter();

  const musicas = JSON.parse(localStorage.getItem('musicas')) || [];
  const dados = musicas.find(item => item.id == params.id);
  const musica = dados || { nome: '', artista: '', data_lancamento: '', duracao: '' };

  function salvar(dados) {
    if (musica.id) {
      Object.assign(musica, dados);
    } else {
      dados.id = v4();
      musicas.push(dados);
    }

    localStorage.setItem('musicas', JSON.stringify(musicas));
    return route.push('/musicas');
  }

  return (
    <Pagina titulo="Músicas">
      <Formik
        initialValues={musica}
        validationSchema={ValidatorMusicas}
        onSubmit={values => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          setFieldValue,
        }) => (
          <Form>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange('nome')}
                isInvalid={!!errors.nome}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="artista">
              <Form.Label>Artista</Form.Label>
              <Form.Control
                type="text"
                name="artista"
                value={values.artista}
                onChange={handleChange('artista')}
                isInvalid={!!errors.artista}
              />
              <Form.Control.Feedback type="invalid">
                {errors.artista}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="data_lancamento">
              <Form.Label>Data de Lançamento</Form.Label>
              <Form.Control
                type="text"
                name="data_lancamento"
                value={values.data_lancamento}
                onChange={(e) =>
                  setFieldValue(
                    "data_lancamento",
                    mask(e.target.value, ["99/99/9999"])
                  )
                }
                isInvalid={!!errors.data_lancamento}
              />
              <Form.Control.Feedback type="invalid">
                {errors.data_lancamento}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="duracao">
              <Form.Label>Duração (min)</Form.Label>
              <Form.Control
                type="text"
                name="duracao"
                value={values.duracao}
                onChange={(e) =>
                  setFieldValue(
                    "duracao",
                    mask(e.target.value, ["999"])
                  )
                }
                isInvalid={!!errors.duracao}
              />
              <Form.Control.Feedback type="invalid">
                {errors.duracao}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/musicas"
                className="btn btn-danger ms-2"
              >
                <MdOutlineArrowBack /> Voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}

