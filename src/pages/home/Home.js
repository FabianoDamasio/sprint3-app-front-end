import React from 'react'
import Header from '../../components/header/header'
import './styles.css'

export default function Home() {

    const ChangePage = (url) => {
        window.location.href = `/${url}`
    }


    return (
        <React.Fragment>
            <Header backTo='login' />
            <div className='containerHome'>
                <div className='containerdiv'>
                    <button className='button' onClick={() => {ChangePage('cadastro')}}>Novos Cadastros</button>
                    <button className='button' onClick={() => {ChangePage('consulta')}}>Consultar</button>
                    <button className='button' onClick={() => {ChangePage('')}}>Sair</button>
                </div>
            </div>
        </React.Fragment>
    )
}