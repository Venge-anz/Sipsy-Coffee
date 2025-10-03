import { Route, Routes } from "react-router";
import { Home } from "./Home/Home/";
import { Login } from "./Auth/Login";

export const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />

      {/* Rutas restantes */}

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
