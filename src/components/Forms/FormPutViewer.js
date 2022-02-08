
import React, {useEffect, useState} from "react";
import {Link, useHistory } from "react-router-dom";
import {useDispatch, useSelector  } from "react-redux"
import {putViewer, getViewerDetail, deleteViewer} from "../../redux/actions/index.js"
import { useParams } from "react-router-dom";


const FormPutViewer = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const {id}= useParams();
    const detail = useSelector((state)=> state.viewerDetail)
    const [edit, setEdit]= useState(false)
    
    useEffect(()=>{
        dispatch(getViewerDetail(id))
    }, [dispatch, id])

    const [input, setInput]= useState({
        name: "",
        password: "",
        image: "",
    })

    const changeEdit = ()=>{
        edit===false ? 
        setEdit(true) 
        : 
        setEdit(false);
        setInput({
            name: detail.name,
            password: detail.password,
            image: detail.image,
        })
    }

    const handleInputChange =(event)=>{
        event.preventDefault()
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit (event){
        console.log(input)
        event.preventDefault()
        dispatch(putViewer(id, input))
        alert("Usuario actualizado!");
        setEdit(false)
    }

    function handleSubmitDelete (event){
        event.preventDefault()
        dispatch(deleteViewer(id))
        alert("Usuario Borrado con exito")
        history.push("/")
    }
    console.log(detail)
    console.log(input)

    return(
        <div>
            <h1>Actualizar Espectador:</h1>
            <button onClick={changeEdit}>Edit</button>
            <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            {edit===false ?
                <input readOnly="readOnly" type="text" name="name" value={detail.name} />
                : 
                <input  type="text" 
                        name="name" 
                        value={input.name}
                        placeholder="Ingresa tu Nombre" 
                        onChange={(e)=>{handleInputChange(e)}}/>
            }
            <label>Contraseña:</label>
            {edit===false ?
                <input readOnly="readonly" type="password" name="password" value={detail.password} />
                : 
                <input  type="text" 
                        name="password" 
                        placeholder="Ingresa una nueva contraseña" 
                        value={input.password}
                        onChange={(e)=>{handleInputChange(e)}}/>
            }
            <label>Imagen de Perfil: </label>
            {edit===false ?
                <input readOnly="readonly" type="text" name="image" value={detail.image} />
                : 
                <input  type="url" 
                        name="image" 
                        value={input.image}
                        placeholder="Ingresa una imagen" 
                        onChange={(e)=>{handleInputChange(e)}}/>
            }
            <button type="submit">Actualizar</button>
            </form>
            <button onClick={handleSubmitDelete}> Borrar Usuario</button>
        </div>
    )
}

export default FormPutViewer;