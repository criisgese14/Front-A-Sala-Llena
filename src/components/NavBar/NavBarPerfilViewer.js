import React from "react";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { Dropdown, Navbar, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import style from "./NavBarPerfilViewer.module.css";

const NavBarPerfilViewer = () => {
  const { id } = useParams();
  const { logout } = useUser();

  function handleLogOut(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div className={style.container}>
      <Navbar
        className={style.heigthConfig}
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand href={`/viewerHome/${id}`}>A Sala Llena</Navbar.Brand>
          <div className={style.buttonContainer}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Mi cuenta
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={`/formPutViewer/${id}`}>
                    <Button variant="outline-dark">Perfil</Button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={`/viewerHistory/${id}`}>
                    <Button variant="outline-dark">Mis Reservas</Button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={`/newsletter/${id}`}>
                    <Button variant="outline-dark">Newsletter</Button>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">
                  <Button variant="outline-dark" onClick={handleLogOut}>
                    Cerrar sesión
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarPerfilViewer;
