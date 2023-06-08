/* eslint-disable react/prop-types */
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./noticia.css";
import { Button, Card, ListGroup } from "react-bootstrap/";

const Noticia = ({ noticia }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <Card className="mx-2 my-2 col-12 col-md-4" key={1}>
          <Card.Header>
            <img
              src={noticia.urlToImage || "https://mmercantil.com.pe/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"}
              alt={noticia.title}
              className="img-fluid"
            />
          </Card.Header>
          <Card.Body className="">
            <Card.Title>{noticia.title || "No existe titulo"}</Card.Title>
            <Card.Text className="">{noticia.description || "No pudimos encontrar la descripcion"}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <Button variant="danger">
              <a href={noticia.url} target="_blank" rel="noreferrer" className="navlink">
                Ver más
              </a>
            </Button>
          </Card.Footer>
        </Card>
      </ListGroup.Item>
    </div>
  );
};

export default Noticia;
