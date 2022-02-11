import React from "react";
import { Link } from "react-router-dom";
import style from "./ShowCard.module.css";
// import Timer from "../Timer/timer.js"
const ShowCard = ({
  id,
  name,
  genre,
  length,
  image,
  summery,
  ticketsQty,
  rated,
  date,
  time,
  score,
}) => {
  return (
    <Link to={`/showDetail/${id}`} style={{ textDecoration: "none" }}>
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
          <p>📅{date}</p>
          <p>{time}</p>
          {/* <p>{score}</p> 
          <p>{summery}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default ShowCard;
