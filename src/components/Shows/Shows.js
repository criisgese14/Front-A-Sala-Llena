import React, { useEffect } from "react";
import ShowCard from "../ShowCard/ShowCard";
import { useDispatch, useSelector } from "react-redux";
import { allShows } from "../../redux/actions/index.js";

const Shows = ({ actualShow }) => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows);

//   useEffect(() => {
//     dispatch(allShows());
//   }, []);

  return (
    <div>
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
        />
      ))}
    </div>
  );
};

export default Shows;
