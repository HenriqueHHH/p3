"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../Components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    setMusicas(JSON.parse(localStorage.getItem("musicas")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = musicas.filter((item) => item.id !== id);
      localStorage.setItem("musicas", JSON.stringify(dados));
      setMusicas(dados);
    }
  }

  return (
    <Pagina titulo="Músicas">
      <Link href="/musicas/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Artista</th>
            <th>Data de Lançamento</th>
            <th>Duração (min)</th>
          </tr>
        </thead>
        <tbody>
          {musicas.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/musicas/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.artista}</td>
              <td>{new Date(item.data_lancamento).toLocaleDateString("pt-BR")}</td>
              <td>{item.duracao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
