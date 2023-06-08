import { ListGroup } from "react-bootstrap";

const Noticias = ({ noticias }) => {
    // Envio nuevamente el prop al siguiente hijo itemtarea
    return (
      <ListGroup>
        {
          // Usamos el "map" xq crea un metodo en el array que es inmutable, como el prop
          // tarea para indicar los elementos de nuestro array tareas
          tareas.map((noticia, indiceNoticia) => (
            <ItemTarea
              tarea={noticia}
              key={indiceNoticia}
            ></ItemTarea>
          ))
          // segundo argumento del map, es el indice del array
        }
      </ListGroup>
    );
  };

export default ListaNoticias;