import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postPasswordRecoveryViewer } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllViewers } from "../../redux/actions/index.js";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import style from "./LoginViewer.module.css";
import swal from "sweetalert";

const PasswordRecoveryViewer = () => {
  const dispatch = useDispatch();
  const viewers = useSelector((state) => state.viewers);
  const [input, setInput] = useState({ email: "" });

  useEffect(() => {
    dispatch(getAllViewers());
  }, [dispatch]);

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filterViewer = viewers?.find((e) => e.email === input.email);
    if (filterViewer) {
      postPasswordRecoveryViewer(input.email);
      swal("Email enviado!", "", "success");
      window.location.href = `http://localhost:3000`;
      setInput("");
    } else {
      // alert("Email no registrado");
      swal("", "Este email no esta registrado!", "error");
    }
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.header}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="A sala llena" />
        </Link>
      </div>
      <div className={style.formContainer}>
        <h2>Ingresa tu correo electronico</h2>
        <form className={style.inputs} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email..."
            value={input.email}
            name="email"
            onChange={inputChange}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecoveryViewer;
