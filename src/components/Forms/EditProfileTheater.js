import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfileT } from "../../redux/actions";
import {useParams} from 'react-router-dom';

const EditProfileTheater = ({props}) => {
  const dispatch = useDispatch()
  
  const { theaters } = useSelector(state => state)
  let teatro = theaters.filter(el => el.id == props)
  const { name,image,CUIT,adress,email,password,province,phoneNumber,seatsQTY,score} = teatro[0]
  const [input, setInput] = useState({
    name: name?`${name}`:'', 
    image: `${image}`,
    CUIT: `${CUIT}`,
    email: `${email}`,
    password: `${password}`,
    adress: `${adress}`, 
    province: `${province}`, 
    phoneNumber: `${phoneNumber}`,
    seatsQTY: `${seatsQTY}`, 
    score:`${score}`,
  });
  const provinces = ["Buenos Aires", "Cordoba", "Santa Fe", "Catamarca", "Chaco", "Chubut", "Corrientes",
  "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza","Misiones", "Neuquen", "Rio Negro",
  "Salta", "San Juan", "San Luis", "Santa Cruz", "Santiago del Estero", "Tierra del Fuego", "Tucuman",
  "CABA"]
  // console.log('theaters', theaters)


  const handleChange = ({target: {name, value }}) => {
    setInput({
      ...input,
      [name]: value,
    });
  };    

  function handleSubmit (e) {
    e.preventDefault()
    dispatch(editProfileT({...input, id: props}))
  }

    return (
    <div>
        <form onSubmit={handleSubmit}>  
      {/* name */}
      <input name="name" type="text" value={input.name} onChange={handleChange} placeholder="Name of the theater" />
      {/* image*/}
      <input name="image" type="text" value={input.image} onChange={handleChange} placeholder="image" />
      {/*CUIT*/}
      <input name="CUIT" type="text" value={input.CUIT} onChange={handleChange} placeholder="CUIT" />
      {/* email */}
      <input name="email" type="text" value={input.email} onChange={handleChange} placeholder="email" />
      {/* password  */}
      <input name="password" type="text" value={input.password} onChange={handleChange} placeholder="Password" />
      {/* adress */}
      <input name="adress" type="text" value={input.adress} onChange={handleChange} placeholder="Adress" />
      {/* province */}
      <select onChange={handleChange} name='province' value={input.province}>
        <option value=''>Province</option>
        {provinces.map(el => <option value={el}>{el}</option>)} 
      </select>
      {/* phoneNumber */}
      <input name="phoneNumber" type="text" value={input.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
      {/* seatsQTY */}
      <input name="seatsQTY" type="number" value={input.seatsQTY} min='1'max='1000'onChange={handleChange} placeholder="Seates" />
      <input name="score" type="range" value={input.score} min='1' max='5' onChange={handleChange} placeholder="Score" />
      <lavel>{input.score}</lavel>
      {/* {input.name && input.image &&
        input.adress && input.phoneNumber && input.province? 
        <button >Save</button>: 
        <button disabled>Save</button>} */}
        <button>save</button>
    </form>
    </div>
    );
  }

export default EditProfileTheater
