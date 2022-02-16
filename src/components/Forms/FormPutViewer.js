import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  putViewer,
  getViewerDetail,
  deleteViewer,
} from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import NavBarPerfilViewer from "../NavBar/NavBarPerfilViewer.js";
import Footer from "../Footer/Footer.js";
import style from "./FormPutViewer.module.css";
import { useForm } from "react-hook-form";

const FormPutViewer = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { id } = useParams();
  const detail = useSelector((state) => state.viewerDetail);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getViewerDetail(id));
  }, [dispatch, id]);



  const changeEdit = () => {
    edit === false ? setEdit(true) : setEdit(false);
  };

  function onSubmit(data) {
    const cara = {
      name: data.name,
      password: data.password,
      image: data.image,
    };
    dispatch(putViewer(id, cara));
    alert("Usuario actualizado!");
    setEdit(false);
    history.push(`/viewerHome/${id}`);
  }

  function handleSubmitDelete(event) {
    dispatch(deleteViewer(id));
    alert("Usuario Borrado con exito");
    history.push("/");
  }
  

  return (
    <div className={style.editContainer}>
      <div className={style.nav}>
        <NavBarPerfilViewer />
      </div>
      <Link to={`/viewerHome/${id}`}>
      <button type="button" className="btn btn-primary">Volver</button>
      </Link>
      <div className={style.title}>
        <h1>Actualizar Espectador:</h1>
      </div>
      <div className={style.btnContainer}>
        <button onClick={changeEdit} className={style.btn} className="btn btn-primary">
          Edit
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
          <label className="form-label col-lg-12">Nombre:</label>
          {edit === false ? (
            <input
              readOnly="readOnly"
              type="text"
              name="name"
              value={detail.name}
              className="form-control my-2"
            />
          ) : (
            <input
              type="text"
              name="name"
              className="form-control my-2"
              {...register("name", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
          )}
          {
              <span className="text-danger text-small d-block mb-2">
                {errors.name && errors.name.message}
              </span>
            }
          <label className="form-label col-lg-12">Contraseña:</label>
          {edit === false ? (
            <input
              readOnly="readonly"
              type="password"
              name="password"
              value={detail.password}
              className="form-control my-2"
            />
          ) : (
            <input
              type="text"
              name="password"
              placeholder="Ingresa una nueva contraseña"
              className="form-control my-2"
              {...register("password", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
          )}
          {
              <span className="text-danger text-small d-block mb-2">
                {errors.password && errors.password.message}
              </span>
          }
          <label className="form-label col-lg-12">Imagen de Perfil: </label>
          {edit === false ? (
            <input
              readOnly="readonly"
              type="text"
              name="image"
              value={detail.image}
              className="form-control my-2"
            />
          ) : (
            <input
              type="url"
              name="image"
              placeholder="Ingresa una imagen"
              className="form-control my-2"
              {...register("image")}
            />
          )}
          <img src={detail.image} alt="imagen de perfil" className="rounded-circle"/>

          {edit === false ? (
          <button disabled type="submit" className={style.btn} className="btn btn-primary">
            Actualizar
          </button>
          ):(
          <button  type="submit" className={style.btn} className="btn btn-primary">
            Actualizar
          </button>)}
          
        </form>
      </div>
      <div className={style.btnContainer}>
        <button onClick={handleSubmitDelete} className={style.btn} className="btn btn-primary">
          Borrar Usuario
        </button>
      </div>
      {/* <div className={style.footerContainer}>
        <Footer />
      </div> */}
    </div>
  );
};

export default FormPutViewer;
