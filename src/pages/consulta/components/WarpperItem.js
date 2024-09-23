import React, { useState } from "react";
import './styles.css'
import { cpfMask, cepMask } from '../../../utils/mask'

function WarpperItem(props) {
  const [ open, setOpen ] = useState(false)
  const { value } = props

  return (
    <div className={open ? 'containerCard' + ' ' + 'open' : 'containerCard'} onClick={() => setOpen(!open)}>
      <div className='containerCardRow01'>
        <span className='CardRowData01'>Nome: {value.nome} {value.sobrenome}</span>
        <span className='CardRowData02'>CPF: {cpfMask(String(value.cpf))}</span>
        <div className='CardRowarow'>
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div className='containerCardRow02'>
        <span className='CardRowData01'>Idade: {value.idade}</span>
        <span className='CardRowData01'>Estado Civil: {value.estadoCivil}</span>
        <span className='CardRowData02'>CEP: {cepMask(String(value.cep))}</span>
      </div>
    </div>
  )
}

export default WarpperItem