import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser.js";
import style from "./NavBarViewer.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import Filters from "./Filters";

export default function NavBarViewer({img}) {
  const { logout } = useUser();
  const { id } = useParams();

  function handleLogOut(e) {
    e.preventDefault();
    logout();
  }
  console.log(id);
  return (
    <div>
      <div className={style.NavBarAllContainer}>
        <div className={style.column}>
          <Link to="/">
            <img className={style.logo} src={logo} alt="A sala llena" />
          </Link>
          <div>
            <img src={img} alt='img'/>
          </div>
          <div>
            <Filters />
          </div>
        </div>
        <div className={style.miCuenta}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Mi cuenta
            </Dropdown.Toggle>

            <Dropdown.Menu>
              
              <Dropdown.Item>
              <Link to={`/formPutViewer/${id}`}>
                <button>Perfil</button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
            <Link to={`/viewerHistory/${id}`}>
            <button>Mis Reservas</button>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={`/newsletter/${id}`}>
            <button>Newsletter</button>
            </Link>
          </Dropdown.Item>
              
              <Dropdown.Item href="#/action-2">
                <button onClick={handleLogOut}>Cerrar sesión</button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}