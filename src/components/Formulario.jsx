import { Form, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [noticias, setNoticias] = useState("");
  const [categoria, setCategoria] = useState("business");
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoria);

  useEffect(() => {
    consultarAPI();
  }, [categoriaSeleccionada]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${categoriaSeleccionada}&apiKey=d72483e4c0c7432ebb75a3f8b6b716f5`
      );
      const dato = await respuesta.json();
      await setNoticias(dato);
      setMostrarNoticias(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(e.target.value);
  };

  return (
    <>
      <Form className="row">
        <Form.Group className="mb-3 d-flex flex-column" controlId="tarea">
          <Form.Select onChange={(e) => handleSubmit(e)}>
            <option>Elige que tipo de noticia te interesa</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="general">General</option>
            <option value="health">Salud</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnologia</option>
          </Form.Select>
          <Container className="my-3 text-center">
            <Button
              variant="warning"
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              Buscar
            </Button>
          </Container>
        </Form.Group>
      </Form>
      <Container className="row">
        {mostrarNoticias && <ListaNoticias noticias={noticias.articles} />}
      </Container>
    </>
  );
};

export default Formulario;
