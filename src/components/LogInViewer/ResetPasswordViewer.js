import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putViewer, getViewerDetail } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import style from "./ResetPasswordViewer.module.css";
import { useForm } from "react-hook-form";

const ResetPasswordViewer = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { id } = useParams();
  const detail = useSelector((state) => state.viewerDetail);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "")

  useEffect(() => {
    dispatch(getViewerDetail(id));
  }, [dispatch, id]);

  

  function onSubmit(data) {
    const input={
      password: data.password,
    }
    console.log(input)
    dispatch(putViewer(id, input));
    alert("Contraseña actualizada!");
    history.push("/loginviewer")
  }

  return (
    <div className={style.editContainer}>
      <div className={style.title}>
        <h1>Actualizar contraseña</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
          <label>Contraseña:</label>

          <label>* Contraseña:</label>
          <input
            title="Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
            type="password"
            name="password"
            placeholder="Ingrese su Contraseña"
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
          {
            <span className="text-danger text-small d-block mb-2">
              {errors.password && errors.password.message}
            </span>
          }
          <small>Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos.</small>
          <br/>
          <label>* Repite tu contraseña:</label>
          <input
            title="Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
            type="password"
            name="passwordrepeat"
            placeholder="Repita la contraseña"
            className="form-control my-2"
            {...register("passwordrepeat", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              // pattern: {
              //     value: /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
              //     message: "Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
              // }
              validate: value =>
              value === password.current || "La contraseña debe coincidir"
            })}
          />
          {
            <span className="text-danger text-small d-block mb-2">
              {errors.passwordrepeat && errors.passwordrepeat.message}
            </span>
          }

          <button type="submit" className={style.btn}>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPasswordViewer;
