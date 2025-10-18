import { Route, Routes } from "react-router";
import { Home } from "./Home/Home/";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { FileUpload } from "./Cards/Discover/FileUpload";
import { Discover } from "./Cards/Discover/Discover";

export const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />

      {/* Rutas principales */}
      <Route path="/description" element={<FileUpload />} />

      {/* Rutas restantes */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
