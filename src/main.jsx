import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./components/views/Login/Login";
import Register from "./components/views/Register/Register";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/views/Home/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

{
  /* <RouterProvider router={router} /> */
}
