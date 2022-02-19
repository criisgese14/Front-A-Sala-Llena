import React, { useEffect } from "react";
import NavBarTheater from "../NavBar/NavBarTheater";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  theaterDetail,
  allTheaters,
  allShows,
} from "../../redux/actions/index.js";
import ShowCardTheater from "../ShowCard/ShowCardTheater.js";
import style from "./HomeTheater.module.css";

const HomeTheater = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows);
  const theater = useSelector((state) => state.theatersDetail);
  let { id } = useParams();

  useEffect(() => {
    dispatch(theaterDetail(id));
    dispatch(allTheaters());
    dispatch(allShows());
  }, [dispatch, id]);

  console.log("shows", shows);
  console.log("theater", theater);

  let filterShows = shows?.filter((e) => e.theaterId === theater?.id);
  console.log("filterShows", filterShows);

  return (
    <div className={style.homeContainer}>
      <NavBarTheater id={id} img={theater?.image} />

      <div className={style.showsContainer}>
        {filterShows?.length ? (
          filterShows?.map((e) => (
            <ShowCardTheater
              key={e.id}
              id={e.id}
              name={e.name}
              genre={e.genre}
              image={e.image}
              rated={e.rated}
              date={e.date}
            />
          ))
        ) : (
          <h1>NO HAY SHOWS AGREGADOS</h1>
        )}
      </div>
      {/* <div className={style.footerContainer}>
        <Footer />
      </div> */}
    </div>
  );
};

export default HomeTheater;
