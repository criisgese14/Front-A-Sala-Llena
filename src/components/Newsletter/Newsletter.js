import React, { useState, useEffect } from "react";
import NavBarPerfilViewer from "../NavBar/NavBarPerfilViewer";
import style from "./Newsletter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { allTheaters, putViewer, createFavorites } from "../../redux/actions";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { Form, Button } from "react-bootstrap";

const Newsletter = () => {
  const theaters = useSelector((state) => state.theaters);
  const detail = useSelector((state) => state.viewerDetail);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [input, setInput] = useState({
    isSubscribed: false,
    nameTheater: "",
  });

  useEffect(() => {
    dispatch(allTheaters());
  }, [dispatch]);

  function HandleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      nameTheater: e.target.value,
    });
  }
  const HandleCheck = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      setInput((prevInput) => ({
        ...prevInput,
        isSubscribed: true,
      }));
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(putViewer(id, { isSubscribed: input.isSubscribed }));
    dispatch(createFavorites(id, { nameTheater: input.nameTheater }));
    console.log(input);
    swal("Gracias por suscribirte!", "", "succes");
    setInput({
      isSubscribed: false,
      nameTheater: "",
    });
  };

  return (
    <div>
      <div className={style.navContainer}>
        <NavBarPerfilViewer img={detail?.image} />
      </div>
      <div className={style.newsletter}>
        <h2 className={style.title}>
          Suscribite a nuestro newsletter para recibir informacion sobre los
          ultimos shows
        </h2>
        <Form>
          <div className={style.checkContainer}>
            <Form.Group className="mb-2" controlId="formBasicCheckbox">
              <Form.Check
                variant="dark"
                type="checkbox"
                label="Hace click para suscribirte"
                onChange={(e) => HandleCheck(e)}
              />
            </Form.Group>
          </div>
          <div className={style.select}>
            <Form.Select size="lg" onChange={(e) => HandleChange(e)}>
              <option defaultValue="" hidden>
                Elegi tu teatro favorito
              </option>
              {theaters?.map((el) => {
                return (
                  <option key={el.id} value={el.name}>
                    {el.name}
                  </option>
                );
              })}
            </Form.Select>
          </div>
          <Button
            disabled={!input.isSubscribed || !input.nameTheater}
            variant="dark"
            onClick={(e) => HandleSubmit(e)}
          >
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Newsletter;
