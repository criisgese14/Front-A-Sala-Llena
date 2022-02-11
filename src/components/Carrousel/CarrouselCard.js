import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from "react-router-dom";
import "./carrouselCard.css"

const CarrouselCard =({
    id,
    name,
    image,
    summary,
    })=>{
    return (
        
        <div className="carouselInner" style={{ backgroundImage: `url(${image})`}} >
        <div >
        <h1 >{name}</h1>
        <p>{summary}</p> 
        </div>
        <Link to={`/showDetail/${id}`} style={{ textDecoration: "none" }}>
            <button className="btn btn-primary">Ver detalles</button>
        </Link>
        </div>
    
    )


}
export default CarrouselCard