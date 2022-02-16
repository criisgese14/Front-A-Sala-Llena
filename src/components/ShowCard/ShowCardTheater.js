import React from 'react';
import { Link } from "react-router-dom";
import style from "./ShowCard.module.css";
//import Countdown from "react-countdown";
// import Timer from "../Timer/timer.js"
const ShowCardTheater = ({
  id,
  name,
  genre,
  image,
  date,
  rated
}) => {
  
  
    return (
        <Link to={`/showDetailTheater/${id}`} style={{ textDecoration: "none" }}>
          <div className={style.cardContainer}>
            <div className={style.left}>
              <img src={image} alt="img" className={style.image} />
            </div>
            <div className={style.right}>
              <p className={style.title}>{name}</p>
              <div>
                <p>{genre}</p>
                <p>{rated}</p>
              </div>
              <p>📅 {date}</p>
              {/*<p>Tiempo para el comienzo del espectaculo: </p>
              <Countdown date={timer}>
                <div>
                  <p>La obra ya ha comenzado!</p>
                </div>
              </Countdown>*/}
            </div>
          </div>
        </Link>
      );
};

export default ShowCardTheater;