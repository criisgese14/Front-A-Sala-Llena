import React from "react";
import ShowCard from "../ShowCard/ShowCard";
import style from "./Shows.module.css";

const Shows = ({ actualShow, idV }) => {
  return (
    <div className={style.cardContainer}>
      {actualShow?.map((e) => (
        <ShowCard
          key={e.id}
          id={e.id}
          name={e.name}
          genre={e.genre}
          image={e.image}
          summery={e.summery}
          rated={e.rated}
          date={e.date}
          score={e.score}
          time={e.time}
          idV={idV}
        />
      ))}
    </div>
  );
};

export default Shows;
