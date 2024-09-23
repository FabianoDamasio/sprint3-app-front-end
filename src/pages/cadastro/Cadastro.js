import React, { useContext, useState } from 'react'
import Header from '../../components/header/header'
import Alert from '../../components/alert/Alert'
import GlobalModal from '../../context'
import './styles.css'

import FormMember from './components/FormMember'
import FormFamily from './components/FormFamily'

export default function Cadastro() {
  const { close } = useContext(GlobalModal)
  const [ cadastrar, setCadastrar ] = useState(1)

  return (
    <React.Fragment>
      <Header backTo='home' />
      <div className='containerCadastro'>
        <div className='containerCadastroSelectfirst'>
          <span className='text'>O que cadastrar?</span>
          <select id='cadastrar' defaultValue={1} onChange={(e) => {setCadastrar(e.target.value)}} className='inputText'>
            <option value={1}>Membro</option>
            <option value={2}>Família</option>
          </select>
        </div>
        {Number(cadastrar) === 1 ?
        <FormMember />
        :
        <FormFamily />
        }
      </div>
      {close ? Alert('Cadastro realizado com sucesso!', true) : null}
    </React.Fragment>
  )
}