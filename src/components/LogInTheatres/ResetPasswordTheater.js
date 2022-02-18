import React, { useEffect, useState, useRef  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileT, theaterDetail } from "../../redux/actions/index.js";
import { useParams, useHistory } from "react-router-dom";
import style from "./ResetPasswordTheater.module.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";


const ResetPasswordTheater = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const detail = useSelector((state) => state.TheaterDetail);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "")
  useEffect(() => {
    dispatch(theaterDetail(id));
  }, [dispatch]);

  

  function onSubmit(data) {
    const input={
      password: data.password,
    }
    console.log(input);
    dispatch(editProfileT(id, input));
    swal("Contraseña actualizada!", '', 'success');
    history.push("/loginteatres")
    
  }

  return (
    <div className={style.ResetTheaterContainer}>
      <div >
        <h1>Actualizar contraseña</h1>
      </div>

      <div className={style.ResetTheaterPut}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>

          <label>Nueva Contraseña</label>
          <input
            title="Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
            type="password"
            name="password"
            placeholder="Nueva Contraseña"
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
          <br/>
          <label>Repite tu contraseña</label>
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

          <button type="submit" className="btn btn-dark">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPasswordTheater;
