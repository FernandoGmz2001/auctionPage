import { RightContainer } from "../../layout/LoginRegister/RightContainer";

import { Footer } from "../../layout/Login/Footer";
import React from "react";
import { Header } from "../../layout/LoginRegister/Header";
import "../../../styles/LoginRegister.css";
import { LoginForm } from "../../layout/Login/LoginForm";

function Login() {
  return (
    <main className="main">
      <div className="left-container">
        <Header title={"Bienvenido de vuelta"} subtitle={"Ingresa tus datos"} />
        <LoginForm />
        <Footer />
      </div>
      <RightContainer />
    </main>
  );
}

export default Login;
