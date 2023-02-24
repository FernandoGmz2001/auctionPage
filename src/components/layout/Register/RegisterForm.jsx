import React, { useState } from "react";
import { AccentButton } from "../../ui/AccentButton";
import { useForm } from "react-hook-form";
import { Navigate, redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isRegistered, setIsRegistered] = useState(false);
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = response.json();
    json.then((data) => {
      console.log(data.registered);
      if (data.registered) {
        const notify = () => toast.success("Usuario registrado!");
        notify();
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    });
    console.log(json);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
          Usuario
        </label>
        <input
          type="text"
          placeholder="Usuario"
          className="form__input"
          {...register("nombre_usuario", { required: true })}
        />
        {errors.nombre_usuario?.type === "required" && (
          <p className="alert">El usuario es requerido</p>
        )}
      </div>
      <div className="form__group">
        <label htmlFor="" className="form__label">
          Correo
        </label>
        <input
          type="email"
          placeholder="Correo"
          className="form__input"
          {...register("correo", { required: true })}
        />
        {errors.correo?.type === "required" && (
          <p className="alert">El correo es requerido</p>
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
      {/* <div className="form__group">
        <label htmlFor="" className="form__label">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="form__input"
          {...register(`${campo}`, { required: true })}
        />
        {errors.nombre_usuario?.type === "required" && (
          <p className="alert">First name is required</p>
        )}
      </div> */}
      {isRegistered ? <Navigate to="/login" /> : null}
      <AccentButton content={"Regístrate"} />
    </form>
  );
}
