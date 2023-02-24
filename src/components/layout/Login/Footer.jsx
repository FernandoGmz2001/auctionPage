import React from "react";
import { FooterQuestion } from "../LoginRegister/FooterQuestion";
export function Footer({}) {
  return (
    <div className="footer">
      <FooterQuestion
        question={"No tienes una cuenta?"}
        action={"Regístrate"}
        link={"/register"}
      />
      <img
        src="/public/images/login-svg.svg"
        alt="login-svg"
        className="footer__image"
      />
    </div>
  );
}
