import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser.js";
import { allTheaters } from "../../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Form, Container, Button } from "react-bootstrap";
import style from "./LoginTheaters.module.css";
function validate(input) {
  let errors = {};
  if (input.email === "") {
    errors.email = "e-mail no puede estar vacio";
  }
  if (!input.email.includes("@")) {
    errors.email = "No es un email valido";
  }
  if (input.password === "") {
    errors.password = "password no puede estar vacio";
  }

  return errors;
}

const LogInTheatres = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { hasLoginError, login } = useUser();
  const theaters = useSelector((state) => state.theaters);
  const [, setLoginData] = useState(
    sessionStorage.getItem("loginData")
      ? JSON.parse(sessionStorage.getItem("loginData"))
      : null
  );

  useEffect(() => {
    dispatch(allTheaters());
  }, [dispatch]);

  const filterTheater = theaters?.find(
    (e) => e.email === input.email && e.password === input.password
  );
  console.log(filterTheater);

  const handleFailure = (response) => {
    alert(response);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch("http://localhost:3001/login/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };

  function handleSubmit(e) {
    e.preventDefault();
    login(input);
    setInput({ email: "", password: "" });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div>
      <Navbar
        className={style.heigthConfig}
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand href="/">A Sala Llena</Navbar.Brand>
        </Container>
      </Navbar>

      <div className={style.loginContainer}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email..."
              value={input.email}
              name="email"
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <Form.Text className="text-muted">
              Nunca compartiremos esta información
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={input.password}
              name="password"
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </Form.Group>
          <Link to={`/theaterHome/${filterTheater?.id}`}>
            <Button variant="dark" type="submit">
              Iniciar Sesion
            </Button>
          </Link>
        </Form>
        {hasLoginError && <strong>Usuario o contraseña invalidos</strong>}
        <div className={style.btn}>
          <Link to="/theaterRegister">
            <Button variant="dark" type="submit">
              Registrarse
            </Button>
          </Link>
        </div>
        <Link to="/passwordRecoveryViewer">¿Olvidaste tu contraseña?</Link>
        <GoogleLogin
          clientId="506901482868-h6pf1ffiuv7vicavl8btlunj18oeamjr.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default LogInTheatres;
