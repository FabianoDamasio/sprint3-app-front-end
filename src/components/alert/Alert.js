import React, { useContext } from "react";
import GlobalModal from '../../context'
import './styles.css'

function Alert(message, reload) {
    const {setClose} = useContext(GlobalModal)

    return (
        <React.Fragment>
            <div className="bgPosition">
                <div className="bgAlert" onClick={() => {
                setClose(false)
                if(reload) {
                    window.location.reload()
                }}}></div>
                <div className="modalAlert">
                    <span className="textAlert">{message}</span>
                    <button className="buttonAlert" onClick={() => {
                    setClose(false)
                    if(reload) {
                        window.location.reload()
                    }}}>Voltar</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Alert