import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import GlobalModal from "../../../context";
import "./styles.css";
import { cpfMask, cepMask } from "../../../utils/mask";

function FormMember() {
  const { register, handleSubmit } = useForm();
  const { setClose } = useContext(GlobalModal);
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState();
  const [familys, setFamilys] = useState([]);

  const estado_civil = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)']

  function AllFamilys() {
    let url = "http://127.0.0.1:5000/all_familys";
    var requestOptions = {
      method: "GET",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setFamilys(response.famílias);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function TakeCEP() {
    let CEPNumber = cep.replace(/\D/g, "");
    let url = `https://viacep.com.br/ws/${CEPNumber}/json/`;
    var requestOptions = {
      method: "GET",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => setEndereco(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function addMember(data) {
    const formData = new FormData();
    formData.append("name", data.nome);
    formData.append("cpf", Number(data.CPF.replace(/\D/g, "")));
    formData.append("age", Number(data.idade));
    formData.append('civil_status', data.civil_status);
    formData.append("street", data.logradouro);
    formData.append("number", Number(data.numero));
    formData.append("complement", data.complemento);
    formData.append("district", data.bairro);
    formData.append("city", data.cidade);
    formData.append("cep", Number(data.cep.replace(/\D/g, "")));

    let url = "http://127.0.0.1:5000/new_membro";
    var requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        if(data.familia) {
          const formData2 = new FormData();
          formData2.append("sobrenome", data.familia);
          formData2.append("id_do_membro", response.id);
  
          let url = "http://127.0.0.1:5000/family_a_membro";
          var requestOptions = {
            method: "PUT",
            body: formData2,
          };
          fetch(url, requestOptions)
            .then((response2) => response2.json())
            .then(() => {
              setClose(true);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          setClose(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    AllFamilys();
  }, []);

  return (
    <form className="containerForm" onSubmit={handleSubmit(addMember)}>
      <input
        className="inputText"
        type="text"
        id="nome"
        {...register("nome")}
        placeholder="Nome"
        required
      ></input>
      <input
        className="inputText"
        type="text"
        id="CPF"
        {...register("CPF")}
        placeholder="CPF"
        required
        value={cpf}
        onChange={(e) => {
          setCpf(cpfMask(e.target.value));
        }}
        maxLength={14}
      ></input>
      <input
        className="inputText"
        type="number"
        id="idade"
        {...register("idade")}
        placeholder="Idade"
        required
      ></input>
      <select {...register("civil_status")} defaultValue={""} className="inputText">
        <option value="" disabled>
          Estado Civil
        </option>
        {estado_civil.map((value) => (
          <React.Fragment>
            <option value={value}>{value}</option>
          </React.Fragment>
        ))}
      </select>
      <select {...register("familia")} className="inputText">
        <option value="" selected disabled>
          Família
        </option>
        {familys.map((value) => (
          <React.Fragment>
            <option value={value.Sobrenome}>{value.Sobrenome}</option>
          </React.Fragment>
        ))}
      </select>
      <div className="divCep">
        <input
          className="inputText"
          type="text"
          id="cep"
          {...register("cep")}
          value={cep}
          onChange={(e) => setCep(cepMask(e.target.value))}
          placeholder="CEP"
          required
          maxLength={9}
        ></input>
        {cep ? (
          <button className="button" type="button" onClick={() => TakeCEP()}>
            Buscar
          </button>
        ) : (
          <button className="button" type="button" disabled>
            Buscar
          </button>
        )}
      </div>
      {endereco ? (
        <>
          <input
            className="inputText"
            type="text"
            id="logradouro"
            {...register("logradouro", { value: endereco.logradouro })}
            required
            disabled
          ></input>
          <input
            className="inputText"
            type="text"
            id="numero"
            {...register("numero")}
            placeholder="Número"
            required
          ></input>
          <input
            className="inputText"
            type="text"
            id="complemento"
            {...register("complemento")}
            placeholder="Complemento"
          ></input>
          <input
            className="inputText"
            type="text"
            id="bairro"
            {...register("bairro", { value: endereco.bairro })}
            required
            disabled
          ></input>
          <input
            className="inputText"
            type="text"
            id="cidade"
            {...register("cidade", { value: endereco.localidade })}
            required
            disabled
          ></input>
          <input
            className="inputText"
            type="text"
            id="uf"
            {...register("uf", { value: endereco.uf })}
            required
            disabled
          ></input>
        </>
      ) : null}
      <button className="button" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default FormMember;
