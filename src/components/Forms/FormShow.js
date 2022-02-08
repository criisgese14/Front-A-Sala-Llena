import React, {useEffect, useState} from "react";
import {Link, useHistory } from "react-router-dom";
import {useDispatch , } from "react-redux"
import {postShow, postTicket} from "../../redux/actions/index.js"
import { useParams } from "react-router-dom";
const FormShow = ()=>{
    const dispatch = useDispatch();
    const history = useHistory()
    let {id} = useParams();
    console.log(id)
    const [input, setInput] = useState({
        theaterId: id,
        name: "",
        summary: "",
        genre: "",
        length: "",
        image: "",
        ticketsQty: "",
        rated: "", 
        date: "", 
        time: "",
    })
    // const [times, setTime]= useState("")
    const [ticket, setTicket] = useState({
        price: "",
        seatNumber: "",
        nameShow: "",
    })

    console.log(ticket)
    useEffect(()=>{

    }, [dispatch])
    
    function handleInputChangeShow (event){
        console.log(event)
        event.preventDefault();
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
    }
    function handleInputChangeTicket (event){
        console.log(event)
        event.preventDefault();
        setTicket({
            ...ticket,
            [event.target.name]: event.target.value,
        })
    }
    function handleInputChangeTicketName (event){
        event.preventDefault()
        setTicket({
            ...ticket,
            nameShow: event.target.value
        })
    }
    // function handleInputChangeTime (event){
    //     event.preventDefault();
    //     setInput({
    //         ...input,
    //         time: [...input.time, times],
    //     })
    //     setTime("")
    // }
    // function handleInputChangeImage (event){
    //     event.preventDefault();
    //     setInput({
    //         ...input,
    //         [event.target.name]: [...input.image, event.target.value],
    //     })
    // }
    
    // function handleInputChangeTime1(event){
    //     setTime(
    //         event.target.value
    //     )
    // }
    function handleSubmit(e) {
        e.preventDefault();
        for( var i = 0 ; i< input.ticketsQty; i++ ){
            dispatch(postTicket(ticket))
        }
        dispatch(postShow(input));
        alert("Espectaculo agregado!");
        setInput({
            name: "",
            summary: "",
            genre: "",
            length: "",
            image: "",
            ticketsQty: "",
            rated: "", 
            date: "", 
            time: "",});
        history.push(`/theaterHome/${id}`);
        }

    console.log(input)
    return (
        <div>
            <Link to="/"><button>Volver</button></Link>
            <h1>Soy el formulario de creacion de espectaculo</h1>
            {/* <form onSubmit={handleInputChangeTime}>
            <label>Pases de la Obra:</label>
            <input  type="time" 
                    name="time" 
                    onChange={(e)=>{handleInputChangeTime1(e)}}
                    />
                    <button onSubmit={handleInputChangeTime}>add</button>
                    {input.time?.map((e)=><p key={e}>{e}</p>)}
            </form> */}
        <form onSubmit={handleSubmit}>
            <label>Nombre de la obra:</label>
            <input  type="text" 
                    name="name" placeholder="Nombre de la obra"
                    value={input.name} 
                    onChange={(e)=>{handleInputChangeShow(e); handleInputChangeTicketName(e)}}/>

            <label>Descripcion de la Obra:</label>
            <textarea  type="text" 
                        name="summary" 
                        width="100" height="30" maxLength="1000"
                        placeholder="Descripcion de la Obra. Max 1000 caracteres."
                        value={input.summary} 
                        onChange={(e)=>{handleInputChangeShow(e)}}/>
            <label>Pase de la Obra:</label>
            <input  type="time" 
                    name="time" 
                    onChange={(e)=>{handleInputChangeShow(e)}}
                    />
            <label>Seleciona el Genero: </label>
            <select value={input.genre} name="genre" 
                    onChange={(e)=>{handleInputChangeShow(e)}}>
                    <optgroup label="*OBRAS MAYORES*">
                        <option>Comedia</option>
                        <option>Drama</option>
                        <option>Tragedia</option>
                        <option>Tragicomedia</option>
                        <option>Monólogo</option>
                    </optgroup>
                    <optgroup label="*OBRAS MENORES*">
                        <option>Auto Sacramental</option>
                        <option>Entremes</option>
                        <option>Sainete</option>
                        <option>Farsa</option>
                        <option>Vodevil</option>
                    </optgroup>
                    <optgroup label="*OBRAS MUSICALES*">
                        <option>Ópera</option>
                        <option>Zarzuela</option>
                        <option>Opereta</option>
                        <option>Musical</option>
                        <option>Ballet</option>
                        <option>Danza</option>
                    </optgroup>
            </select>

            <label>Seleciona el Tipo de Publico: </label>
            <select value={input.rated} name="rated"
                    onChange={(e)=>{handleInputChangeShow(e)}}>

                        <option>Todas las edades</option>
                        <option>Apta para mayores de 13 años</option>
                        <option>Apta para mayores de 16 años</option>
                        <option>Apta para mayores de 18 años</option>
                        <option>Exhibición condicionada</option>
            </select>

            <label>Duracion de la Obra:</label>
            <input  type="number" 
                    name="length" 
                    value={input.length} 
                    title="Formato en minutos"
                    placeholder="Minutos de la Obra"
                    onChange={(e)=>{handleInputChangeShow(e)}}/>

            <label>Imagenes de la obra:</label>
            <input  type="url" 
                    name="image" 
                    value={input.image} 
                    onChange={(e)=>{handleInputChangeShow(e)}}/>

            <label>Fecha de la obra:</label>
            <input  type="date" 
                    name="date" 
                    value={input.date} 
                    onChange={(e)=>{handleInputChangeShow(e)}}/>

            <label>Entradas disponibles:</label>
            <input  type="number" 
                    name="ticketsQty" 
                    value={input.ticketsQty} 
                    title="Introduzca las entradas disponibles"
                    placeholder="Entradas Disponibles"
                    onChange={(e)=>{handleInputChangeShow(e)}}/>

            <label>Zona:</label>
            <input  type="text" value={ticket.seatNumber}
                    name="seatNumber" 
                    onChange={(e)=>{handleInputChangeTicket(e)}}/>

            <label>Precio de entradas:</label>        
            <input  type="number" value={ticket.price}
                    name="price" 
                    onChange={(e)=>{handleInputChangeTicket(e)}}/>
            


                    {   input.name===""||
                        input.summary===""||
                        input.genre===""||
                        input.length===""||
                        input.ticketsQty===""||
                        input.rated===""||
                        input.date===""||
                        /* input.image ===""|| */
                        input.time===""
                        ?
                        <button disabled type="submit">Agregar Obra</button>
                        :
                        <button type="submit">Agregar Obra</button> }
            </form> 
            
        </div>
    )
}
export default FormShow;