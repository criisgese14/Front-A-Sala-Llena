import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getTicketPay, showDetail } from "../../redux/actions";
import NavBarPerfilViewer from "../NavBar/NavBarPerfilViewer";
import codigo from "../../assets/codigoQr.jpg";
import style from "./RedirectCheckout.module.css";

export default function RedirectCheckout() {
    const {id, idV, seatNumber} = useParams();
    const showId = id;
    const idViewer = idV;
    const queryParams = window.location.search;
    const statusQuery = new URLSearchParams(queryParams)
    const status = statusQuery.get('status')
    // console.log(status)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showDetail(id));
        dispatch(getTicketPay({ seatNumber, showId, idViewer, status }));
    }, [dispatch, id, showId, idViewer, seatNumber, status])
    const viewers = useSelector((state) => state.viewers);
    const findViewer = viewers?.find((v) => v.id === idV);
    const showdetail = useSelector((state) => state.showdetail);
    const tickets = showdetail?.tickets
    const price = tickets?.map((t) => t.price)
    var equalShowId = tickets?.filter((t) => t?.showId === Number(id))
    console.log(equalShowId) // me trae solo los tickets de los asientos disponibles
    // console.log(seatNumber)//quedo como un string con los asientos separados por ,
    var seats = seatNumber.split(',');
    if(price?.length > 0){
      for(var i = 0; i < 1; i++) {
        var total = price[i] * seats?.length
      }
    }
  function printing() {
    setTimeout(() => 10000);
    window.print();
  }

  return (
    <div>
      <div>
        <NavBarPerfilViewer />
        <h2 className={style.title}>
          Muchas gracias {findViewer?.name} por comprar en A Sala Llena
        </h2>
        <div className={style.card}>
          <h2>Espectáculo: " {showdetail?.name} "</h2>
          <h3>Teatro: {showdetail?.theater?.name}</h3>
          <h3>Cantidad de entradas: {seats?.length}</h3>
          <h3>Número de asientos: {seatNumber}</h3>
          <h3>Fecha: {showdetail?.date}</h3>
          <h2>Total: $ {total}</h2>
          <div>
            <img className={style.codigoQr} src={codigo} alt="cogido" />
          </div>
        </div>
        <div className={style.btnContainer}>
          <Link to={`/viewerHome/${idV}`}>
            <button type="button" className="btn btn-dark">
              Volver
            </button>
          </Link>
        </div>

        <form>
          <div className={style.btnContainer}>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => printing()}
            >
              Imprimir o Descargar
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}
