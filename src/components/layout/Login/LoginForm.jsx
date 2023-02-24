import React, { useState, useContext } from "react";
import { AccentButton } from "../../ui/AccentButton";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoginContext } from "../../../contexts/LoginContext";
import "react-toastify/dist/ReactToastify.css";

export function LoginForm() {
  const { isAuth, setIsAuth } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:4000/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = response.json();
    json.then((data) => {
      if (data.complete) {
        setIsAuth(true);
      } else {
        const notify = () => toast.error("Usuario o contraseña incorrectos!");
        notify();
        setIsAuth(false);
      }
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <div className="form__group">
        <label htmlFor="" className="form__label">
          Correo
        </label>
        <input
          type="text"
          placeholder="Usuario"
          className="form__input"
          {...register("correo", { required: true })}
        />
        {errors.correo?.type === "required" && (
          <p className="alert">El usuario es requerido</p>
        )}
      </div>
      <div className="form__group">
        <label htmlFor="" className="form__label">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          className="form__input"
          {...register("contraseña", { required: true })}
        />
        {errors.contraseña?.type === "required" && (
          <p className="alert">La contraseña es requerida</p>
        )}
      </div>
      <div className="form__group form__group--forgot-password">
        <a href="#" className="form__forgot-password">
          Olvidé mi contraseña
        </a>
      </div>
      <AccentButton content={"Iniciar sesión"} />
      <button className="btn btn--iniciar-sesion-google">
        <img src="/public/images/google-icon.png" alt="google-icon" />
        Iniciar sesion con google{" "}
      </button>
      {isAuth ? <Navigate to="/home" /> : null}
    </form>
  );
}
