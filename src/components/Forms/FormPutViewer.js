import React, { useEffect, useState } from "react";
import swal from "sweetalert";
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
    swal({
      title: "Estás seguro?",
      icon: "warning",
      buttons: ['Cancel', 'Confirm'],
    })
    .then((res) => {
      if (res) {
        dispatch(putViewer(id, cara));
        swal("Usuario actualizado!", '', 'success');
        setEdit(false);
        history.push(`/viewerHome/${id}`);
      } else {
        swal("Revisa bien tus cambios👀!");
      }
    });
  }

  function handleSubmitDelete(event) {
    swal({
      title: "Estás seguro?",
      text: "Una vez borrado, no lo podras recuperar!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Usuario borrado con exito", {
          icon: "success",
        });
        dispatch(deleteViewer(id));
        history.push("/");
      } else {
        swal("Tu perfil seguira con vida ✔👀!");
      }
    });
  }
  

  return (
    <div className={style.formViewerContainer} >
      
      {/* <div className={style.nav}>
        <NavBarPerfilViewer />
      </div> */}
      
      <Link to={`/viewerHome/${id}`}>
      <button type="button" className="btn btn-secondary">Volver</button>
      </Link>
      <div>
          <button onClick={changeEdit}  className="btn btn-primary" >
          Edit
          </button>
      </div>
      
      <div className={style.formViewerPut}>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <div className="col-md-6">
          <img src={detail.image} alt="imagen de perfil" className={style.imagen}/>
          </div>

          <div className="col-md-6">
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
          </div>
          
          <div className="col-md-6">
          <label className="form-label col-lg-12">Nombre</label>
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
          </div>
          <div className="col-md-6">
          <label className="form-label col-lg-12">Contraseña</label>
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
                // pattern: {
                //     value: /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
                //     message: "Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
                // }
              })}
            />
          )}
          {
              <span className="text-danger text-small d-block mb-2">
                {errors.password && errors.password.message}
              </span>
          }
          </div>
          
          <div>
          {edit === false ? (
          <button disabled type="submit" className="btn btn-dark">
            Actualizar
          </button>
          ):(
          <button  type="submit" className="btn btn-dark">
            Actualizar
          </button>)}
          </div>
          
        </form>
        <div className={style.btnContainer}>
            <button onClick={handleSubmitDelete} className={style.btn} className="btn btn-danger">
            Borrar Usuario
            </button>
            </div>
      </div>

      
      {/* <div className={style.footerContainer}>
        <Footer />
      </div> */}
    </div>
  );
};

export default FormPutViewer;
