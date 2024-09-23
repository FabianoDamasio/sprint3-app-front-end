import React from "react";
import './styles.css'
import logo from '../../assets/logo.png'

function Footer() {

    return (
        <div className='bgFooter'>
            <div className='limiterFooter'>
                <img src={logo} alt="logo" />
                <span className='textFooter'>© Igreja Luterana de Barreiros | Todos os direitos reservados</span>
            </div>
        </div>
    )
}

export default Footer