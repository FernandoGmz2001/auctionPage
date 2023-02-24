import { useState } from "react";
import Login from "./components/views/Login/Login";
import Home from "./components/views/Home/Home";
import Register from "./components/views/Register/Register";
import "./styles/App.css";
import { LoginContext } from "./contexts/LoginContext";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{ isAuth, setIsAuth }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
