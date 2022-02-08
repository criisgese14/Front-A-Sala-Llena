import React, { useState} from "react";

const EditProfileTheater = ({props}) => {
  const [input, setInput] = useState({
    name: ``, 
    img: ``,
    adress: ``, 
    province: ``, 
    phoneNumber: ``, 
  });
  
  const handleChange = ({target: {name, value }}) => {
    setInput({
      ...input,
      [name]: value,
    });
  };    
    return (
    <div>
        <form>  
      {/* name */}
      <input name="name" type="text" value={input.name} autoComplete='off'onChange={handleChange} placeholder="Name of the theater" />
      {/* Profile photo*/}
      <input name="img" type="imagen" value={input.img} onChange={handleChange} autoComplete='off' placeholder="Profile photo" />
      {/* adress */}
      <input name="adress" type="text" value={input.adress} autoComplete='off'onChange={handleChange} placeholder="Adress" />
      {/* province */}
      <input name="province" type="text" value={input.province} autoComplete='off'onChange={handleChange} placeholder="Province" />
      {/* phoneNumber */}
      <input name="phoneNumber" type="text" value={input.phoneNumber} autoComplete='off'onChange={handleChange} placeholder="Phone Number" />
      
      {input.name && input.img &&
        input.adress && input.phoneNumber && input.province? 
        <button >Save</button>: 
        <button disabled>Save</button>}
    </form>
    </div>
    );
  }

export default EditProfileTheater
