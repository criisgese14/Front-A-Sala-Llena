import { useState } from 'react'
import style from './Seat.module.css'
const MySeats = ({seatsNumber}) => {
    const filas = new Array(Math.ceil(8)).fill(0).map((el, index)=> index+1)
    const sillas = new Array(Math.ceil(10)).fill(0).map((el, index)=> index+1)
    const [available, setAvailable] = useState(['2-3', '2-5','2-4','2-7','2-8', '3-9', '3-10', '5-18', '5-17', '5-20'])
    const [selected, setSelected] = useState([])
    // const filas = new Array(values.row).fill(0).map((el, index)=> index)
    // const sillas = new Array(Math.ceil(values.seats/values.row)).fill(0).map((el, index)=> index)
    const onClickSeat = ( r, s) => {
        let silla = `${r}-${s}`
        // console.log(`row: ${r}, seat: ${s}`)
        if(!selected.includes(silla) && available.includes(silla)&& selected.length<=seatsNumber-1){
            setSelected([...selected, silla])
            setAvailable(available.filter(el => el != silla))
        }else if(selected.includes(silla)){
            setSelected(selected.filter(el => el !== silla))
            setAvailable([...available, silla])
        }else{
            alert('no puedes escoger mas tickets')
        }
        // console.log(selected);
    }
    return (
    <div>
        <div className={style.component}>
            <ul className={style.showcase}>
                <li>
                    <div className={style.seat}></div>
                    <small>N/A</small>
                </li>

                <li>
                    <div className={`${style.seat} ${style.selected}`}></div>
                    <small>Selected</small>
                </li>

                <li>
                    <div className={`${style.seat} ${style.occupied}`}></div>
                    <small>Occupied</small>
                </li>
            </ul>
            <div className={style.container}>
                {filas.map(r =>
                    <div className={style.row}>
                        <label className={style.indice}>{r}</label>
                        {sillas.map(el=> 
                        <div className={available.includes(`${r}-${el}`)?
                            `${style.seat}`:
                            selected.includes(`${r}-${el}`)?
                            `${style.seat} ${style.selected}`:
                            `${style.seat} ${style.occupied}`
                            } 
                            onClick={()=>onClickSeat( r, el)}>
                            {el}
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default MySeats