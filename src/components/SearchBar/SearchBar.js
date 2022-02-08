import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getShowByName } from "../../redux/actions";

export default function SearchBar() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!name) {
            alert('Debe ingresar un nombre de espectáculo')
        } else {
            dispatch(getShowByName(name))
         //aca iria el dispatch de todos los nombres de las obras de teatro
            setName('');
        }
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Nombre del show"
                onChange={(e) => handleInputChange(e)}
                onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                value={name}
            />
            <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
            > ► Buscar 
            </button>
        </div>

    )
}