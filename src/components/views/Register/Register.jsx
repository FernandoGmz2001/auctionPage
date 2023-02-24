import { RegisterForm } from "../../layout/Register/RegisterForm";
import { RightContainer } from "../../layout/LoginRegister/RightContainer";
import React from "react";
import { Header } from "../../layout/LoginRegister/Header";
import "../../../styles/LoginRegister.css";
import { FooterQuestion } from "../../layout/LoginRegister/FooterQuestion";

function Register() {
  return (
    <main className="main">
      <div className="left-container">
        <Header title={"Regístrate"} subtitle={"Captura tus datos"} />
        <RegisterForm />
        <div className="footer">
          <FooterQuestion
            question={"Ya tienes una cuenta?"}
            action={"Inicia sesión"}
            link={"/login"}
          />
        </div>
      </div>
      <RightContainer />
    </main>
  );
}

export default Register;
