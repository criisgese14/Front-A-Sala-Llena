import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import style from "./NavBarAll.module.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function NavBarAll({ setActualPage, setOrder }) {
  return (
    <div>
      <div className={style.NavBarAllContainer}>
        <NavBar setActualPage={setActualPage} setOrder={setOrder} />
        <div className={style.loginContainer}>
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Entrar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <Link to="/loginviewer">
                  <button>Login Espectador</button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Link to="/loginteatres">
                  <button>Login Teatro</button>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
