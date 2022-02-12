import React, {useState}from 'react'
import Seat from '../Seats/Seats'

const PasarelaDePago = ({props}) => {
    const [seatNumber, setSeatNumber] = useState(0)

const onChange = ({target: {name, value}}) => {
    setSeatNumber(value)
}
  return (
    <div>
        <h3>Pasarela se Pago</h3>    
        <label>Selecciona # de entradas</label>    
        <input name='seatnumber' type={'number'} value={seatNumber} onChange={(e) =>onChange(e)}></input>
        <Seat seatsNumber={seatNumber}/>
        <button type='submit'>Pagar</button>
    </div>
  )
}

export default PasarelaDePago