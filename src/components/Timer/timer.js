import React, {useState, useRef, useEffect} from "react";

const Timer = ({newDate, newTime})=>{
    const [timerDias, setTimerDias] = useState('00')
    const [timerHoras, setTimerHoras] = useState('00')
    const [timerMinutos, setTimerMinutos] = useState('00')
    const [timerSegundos, setTimerSegundos] = useState('00')

    //devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue).
    //El objeto devuelto se mantendrá persistente durante la vida completa del componente.
    let interval = useRef()
    let downDate = newDate+' '+newTime

    const startTimer= ()=>{
        //Le vamos a guardar aqui la fecha para la cuenta atras
        const countdownDate = new Date(downDate).getTime()
        
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const distance = countdownDate - now;

            const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distance % (1000 * 60 * 60 * 24) /(1000 * 60 * 60)));
            const minutos = Math.floor((distance % (1000 * 60 * 60 )) /(1000 * 60));
            const segundos = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(interval.current)
            }else{
                setTimerDias(dias)
                setTimerHoras(horas)
                setTimerMinutos(minutos)
                setTimerSegundos(segundos)
            }
        }, 1000)
    }
    useEffect(() => {
        startTimer();
        return()=>{
            clearInterval(interval.current)
        }
    })
    
    // console.log(newDate)
    // console.log(newTime)
    return (
        <section>
            <section>
                <div>
                    <section>
                    <p>{timerDias}</p>
                    <p><small>Dias</small></p>
                    </section>
                    <span>:</span>
                    <section>
                    <p>{timerHoras}</p>
                    <p><small>Horas</small></p>
                    </section>
                    <span>:</span>
                    <section>
                    <p>{timerMinutos}</p>
                    <p><small>Minutos</small></p>
                    </section>
                    <span>:</span>
                    <section>
                    <p>{timerSegundos}</p>
                    <p><small>Segundos</small></p>
                    </section>
                </div>
            </section>
        </section>
    )
}
export default Timer;