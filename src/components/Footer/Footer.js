import React from "react";
import img from '../../logo a sala llena-sinfondo.png';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div> 
            <img  className={s.img} src={img} alt='img'/>
            <a href="/privacyPolicy">Politicas de Privacidad</a>
            <a href="/termsConditions">Terminos y Condiciones</a>
            <h5>Contacto</h5>
            <p>Buenos Aires, Argentina</p>
        </div>
    )
}

export default Footer;