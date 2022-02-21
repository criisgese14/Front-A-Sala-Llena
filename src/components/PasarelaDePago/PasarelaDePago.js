import React, { useState, useEffect } from "react";
import Seat from "../Seats/Seats";
import { useDispatch, useSelector } from "react-redux";
import { showDetail, getAllTickets } from "../../redux/actions/index.js";
import { useParams, Link } from "react-router-dom";
import style from "./PasarelaDePago.module.css";
import { Navbar, Container,} from "react-bootstrap";

const PasarelaDePago = ({ props }) => {
  const [seatNumber, setSeatNumber] = useState(0);
  const show = useSelector((state) => state.showdetail.tickets);
  const sillas = useSelector((state) => state.showdetail.seatsAvailable);
  console.log(show);
  // const jaja = show[0]
  // console.log(jaja)
  const hola = show?.map((t) => t.price);
  console.log(hola);

  const dispatch = useDispatch();
  const { id, idV } = useParams();
  //const [tickets , setTickets]= useState()
  //let variable = false;
  const [decodShowId, setDecodShowId] = useState("");
  const [decodViewerId, setDecodViewerId] = useState("");

  useEffect(async () => {
    await setDecodShowId(atob(id));
    await setDecodViewerId(atob(idV));
  }, [id, idV]);
  useEffect(() => {
    dispatch(getAllTickets());
    dispatch(showDetail(decodShowId));
  }, [dispatch, decodShowId]);
  // console.log(tickets, "Tickets")
  return (
    <div>
      <Navbar
        className={style.heigthConfig}
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <p className={style.logo}>A Sala Llena</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <h2 className={style.title}>Pasarela se Pago</h2>
      <div className={style.tickets}>
        <label>Cantidad de entradas</label>
        <div className={style.containerSeatsNumber}>
          <div className={`${style.operation} ${style.less}`} 
              onClick={seatNumber>0?()=>setSeatNumber(seatNumber - 1):null}
          />
          <label>{seatNumber}</label>
          <div className={`${style.operation} ${style.sum}`} 
                onClick={sillas && seatNumber<sillas.length?()=>setSeatNumber(seatNumber + 1):null}
          />
        </div>
      </div>
      <div className={style.seat}>
        <Seat
          seatsNumber={seatNumber}
          show={show}
          id={decodShowId}
          idV={decodViewerId}
        />
      </div>
    </div>
  );
};

export default PasarelaDePago;
