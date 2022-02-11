import React, { useState, useEffect } from "react";
import NavBarPerfilViewer from "../NavBar/NavBarPerfilViewer";
import style from "./Newsletter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { allTheaters, putViewer, createFavorites } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const Newsletter = () => {
  const theaters = useSelector((state) => state.theaters);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [input, setInput] = useState({
    isSubscribed: false,
    nameTheater: "",
  });

  useEffect(() => {
    dispatch(allTheaters());
  }, []);

  function HandleChange(e) {
    {
      setInput({
        ...input,
        nameTheater: [...input.nameTheater, e.target.value],
      });
    }
  }
  const HandleCheck = (e) => {
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
    alert("Gracias por suscribirte!");
    setInput({
      isSubscribed: false,
      nameTheater: "",
    });
  };

  return (
    <div>
      <div>
        <NavBarPerfilViewer />
      </div>

      <div className={style.inputContainer}>
        <form onSubmit={(e) => HandleSubmit(e)}>
          <label className={style.inp}>
            Suscribite a nuestro newsletter para recibir informacion sobre los
            ultimos shows
          </label>

          <input type="checkbox" onChange={(e) => HandleCheck(e)} />
          <div>
            <select>
              <option defaultValue="">Elegi tu teatro favorito</option>
              {theaters?.map((el) => {
                return (
                  <option
                    key={el.id}
                    value={el.name}
                    onChange={(e) => HandleChange(e)}
                  >
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button>Suscribirse</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Newsletter;
