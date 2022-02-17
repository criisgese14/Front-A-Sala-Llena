import React, { useRef } from "react";
import { createTheater } from "../../redux/actions";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import swal from "sweetalert";
import { useHistory, Link } from "react-router-dom";
import style from "./FormTheater.module.css";

const FormTheater = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  let history = useHistory();
  const onSubmit = (data) => {
    let inputs = {
      name: data.name,
      image: data.image,
      CUIT: data.CUIT,
      adress: data.adress,
      email: data.email,
      password: data.password,
      province: data.province,
      phoneNumber: data.phoneNumber,
      seatsQTY: data.seatsQTY,
    };
    createTheater(inputs);
    swal("Teatro creado con exito", '', 'success');
    history.push("/loginteatres");
  };
  return (
    <div className={style.formTheaterContainer}>
      <Link to={`/loginteatres`}>
        <button type="button" className="btn btn-secondary">
          Volver
        </button>
      </Link>

      <div className={style.formTheaterCreate}>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <h3>Registra tu Teatro</h3>
          <div className="col-md-12">
            <label className="form-label col-lg-12">Nombre</label>
            <input
              title="Ingrese el Nombre del Teatro"
              type="text"
              name="name"
              placeholder="Nombre del Teatro"
              className="form-control my-2"
              {...register("name", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.name && errors.name.message}
            </span>
          </div>

          <div className="col-md-12">
            <label>Email</label>
            <input
              title="ejemplo: usuario@nombre.com"
              type="text"
              name="email"
              placeholder="Ingrese su Correo Electronico"
              className="form-control my-2"
              {...register("email", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Este formato de correo no es el adecuado",
                },
              })}
            />
            {
              <span className="text-danger text-small d-block mb-2">
                {errors.email && errors.email.message}
              </span>
            }
          </div>

          <div className="col-md-12">
            <label className="form-label col-lg-12">CUIT</label>
            <input
              type="text"
              name="CUIT"
              placeholder="CUIT"
              className="form-control my-2"
              {...register("CUIT", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.CUIT && errors.CUIT.message}
            </span>
          </div>

          <div className="col-md-6">
            <label>Contraseña</label>
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
                //   value: /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
                //   message:
                //     "Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos.",
                // },
              })}
            />
            {
              <span className="text-danger text-small d-block mb-2">
                {errors.password && errors.password.message}
              </span>
            }
          </div>

          <div className="col-md-6">
            <label>Repite tu contraseña</label>
            <input
              title="Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
              type="password"
              name="newpassword"
              placeholder="Repita la contraseña"
              className="form-control my-2"
              {...register("newpassword", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                // pattern: {
                //   value: /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
                //   message:
                //     "Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos.",
                // },
                validate: (value) =>
                  value === password.current || "La contraseña debe coincidir",
              })}
            />
            {
              <span className="text-danger text-small d-block mb-2">
                {errors.newpassword && errors.newpassword.message}
              </span>
            }
          </div>

          <div className="col-md-5">
            <label>Provincia</label>
            <select
              className="form-control my-2"
              name="province"
              {...register("province", {})}
            >
              <option default>Seleccione una Provincia</option>
              <option>Buenos Aires</option>
              <option>Cordoba</option>
              <option>Santa Fe</option>
              <option>Catamarca</option>
              <option>Chaco</option>
              <option>Chubut</option>
              <option>Entre Rios</option>
              <option>Corrientes</option>
              <option>Formosa</option>
              <option>Jujuy</option>
              <option>La Pampa</option>
              <option>La Rioja</option>
              <option>Mendoza</option>
              <option>Misiones</option>
              <option>Neuquen</option>
              <option>Rio Negro</option>
              <option>Salta</option>
              <option>San Juan</option>
              <option>San Luis</option>
              <option>Santa Cruz</option>
              <option>Santiago del Estero</option>
              <option>Tierra del Fuego</option>
              <option>Tucuman</option>
              <option>CABA</option>
            </select>
            <span className="text-danger text-small d-block mb-2">
              {errors.genre && errors.genre.message}
            </span>
          </div>

          <div className="col-md-7">
            <label className="form-label ">Direccion </label>
            <input
              type="text"
              name="adress"
              placeholder="Direccion del Teatro"
              className="form-control "
              {...register("adress", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.adress && errors.adress.message}
            </span>
          </div>

          <div className="col-md-6">
            <label className="form-label col-lg-12">Numero de telefono</label>
            <input
              title="No se pueden numero negativos ni decimales"
              type="number"
              name="phoneNumber"
              placeholder="Numero de telefono"
              className="form-control "
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /^(0|[1-9][0-9]*)$/,
                  message: "No se pueden numero negativos ni decimales",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.phoneNumber && errors.phoneNumber.message}
            </span>
          </div>

          <div className="col-md-6">
            <label className="form-label col-lg-12">Asientos del Teatro</label>
            <input
              title="Numero de butacas que tiene tu teatro"
              type="number"
              name="seatsQTY"
              placeholder="Nº Asientos"
              className="form-control "
              {...register("seatsQTY", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /^(0|[1-9][0-9]*)$/,
                  message: "No se pueden numero negativos ni decimales",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.seatsQTY && errors.seatsQTY.message}
            </span>
          </div>

          <div className="col-md-12">
            <label>Imagen de perfil</label>
            <input
              type="url"
              width="100"
              height="30"
              name="image"
              alt="perfil"
              placeholder="Inserte una URL de imagen"
              className="form-control my-2"
              {...register("image", {})}
            />
          </div>
          <div>
            <button className="btn btn-dark" type="submit">
              Registra Teatro
            </button>
          </div>
        </form>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default FormTheater;
