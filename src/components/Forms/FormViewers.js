import React, {useEffect, useState, Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {postViewer} from "../../redux/actions/index.js"
import Select from "react-select"
import { useForm } from 'react-hook-form'

const FormViewers = ()=> {
    let dispatch = useDispatch();
    let history = useHistory();
    const {register, errors, handleSubmit} = useForm();
    useEffect(()=>{
        
    }, [dispatch])
    const [input, setInput]= useState({
        name: "",
        email: "",
        password: "",
        image: "",
        province: "",
    })

    const onSubmit = data => console.log(data)
    // const [confirmacion, setConfirmacion] = useState({
    //     password:"",
    //     email: "",
    // })
    const optionsProvince=[
        {name: "province",value:"Buenos Aires" ,label:"Buenos Aires"},
        {name: "province",value:"Cordoba" ,label:"Cordoba"},
        {name: "province",value:"Santa Fe" ,label:"Santa Fe"},
        {name: "province",value:"Catamarca" ,label:"Catamarca"},
        {name: "province",value:"Buenos Aires" ,label:"Buenos Aires"},
        {name: "province",value:"Catamarca" ,label:"Catamarca"},
        {name: "province",value:"Chaco" ,label:"Chaco"},
        {name: "province",value:"Chubut" ,label:"Chubut"},
        {name: "province",value:"Entre Rios" ,label:"Entre Rios"},
        {name: "province",value:"Corrientes" ,label:"Corrientes"},
        {name: "province",value:"Formosa" ,label:"Formosa"},
        {name: "province",value:"Jujuy" ,label:"Jujuy"},
        {name: "province",value:"La Pampa" ,label:"La Pampa"},
        {name: "province",value:"La Rioja" ,label:"La Rioja"},
        {name: "province",value:"Mendoza" ,label:"Mendoza"},
        {name: "province",value:"Misiones" ,label:"Misiones"},
        {name: "province",value:"Neuquen" ,label:"Neuquen"},
        {name: "province",value:"Rio Negro" ,label:"Rio Negro"},
        {name: "province",value:"Salta" ,label:"Salta"},
        {name: "province",value:"San Juan" ,label:"San Juan"},
        {name: "province",value:"San Luis" ,label:"San Luis"},
        {name: "province",value:"Santa Cruz" ,label:"Santa Cruz"},
        {name: "province",value:"Santiago del Estero" ,label:"Santiago del Estero"},
        {name: "province",value:"Tierra del Fuego" ,label:"Tierra del Fuego"},
        {name: "province",value:"Tucuman" ,label:"Tucuman"},
        {name: "province",value:"CABA" ,label:"CABA"},
    ]
    // const handleInputChangeViewere = (e) => {
    //     e.preventDefault();
    //     setInput({
    //         ...input,
    //         [e.target.name]: e.target.value
    //         });
    // };

    // const handleInputChangeConfirmacion = (e) => {
    //     e.preventDefault();
    //     setConfirmacion({
    //         ...confirmacion,
    //         [e.target.name]: e.target.value
    //         });
    // };

    // function handleInputChange(e) {
    //     setInput({
    //         ...input,
    //         [e.name]: e.value,
    //     });
    // }


    
    // function handleSubmit(e) {
    //     if(input.password !== confirmacion.password) {
    //         e.preventDefault();
    //         alert('Las contraseñas no son iguales')
    //     }else if(input.email !== confirmacion.email) {
    //         e.preventDefault();
    //         alert('Los correos electronicos no coinciden')
    //     }else{
    //     e.preventDefault();
    //     dispatch(postViewer(input));
    //     alert("Usuario Creado!");
    //     setInput({
    //     name: "",
    //     email: "",
    //     password: "",
    //     image: "",
    //     province: "",});
    //     history.push("/");}
        
        
    // }
    console.log(input);
    // console.log(confirmacion)
    return(
        <div>
            <Fragment>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <label>Nombre:</label>
                    <input  type="text" 
                            name="name" 
                            /* value={input.name}  */
                            placeholder="Ingresa tu Nombre" 
                            /* onChange={(e)=>{handleInputChangeViewere(e)}} */
                            ref={
                                register({
                                    required: {value:true, message: 'Ingrese un nombre'}
                                })
                            }/>
                            <span className="text-danger text-small d-block mb-2">
                            {errors.usuario && errors.usuario.message}
                            </span>

                    <label>Email:</label>
                    <input  type="email" 
                            title= "Introduzca una direccion de correo valida ejem: campos@gmail.com" 
                            name="email" /* value={input.email} */ placeholder="@gmail.com" 
                            /* onChange={(e)=>{handleInputChangeViewere(e)}} *//>

                    {/* <label>Repite el Email:</label>
                    <input  type="email" 
                            title= "Introduzca una direccion de correo valida ejem: campos@gmail.com" 
                            name="email" value={confirmacion.email} placeholder="@gmail.com" 
                            onChange={(e)=>{handleInputChangeConfirmacion(e)}}/> */}

                    <label>Contraseña:</label>
                    <input  type="password" 
                            pattern=".{6,}" name="password" 
                            title= "Min: 6 caracteres. Solo numeros y letras" 
                            /* value={input.password} */ placeholder="Contraseña" 
                            /* onChange={(e)=>{handleInputChangeViewere(e)} *//>

                    <label>Repite la Contraseña:</label>
                    <input  type="password" 
                            pattern=".{6,}" name="password" 
                            title= "Min: 6 caracteres. Solo numeros y letras" 
                            /* value={confirmacion.password} */ placeholder="Contraseña" 
                            /* onChange={(e)=>{handleInputChangeConfirmacion(e)}} *//>

                    <label>Imagen de perfil:</label>
                    <input  type="url" 
                            width="100" height="30" 
                            alt="Login" name="image"
                            /* src={input.image} */   checked="checked"
                            alt="perfil"
                            /* value={input.image} */ 
                            placeholder="Inserte una URL de imagen" 
                            /* onChange={(e)=>{handleInputChangeViewere(e)}} *//>

                    <label>Selecciona la Provincia:</label>
                    <Select options={optionsProvince} 
                            /* onChange={(e)=>{handleInputChange(e)}}   *//>
                            
                            {/* {   input.name===""|| 
                                input.province===""|| 
                                input.email===""|| 
                                input.password===""
                                ?
                                <button disabled>Enviar Registro</button>
                                :
                                <button type="submit">Enviar Registro</button>} */}
                    <button type="submit">Enviar Registro</button>
                </form>
            </Fragment>
        </div>
    )
}
export default FormViewers;