import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import WarpperItem from "./components/WarpperItem";
import "./styles.css";

export default function Consulta() {
  const [listFilter, setListFilter] = useState([]);
  const [cadastrar, setCadastrar] = useState("nome");
  const [Sobrenome, setSobrenome] = useState("todas");
  const [inputCadastrar, setInputCadastrar] = useState("");
  const [listMembers, setListMembers] = useState([]);
  const [familys, setFamilys] = useState([]);

  const getListMembers = async () => {
    let url = "http://127.0.0.1:5000/membros";

    fetch(url, {
      method: "get",
    })
      .then((response) => response.json())
      .then((response) => {
        setListMembers(response.membros);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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

  useEffect(() => {
    AllFamilys();
    getListMembers();
  }, []);

  const filter = () => {
    var newlist;
    if (inputCadastrar || Sobrenome) {
      switch (cadastrar) {
        case "nome":
          newlist = listMembers.filter((value) => {
            var nomeValue = value.nome.toLowerCase();
            var nomeInput = inputCadastrar.toLowerCase();
            if(nomeValue.includes(nomeInput)) {
              return value
            }
            return null
          });
          if (newlist) {
            setListFilter(newlist);
          } else {
            setListFilter(listMembers);
          }
          break;
        case "sobrenome":
          if (Sobrenome !== "todas") {
            var findFamily = familys.find(
              (value) => value.Sobrenome === Sobrenome
            );
            newlist = listMembers.filter(
              (value) => value.família === findFamily.id
            );
            if (findFamily) {
              setListFilter(newlist);
            }
          } else {
            setListFilter(listMembers);
          }
          break;
        case "cpf":
          newlist = listMembers.filter((value) =>
            String(value.cpf).includes(String(inputCadastrar))
          );
          if (newlist) {
            setListFilter(newlist);
          } else {
            setListFilter(listMembers);
          }
          break;
        default:
          break;
      }
    } else {
      getListMembers();
    }
  };

  return (
    <React.Fragment>
      <Header backTo="home" />
      <div className="containerConsulta">
        <div className="containerConsultaSelectfirst">
          <select
            id="cadastrar"
            onChange={(e) => {
              setCadastrar(e.target.value);
            }}
            className="inputText"
          >
            <option value={"nome"} selected>
              Nome
            </option>
            <option value={"sobrenome"}>Família</option>
            <option value={"cpf"}>CPF</option>
          </select>
          {cadastrar === "sobrenome" ? (
            <select
              id="busca"
              className="inputText"
              onChange={(e) => {
                setSobrenome(e.target.value);
              }}
              defaultValue={"todas"}
            >
              <option value={"todas"}>
                Todas
              </option>
              {familys.map((value) => (
                <React.Fragment>
                  <option value={value.Sobrenome}>{value.Sobrenome}</option>
                </React.Fragment>
              ))}
            </select>
          ) : (
            <input
              className="inputText"
              type="text"
              id="busca"
              onChange={(e) => {
                setInputCadastrar(e.target.value);
              }}
            ></input>
          )}
          <button
            className="button"
            onClick={() => {
              filter();
            }}
          >
            Buscar
          </button>
        </div>
        <div className="containerConsultaResults">
          <span>Resultados</span>
          {listFilter.length > 0
            ? listFilter.map((value) => (
                <>
                  <WarpperItem value={value} />
                </>
              ))
            : null}
        </div>
      </div>
    </React.Fragment>
  );
}
