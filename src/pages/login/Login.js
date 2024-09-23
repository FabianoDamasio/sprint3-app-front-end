import React, { useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import Header from "../../components/header/header";
import "./styles.css";
import Alert from "../../components/alert/Alert";
import GlobalModal from "../../context";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [cookies, setCookies] = useCookies(["login"]);
  const { close, setClose } = useContext(GlobalModal);

  useEffect(() => {
    if (cookies) {
      setCookies("login", "");
    }
  }, []);

  const SetNewLogin = (data) => {
    const formData = new FormData();
    formData.append('login', data.login);
    formData.append('password', data.senha);

    let url = "http://127.0.0.1:5000/add_user";
    var requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => {
        setCookies("login", data.login);
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const RejectLogin = (data) => {
    let url = `http://localhost:5000/user?login=${data.login}&password=${data.senha}`;
    var requestOptions = {
      method: "GET",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.check) {
          setCookies("login", data.login);
          window.location.href = "/home";
        } else {
          setClose(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setClose(true);
      });
  };

  const CheckNewLogin = (data) => {
    let urlAll = `http://localhost:5000/all_users`;
    var requestOptions = {
      method: "GET",
    };
    fetch(urlAll, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.users.length > 0) {
          RejectLogin(data);
        } else {
          SetNewLogin(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setClose(true);
      });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="containerLogin">
        <form className="containerForm" onSubmit={handleSubmit(CheckNewLogin)}>
          <div className="containerInput">
            <label className="tittleInput" for="login">
              Email
            </label>
            <input
              className="inputText"
              type="text"
              id="login"
              {...register("login")}
              required
            ></input>
          </div>
          <div className="containerInput">
            <label className="tittleInput" for="senha">
              Senha
            </label>
            <input
              className="inputText"
              type="text"
              id="senha"
              {...register("senha")}
              required
            ></input>
          </div>
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
        {close ? Alert("Usuário ou senha estão incorretos!", true) : null}
      </div>
    </React.Fragment>
  );
}
