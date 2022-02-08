import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import useUser from "../../hooks/useUser";
import style from "./NavBarTheater.module.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function NavBarTheater({ id }) {
  const { logout } = useUser();

  function handleLogOut(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div className={style.navContainer}>
      <div className={style.logoContainer}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="A sala llena" />
        </Link>
      </div>
      <div className={style.dropdown}>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Mi cuenta
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href={`/create/${id}`}>
              <button href={`/create/${id}`}>Agregar espectáculos</button>
            </Dropdown.Item>
            <Dropdown.Item href="/sales">
              <button href="/sales">Ventas</button>
            </Dropdown.Item>
            <Dropdown.Item href="">
              <button onClick={handleLogOut}>Cerrar Sesión</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
