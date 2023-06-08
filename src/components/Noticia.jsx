/* eslint-disable react/prop-types */
// import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./noticia.css";
import { Button, Card } from "react-bootstrap/";

const Noticia = ({ noticia }) => {
  {
    console.log(noticia);
  }
  return (
    <>
      <Card className="my-2 col-12 col-md-4">
        <Card.Header className="h-100">
          <img
            src={
              noticia.urlToImage ||
              "https://mmercantil.com.pe/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
            }
            alt={noticia.title}
            className="img-fluid h-100"
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{noticia.title || "No existe titulo"}</Card.Title>
          <Card.Text className="">
            {noticia.description || "No pudimos encontrar la descripcion"}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">
            <a
              href={noticia.url}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Ver más
            </a>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Noticia;
