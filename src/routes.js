import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalModal from './context'
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Consulta from "./pages/consulta/Consulta";

const AllRoutes = () => {
  const [ closeModal, setCloseModal ] = useState(false)

  return (
    <GlobalModal.Provider value={{close: closeModal, setClose: setCloseModal}}>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/"/>
          <Route element={<Home />} path="/home" />
          <Route element={<Cadastro />} path="/cadastro" />
          <Route element={<Consulta />} path="/consulta" />
        </Routes>
      </BrowserRouter>
    </GlobalModal.Provider>
  )
}

export default AllRoutes;