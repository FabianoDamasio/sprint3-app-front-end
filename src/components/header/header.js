import React from "react";
import { useCookies } from 'react-cookie';
import './styles.css'

function Header(props) {
    const [cookies] = useCookies(['login'])
    const { backTo } = props



    return (
        <div className='bgHeader'>
            {cookies.login ?
                <div className='limiterHeader'>
                    <span className='titleUser'>Olá {cookies.login}</span>
                    <a className='titleUser' href={`/${backTo && backTo !== 'login' ? backTo : ''}`}>{backTo !== 'login' ? 'Voltar' : 'Sair'}</a>
                </div>
                :
                <div className='limiterHeaderLogin'>
                    <span className='titleLogin'>Cadastro de Membros</span>
                </div>
            }
        </div>
    )
}

export default Header