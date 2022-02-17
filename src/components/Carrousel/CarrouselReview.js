import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { getAllReview } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import style from "./CarruselReview.module.css";
const CarrouselReview = () => {
  const dispatch = useDispatch();
  const review = useSelector((state) => state.allreviews);
  useEffect(() => {
    dispatch(getAllReview());
  }, [dispatch]);
  const ultimos = review?.slice(review.length - 5);
  console.log(ultimos);
  return (
    <Carousel variant="dark" style={{ height: "12rem" }}>
      {ultimos?.map((e, i) => (
        <Carousel.Item key={e.id}>
          <div className="ContainerReview" key={e.id}>
            <div>
              <p className={style.review}>"{e.review}"</p>
              <div className={style.scoreContainer}>
                <h5>{e.show.name}</h5>
                <p>{e.showScore} puntos</p>
              </div>
              <div className={style.scoreContainer}>
                <h5>{e.theater.name}</h5>
                <p>{e.theaterScore} puntos</p>
              </div>
            </div>
            <div>
              <h5>{e.viewer.name}</h5>
            </div>
          </div>
          {/* <Link to={`/showDetail/${e.show.id}`} style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Ver detalles</button>
                  </Link> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default CarrouselReview;
