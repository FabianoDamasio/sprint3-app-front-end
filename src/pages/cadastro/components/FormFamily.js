import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import GlobalModal from '../../../context'
import './styles.css'


function FormFamily() {
  const { register, handleSubmit } = useForm()
  const { setClose } = useContext(GlobalModal)

  function addFamily(data) {
    const formData = new FormData();
    formData.append('last_name', data.sobrenome);
  
    let url = 'http://127.0.0.1:5000/add_familia';
    var requestOptions = {
      method: 'POST',
      body: formData,
    }
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setClose(true)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const submit = (data) => {
    addFamily(data)
  }

  return (
    <form className='containerForm' onSubmit={handleSubmit(submit)}>
      <input className='inputText' type='text' id='sobrenome' {...register("sobrenome")} placeholder="Sobrenome" required></input>
      <button className='button' type='submit'>Cadastrar</button>
    </form>
  )
}

export default FormFamily