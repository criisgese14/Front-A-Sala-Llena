import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfileT, theaterDetail, deleteTheater } from "../../redux/actions";
import Footer from "../Footer/Footer";
import { useParams, useHistory, Link  } from "react-router-dom";
import NavBarTheater from "../NavBar/NavBarTheater";
import style from "./EditProfileTheater.module.css";
import { useForm } from "react-hook-form";

const EditProfileTheater = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const  detail  = useSelector((state) => state.theatersDetail);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeEdit = () => {
    edit === false ? setEdit(true) : setEdit(false);
  };
  

  useEffect(() => {
    dispatch(theaterDetail(id));
  }, [dispatch]);


  function onSubmit(data) {
    const cara = {
      name: data.name,
      password: data.password,
      image: data.image,
      adress: data.adress,
      phoneNumber: data.phoneNumber
    };
    dispatch(editProfileT(id, cara));
    alert("Teatro actualizado!");
    setEdit(false);
    history.push(`/theaterHome/${id}`);
  }

  function handleSubmitDelete() {
    dispatch(deleteTheater(id));
    alert("Usuario Borrado con exito");
    history.push("/");
  }
  return (
    <div>
      <NavBarTheater />
      <Link to={`/theaterHome/${id}`}>
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
          <img src={detail.image} alt="imagen de perfil" className="rounded float-left "/>

          <label className="form-label col-lg-12">Direccion:</label>
          {edit === false ? (
            <input
              readOnly="readOnly"
              type="text"
              name="adress"
              value={detail.adress}
              className="form-control my-2"
            />
          ) : (
            <input
              type="text"
              name="adress"
              className="form-control my-2"
              {...register("adress", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
          )}
          {
              <span className="text-danger text-small d-block mb-2">
                {errors.adress && errors.adress.message}
              </span>
            }

          <label className="form-label col-lg-12">Numero de Contacto: </label>
          {edit === false ? (
            <input
              readOnly="readOnly"
              type="number"
              name="phoneNumber"
              value={detail.phoneNumber}
              className="form-control my-2"
            />
          ) : (
            <input
              type="number"
              name="phoneNumber"
              className="form-control my-2"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
          )}
          {
              <span className="text-danger text-small d-block mb-2">
                {errors.phoneNumber && errors.phoneNumber.message}
              </span>
            }
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
        <button onClick={handleSubmitDelete} className="btn btn-primary">
        <span className=".glyphicon .glyphicon-remove"> Eliminar Teatro</span>
        </button>
      {/* <div className={style.footerContainer}>
        <Footer />
      </div> */}
    </div>
    </div>
  );
};

export default EditProfileTheater;
