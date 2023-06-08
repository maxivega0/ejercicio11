import { Form, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const Formulario = () => {
    useEffect(()=> {
        consultarAPI();
    // Los corchetes hace que solo se usen en montaje las peticiones a la api
      },[]);

    const consultarAPI = async () =>{
        // Usamos el trycatch para estar notificados si hay un error
        try{
        //   setMostrarSpinner(true);
          // Peticion get, solo devuelve datos
          // Siempre que trabajemos con promesas, las promesas tardan un tiempo
          const respuesta = await fetch('https://newsapi.org/v2/top-headlines?category=sports&apiKey=1496bbc17b5a4c22a95f1c33d11f62a7');
          // metodo de javascript que extrae "del body" la informacion y hace el parse
          const dato = await respuesta.json()
          console.log(respuesta);
          console.log(dato);
        //   setPersonaje(dato[0])
        //   setMostrarSpinner(false);
    
        } catch(error){
          console.log(error);
        }
      }



  return (
    <div>

      <Form className="row">
        <Form.Group className="mb-3 d-flex flex-column" controlId="tarea">
          <Form.Select aria-label="Default select example">
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
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Container>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Formulario;
