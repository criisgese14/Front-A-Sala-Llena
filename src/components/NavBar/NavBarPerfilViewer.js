import React from "react";
import useUser from "../../hooks/useUser";
import { Dropdown, Navbar, Container } from "react-bootstrap";
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
          <Navbar.Brand href="/">A Sala Llena</Navbar.Brand>
          <div className={style.buttonContainer}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Mi cuenta
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href={`formPutViewer/${id}`}>
                  <button>Mi Cuenta</button>
                </Dropdown.Item>
                <Dropdown.Item href={`viewerHistory/${id}`}>
                  <button>Mis Reservas</button>
                </Dropdown.Item>
                <Dropdown.Item href={`newsletter/${id}`}>
                  <button>Newsletter</button>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <button onClick={handleLogOut}>Cerrar sesión</button>
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
