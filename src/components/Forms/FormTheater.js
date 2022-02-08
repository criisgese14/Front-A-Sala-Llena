import React, { useState } from 'react';

const FormTheater = ()  => {
  const [input, setInput] = useState({
    name: '',
    img: ``,
    adress: '',
    province: '',
    phoneNumber: ''
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value // Sintaxis ES6 para actualizar la key correspondiente
    });
  }
  return (
    <form>  
      {/* name */}
      <input name="name" type="text" value={input.name} onChange={handleChange} placeholder="Name of the theater" />
      {/* email */}
      <input name="email" type="text" value={input.email} onChange={handleChange} placeholder="email" />
      <input name="confirmEmail" type="text" value={input.confirmEmail} onChange={handleChange} placeholder="Confirm email"/>
      {/* password  */}
      <input name="password" type="text" value={input.password} onChange={handleChange} placeholder="Password" />
      <input name="confirmPassword" type="text" value={input.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
      {/* adress */}
      <input name="adress" type="text" value={input.adress} onChange={handleChange} placeholder="Adress" />
      {/* province */}
      <input name="province" type="text" value={input.province} onChange={handleChange} placeholder="Province" />
      {/* phoneNumber */}
      <input name="phoneNumber" type="text" value={input.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
      
      {input.name && input.email && input.confirmEmail && input.password && input.confirmPassword &&
        input.adress && input.phoneNumber && input.province? 
        <button >Register</button>: 
        <button disabled>Register</button>}
    </form>
  )
}

export default FormTheater;
