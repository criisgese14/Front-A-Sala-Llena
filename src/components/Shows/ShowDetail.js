import React, { useEffect, useState } from "react";
import { showDetail, checkoutPay } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./ShowDetail.module.css";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import Button from "react-bootstrap/Button";
import Timer from "../Timer/timer.js";
import Footer from "../Footer/Footer.js";
import Countdown from "react-countdown";

const ShowDetail = () => {
  const show = useSelector((state) => state.showdetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [precio, setPrecio] = useState(null);
  const [tiempo, setTiempo] = useState({
    dia: 0,
    hora: 0,
  });
  const [preciofinal, setPreciofinal] = useState("");
  const [porcentaje, setPorcentaje] = useState(null);

  useEffect(() => {
    dispatch(showDetail(id));
  }, [dispatch]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      <div>
        <p>La obra ya ha comenzado!</p>
      </div>;
    } else {
      return (
        <div>
          <p>{days}</p>
          <p>
            <small>Dias</small>
          </p>

          <span>:</span>

          <p>{hours}</p>
          <p>
            <small>Horas</small>
          </p>

          <span>:</span>

          <p>{minutes}</p>
          <p>
            <small>Minutos</small>
          </p>

          <span>:</span>

          <p>{seconds}</p>
          <p>
            <small>Segundos</small>
          </p>
        </div>
      );
    }
  };
  const onStart = ({ days, hours }) => {
    setTiempo({
      dia: days,
      hora: hours,
    });
    numerodeporcentaje();
  };

  function numerodeporcentaje() {
    if (tiempo.dia === 0 && tiempo.hora < 6) {
      setPorcentaje(10);
      porcentajefuncion(porcentaje);
    } else if (tiempo.dia === 0 && tiempo.hora < 12) {
      setPorcentaje(15);
      porcentajefuncion(porcentaje);
    } else if (tiempo.dia === 0 && tiempo.hora > 12) {
      setPorcentaje(20);
      porcentajefuncion(porcentaje);
    } else if (tiempo.dia === 1 && tiempo.hora > 12) {
      setPorcentaje(25);
      porcentajefuncion(porcentaje);
    } else {
      setPorcentaje(30);
      porcentajefuncion(porcentaje);
    }
  }

  function porcentajefuncion(porcentajes) {
    var descuento = (show.originPrice * porcentajes) / 100;
    var preciofinal = show.originPrice - descuento;
    setPreciofinal(preciofinal);
  }

  let dateTimer = `${show.date} ${show.time}`;
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
              <p className={style.label}>Tipo de publico: </p>
              <p className={style.data}>{show.rated} </p>
              <p className={style.label}>Duracion: </p>
              <p className={style.data}>{show.length} </p>
              <p className={style.label}>Genero: </p>
              <p className={style.data}>{show.genre} </p>
              {/* <Timer newDate={dateTimer} newTime={timeTimer} price={precio}/> */}
              <Countdown date={dateTimer} renderer={renderer} onTick={onStart}>
                <div>
                  <p>La obra ya ha comenzado!</p>
                </div>
              </Countdown>
            </div>
            <div>
              <h3>Entradas disponibles: </h3>
              <p className={style.label}>Entradas disponibles: </p>
              <p className={style.data}>{show.ticketsQty} </p>
              <p className={style.label}>Fecha: </p>
              <p className={style.data}>{show.date} </p>
              <p className={style.label}>Hora: </p>
              <p className={style.data}>{show.time} </p>
              <p className={style.label}>Precio Original: </p>
              <p className={style.data}>{precio}$ </p>
              <p className={style.label}>Precio Reducido:</p>
              <p className={style.label}>Porcentaje de descuento actual:</p>
              <p className={style.data}>{porcentaje}%</p>
            </div>
            <div className={style.btnContainer}>
              <Link
                to={`/showDetail/checkout/${id}`}
                style={{ textDecoration: "none" }}
              >
                <Button className={style.btn} variant="primary">
                  Comprar
                </Button>
              </Link>
            </div>
          </div>
          <div className={style.inf}>
            <p className={style.label}>Descripcion : </p>
            <p className={style.data}>{show.summary}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ShowDetail;
