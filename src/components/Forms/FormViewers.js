import React, {/* useEffect, */ useState, Fragment} from "react";
import { useDispatch, /* useSelector */ } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
import {postViewer} from "../../redux/actions/index.js"
// import Select from "react-select"
import { useForm } from 'react-hook-form'

const FormViewers = ()=> {
    let dispatch = useDispatch();
    // let history = useHistory();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [input, setInput]= useState({
        
    })
    

    const onSubmit = (data) => {
        setInput(data)
        postViewer(input)
    }
    
    // const optionsProvince=[
    //     {name: "province",value:"Buenos Aires" ,label:"Buenos Aires"},
    //     {name: "province",value:"Cordoba" ,label:"Cordoba"},
    //     {name: "province",value:"Santa Fe" ,label:"Santa Fe"},
    //     {name: "province",value:"Catamarca" ,label:"Catamarca"},
    //     {name: "province",value:"Buenos Aires" ,label:"Buenos Aires"},
    //     {name: "province",value:"Catamarca" ,label:"Catamarca"},
    //     {name: "province",value:"Chaco" ,label:"Chaco"},
    //     {name: "province",value:"Chubut" ,label:"Chubut"},
    //     {name: "province",value:"Entre Rios" ,label:"Entre Rios"},
    //     {name: "province",value:"Corrientes" ,label:"Corrientes"},
    //     {name: "province",value:"Formosa" ,label:"Formosa"},
    //     {name: "province",value:"Jujuy" ,label:"Jujuy"},
    //     {name: "province",value:"La Pampa" ,label:"La Pampa"},
    //     {name: "province",value:"La Rioja" ,label:"La Rioja"},
    //     {name: "province",value:"Mendoza" ,label:"Mendoza"},
    //     {name: "province",value:"Misiones" ,label:"Misiones"},
    //     {name: "province",value:"Neuquen" ,label:"Neuquen"},
    //     {name: "province",value:"Rio Negro" ,label:"Rio Negro"},
    //     {name: "province",value:"Salta" ,label:"Salta"},
    //     {name: "province",value:"San Juan" ,label:"San Juan"},
    //     {name: "province",value:"San Luis" ,label:"San Luis"},
    //     {name: "province",value:"Santa Cruz" ,label:"Santa Cruz"},
    //     {name: "province",value:"Santiago del Estero" ,label:"Santiago del Estero"},
    //     {name: "province",value:"Tierra del Fuego" ,label:"Tierra del Fuego"},
    //     {name: "province",value:"Tucuman" ,label:"Tucuman"},
    //     {name: "province",value:"CABA" ,label:"CABA"},
    // ]
    console.log(input);
    // console.log(confirmacion)
    return(
            <Fragment>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <label>Nombre:</label>
                    <input  type="text" 
                            name="name" 
                            placeholder="Ingrese su Nombre"
                            className="form-control my-2"
                            {...register("name" ,{
                                required:{ 
                                value: true,
                                message: "El campo es requerido",
                                }
                            })}
                            />
                            {<span className="text-danger text-small d-block mb-2">{errors.name && errors.name.message}</span>}

                            <label>Email:</label>
                            <input  type="text" 
                            name="email" 
                            placeholder="Ingrese su Correo Electronico"
                            className="form-control my-2"
                            {...register("email" ,{
                                required:{ 
                                value: true,
                                message: "El campo es requerido",
                                },
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Este formato de correo no es el adecuado"
                                }
                            })}
                            />
                            {<span className="text-danger text-small d-block mb-2">{errors.email && errors.email.message}</span>}

                            <label>Contraseña:</label>
                            <input  type="password" 
                            name="password" 
                            placeholder="Ingrese su Contraseña"
                            className="form-control my-2"
                            {...register("password" ,{
                                required:{ 
                                value: true,
                                message: "El campo es requerido",
                                },
                                minLength: {
                                    value: 5,
                                    message: "Minimo 5 caracteres"
                                }
                            })}
                            />
                            {<span className="text-danger text-small d-block mb-2">{errors.password && errors.password.message}</span>}

                    <label>Imagen de perfil:</label>
                    <input  type="url" 
                            width="100" height="30"  name="image"
                            alt="perfil"
                            placeholder="Inserte una URL de imagen" 
                            className="form-control my-2"
                            {...register("image" ,{})}
                    />
                    <label>Selecciona la Provincia:</label>
                    {/* <Select options={optionsProvince} 
                            onChange={(e)=>{handleInputChange(e)}}/>   */}
                    <select className="form-control" name="province" {...register("province" ,{})} >
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
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </Fragment>
    )
}
export default FormViewers;