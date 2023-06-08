// import React from 'react';
import "./noticia.css"
import { Button, Card } from "react-bootstrap/";

const Noticia = () => {
  return (
    <div>
      <Card className="mx-2 my-2 col-12 col-md-4" key={1}>
        <Card.Header>
            <img src="https://i.guim.co.uk/img/media/7c619c39308fd1036424fff839c3549817ff8a32/0_164_8256_4954/master/8256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f73acef7b76a53b0ff9a952f729b0a0e" alt="TituloNoticia" className="img-fluid" />
        </Card.Header>
        <Card.Body className="">
          <Card.Title>Lionel Messi spurns Barcelona and Saudi Arabia to join Inter Miami in MLS - The Guardian</Card.Title>
          <Card.Text className="">Lionel Messi has confirmed his next, and possibly final, club in his wildly successful football career with the news that he will join Inter Miami of MLS</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button variant="danger">Ver más</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Noticia;
