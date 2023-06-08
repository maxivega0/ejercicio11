/* eslint-disable react/prop-types */
import { ListGroup } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {

    // Envio nuevamente el prop al siguiente hijo itemtarea
    return (
        <ListGroup>
  {
    noticias.map((noticia, indiceNoticia) => (
      <Noticia
        noticia={noticia}
        key={indiceNoticia}
      />
    ))
  }
      </ListGroup>
    );
  };

export default ListaNoticias;