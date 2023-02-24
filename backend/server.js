import express from "express";
import cors from "cors";
import { router } from "./routes.js";
const app = express();

app.set("port", 4000);

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});
