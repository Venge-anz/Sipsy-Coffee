import { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { NavLink } from "react-router";
import { Button } from "../../components/button";
import { imageContext } from "../../context/ImageContext";

export const FileUpload = () => {
  //Imagenes
  const [file, setFile] = useState(null);

  //Estado de carga
  const [isLoading, setIsLoading] = useState(false);

  // Los campos deben ser obligatorios

  const [errors, setErrors] = useState({});

  const [shake, setShake] = useState(false);

  //Informacion Imagenes contexto
  const { setFormData, infoImage, setInfoImage } = useContext(imageContext);

  ///////////////

  //Mostrar el nombre de imagen
  const selectionImage = (e) => {
    const files = Array.from(e.target.files);
    setFile(files[0]);
  };

  // Mostrar la informacion del objeto de la foto

  const handleForm = (e) => {
    const { value, name } = e.target;
    setInfoImage((prev) => ({ ...prev, [name]: value }));
  };

  //Enviar la informacion

  const submitCoffeeShoot = (e) => {
    //Campos requeridos

    const newErrors = {};

    e.preventDefault();

    const newImageData = {
      title: infoImage.title,
      username: infoImage.username,
      ingredients: infoImage.ingredients,
      file: file,
    };

    //Condiciones SI hay errores

    if (!newImageData.title.trim()) {
      newErrors.title = "Please add a title.";
    }
    if (!newImageData.username.trim()) {
      newErrors.username = "Don’t forget your username!";
    }

    if (!newImageData.ingredients.trim()) {
      newErrors.ingredients = "List your ingredients, please!";
    }
    if (!newImageData.file) {
      newErrors.file = "Upload a photo to continue.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length >= 1) {
      setShake(true);

      setTimeout(() => {
        setShake(false);
      }, 2000);
    }

    //Si NO hay errores

    if (Object.keys(newErrors).length === 0) {
      setFormData((prev) => [...prev, newImageData]);

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      //Limpiar el formulario
      setInfoImage({ title: "", username: "", ingredients: "" });
      setFile(null);
    }
  };

  return (
    <>
      {/* Pantalla anterior boton */}

      <NavLink to="/home">
        <FaArrowLeft className="text-6xl p-3 cursor-pointer m-5 transition duration-200 hover:scale-90 border-b-2 border-gray-800 hover:border-b-transparent bg-[#F7CD97] rounded-4xl" />
      </NavLink>

      {/* Targeta formulario */}
      <div
        className={`flex flex-col items-center min-h-screen mt-20  ${
          shake ? "animate-shake" : ""
        }`}
      >
        <div>
          <div className="flex flex-col gap-6 border-3 rounded-3xl p-7 md:h-full md:w-[400px] items-center justify-center bg-[#F7CD97]">
            {/* //Imagen de carga */}
            {isLoading === true ? (
              <img
                src="/Discover/loadingCoffee1.gif"
                alt="loadingImage"
                className="border-2"
              ></img>
            ) : (
              // Formulario

              <>
                <div className="flex flex-row gap-2 justify-center items-center lobster-regular text-3xl mb-5 text-center">
                  <p> Upload your photo!</p>
                  <CiCamera></CiCamera>
                </div>

                <form id="coffeeShotForm" className="flex flex-col gap-3">
                  <input
                    className="border rounded-2xl p-2 bg-amber-100 w-[300px]"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Image title"
                    maxLength="25"
                    value={infoImage.title}
                    onChange={handleForm}
                  ></input>

                  {errors.title && (
                    <p className="text-red-600 text-sm">{errors.title}</p>
                  )}

                  <input
                    className="border rounded-2xl p-2 bg-amber-100 w-full"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    maxLength="20"
                    value={infoImage.username}
                    onChange={handleForm}
                    //evitar los espacios
                    onKeyDown={(e) => {
                      if (e.key === " ") e.preventDefault();
                    }}
                  ></input>
                  {errors.username && (
                    <p className="text-red-600 text-sm">{errors.username}</p>
                  )}

                  <textarea
                    className="flex text-st border rounded-2xl p-2 bg-amber-100 w-full"
                    name="ingredients"
                    id="ingredients"
                    placeholder="Ingredients"
                    min="1"
                    maxLength="100"
                    value={infoImage.ingredients}
                    onChange={handleForm}
                  ></textarea>
                  {errors.ingredients && (
                    <p className="text-red-600 text-sm">{errors.ingredients}</p>
                  )}

                  {/* //Seleccionar una foto */}

                  <input
                    type="file"
                    id="myfile"
                    name="myfile"
                    className="hidden"
                    onChange={selectionImage}
                  ></input>

                  <label htmlFor="myfile">
                    <div className="flex flex-row items-center justify-center mt-3 cursor-pointer gap-1">
                      <MdOutlineFileUpload className="text-2xl" />
                      {file && (
                        <span className="text-gray-700">{file.name}</span>
                      )}
                    </div>
                  </label>
                  {errors.file && (
                    <p className="text-red-600 text-sm">{errors.file}</p>
                  )}
                </form>

                <Button
                  form="coffeeShotForm"
                  type="button"
                  onClick={submitCoffeeShoot}
                  nombre="Send Photo"
                ></Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
