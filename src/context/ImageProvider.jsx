import { useState } from "react";
import { imageContext } from "./ImageContext";

export const ImageProvider = ({ children }) => {
  // El formulario + la imagen

  const [formData, setFormData] = useState([]);

  //Inputs formulario

  const [infoImage, setInfoImage] = useState({
    title: "",
    username: "",
    ingredients: "",
  });

  return (
    <>
      <imageContext.Provider
        value={{ formData, setFormData, infoImage, setInfoImage }}
      >
        {children}
      </imageContext.Provider>
    </>
  );
};
