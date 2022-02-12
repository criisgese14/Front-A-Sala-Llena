import React, { useEffect, useState } from "react";
import { showDetail, checkoutPay } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./ShowDetail.module.css";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import Button from "react-bootstrap/Button";
import Timer from "../Timer/timer.js"
import Footer from "../Footer/Footer.js";

const ShowDetail = () => {

    const show = useSelector((state) => state.showdetail);
    const dispatch = useDispatch();
    const { id } = useParams();

    const [precio, setPrecio]= useState(null);
    // const {keyMP} = useMPKey();
    // console.log(keyMP);

    useEffect(() => {
        dispatch(showDetail(id));
    }, [dispatch]);
    setTimeout(()=> setPrecio(show.tickets[0].price))


    let dateTimer = show.date
    let timeTimer = show.time
    return (
        <div className={style.detailContainer}>
        <div className={style.navDetail}>
            <Link to="/">
            <img className={style.logo} src={logo} alt="A sala llena" />
            </Link>
            <h1>{show.name}</h1>
        </div>

        <div className={style.cardDetail}>
            <div className={style.izq}>
            <div>
                <img src={show.image} className={style.image} />
            </div>
            </div>
            <div className={style.der}>
            <div className={style.datos}>
                <div>
                <h3>Tipo de publico: </h3>
                <h4>{show.rated} </h4>
                <h3>Duracion: </h3>
                <h4>{show.length} </h4>
                <h3>Genero: </h3>
                <h4>{show.genre} </h4>
                <Timer newDate={dateTimer} newTime={timeTimer} price={precio}/>
                </div>
                <div>
                <h3>Entradas disponibles: </h3>
                <div></div>
                <h4>{show.ticketsQty} </h4>
                <h3>Fecha: </h3>
                <h4>{show.date} </h4>
                <h3>Hora: </h3>
                <h4>{show.time} </h4>
                <h3>Precio Original: </h3>
                <h4>{precio}$ </h4>
                <h3>Precio Reducido:</h3>

                <h3>Porcentaje de descuento actual:</h3>
                
                </div>
                    
                <div className={style.btnContainer}>
                <Link to={`/showDetail/checkout/${id}`} style={{ textDecoration: "none" }}>
                    <Button className={style.btn} variant="primary">
                        Comprar
                    </Button>
                </Link>
                </div>
            </div>
            <div className={style.inf}>
                <h3>Descripcion : </h3>
                <p>{show.summary}</p>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
    };
export default ShowDetail;
