import { config } from "./db/db.js";
import bcrypt, { compare } from "bcrypt";
import express from "express";
import sql from "mssql";
import { render } from "react-dom";
export const router = express.Router();

const pool = await sql.connect(config);

router.get("/users", async (req, res) => {
  const response = await pool.query("SELECT * FROM Usuario");
  res.json(response).status(200);
});

router.post("/register", async (req, res) => {
  const { nombre_usuario, correo, contraseña } = req.body;
  const passwordHash = await bcrypt.hash(contraseña, 10);
  const response = await pool.query(
    `INSERT INTO Usuario Values ('${nombre_usuario}','${correo}','${passwordHash}',0)`
  );
  console.log(response);
  res.json({ registered: "Usuario registrado exitosamente" }).status(200);
});

router.post("/auth", async (req, res) => {
  const correo = req.body.correo;
  const contraseña = req.body.contraseña;
  const response = await pool.query(
    `SELECT * FROM Usuario WHERE correo = '${correo}'`,
    (err, result) => {
      if (result.recordset.length == 0) {
        return res.json({ fail: "El correo no existe" }).status(200);
      } else {
        async function comparePassword() {
          const bdContraseña = result.recordset[0].contraseña;
          let compare = await bcrypt.compare(contraseña, bdContraseña);
          if (compare == true) {
            res.json({ complete: "Usuario autenticado" }).status(200);
          } else {
            res.json({ fail: "Usuario no autenticado" }).status(200);
            console.log("Usuario no autenticado");
          }
        }
        comparePassword();
      }
    }
  );
});
