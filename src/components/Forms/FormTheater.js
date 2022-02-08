import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTheater } from '../../redux/actions';

const FormTheater = ()  => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    image: ``,
    CUIT: '',
    adress: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    province: '',
    phoneNumber: '',
    seatsQTY: '',
    score: 1
  });
  const provinces = ["Buenos Aires", "Cordoba", "Santa Fe", "Catamarca", "Chaco", "Chubut", "Corrientes",
  "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza","Misiones", "Neuquen", "Rio Negro",
  "Salta", "San Juan", "San Luis", "Santa Cruz", "Santiago del Estero", "Tierra del Fuego", "Tucuman",
  "CABA"]

  function handleChange(e) {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value // Sintaxis ES6 para actualizar la key correspondiente
    });
  }

  function handleSubmit (e) {
    e.preventDefault()
    if(input.password !== input.confirmPassword){
      return alert('las contraseñas no coinciden')
    }
    if(input.email !== input.confirmEmail){
      return alert('los correos deben coincidir') 
    }
    dispatch(createTheater({...input}))
    setInput({
      name: '',
      image: ``,
      CUIT: '',
      adress: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      province: '',
      phoneNumber: '',
      seatsQTY: '',
      score: 1  
    })
  }
  return (
    <form onSubmit={handleSubmit}>  
      {/* name */}
      <input name="name" type="text" value={input.name} onChange={handleChange} placeholder="Name of the theater" />
      {/* image*/}
      <input name="image" type="text" value={input.image} onChange={handleChange} placeholder="image" />
      {/*CUIT*/}
      <input name="CUIT" type="text" value={input.CUIT} onChange={handleChange} placeholder="CUIT" />
      {/* email */}
      <input name="email" type="text" value={input.email} onChange={handleChange} placeholder="email" />
      <input name="confirmEmail" type="text" value={input.confirmEmail} onChange={handleChange} placeholder="Confirm email"/>
      {/* password  */}
      <input name="password" type="text" value={input.password} onChange={handleChange} placeholder="Password" />
      <input name="confirmPassword" type="text" value={input.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
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
      <label>{input.score}</label>
      {input.name && 
        input.CUIT &&
        input.email && input.confirmEmail && 
        input.password && input.confirmPassword &&
        input.adress && 
        input.phoneNumber && 
        input.province? 
        <button >Register</button>: 
        <button disabled>Register</button>}
    </form>
  )
}

export default FormTheater;
  