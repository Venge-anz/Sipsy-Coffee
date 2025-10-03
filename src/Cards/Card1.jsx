import { Button } from "../components/button";
import { Navbar } from "../components/Navbar";

export const Card1 = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Contenido contenedor 1 */}
      <div
        className="md:flex md:justify-center items-center"
        style={{ backgroundColor: "#93C572" }}
      >
        {/* Contenido izquierda */}
        <div className="flex flex-col">
          {/* Titulo */}
          <div className="flex flex-col justify-center items-center md:justify-end md:items-end mt-10">
            {/* Imagen estrella */}
            <div className=" w-20 rotate-45">
              <img src="/star1.png" alt="star1"></img>
            </div>
            <div
              className="uppercase notable-regular text-2xl
                    md:text-5xl text-right pb-5 "
            >
              Share and vote <br />
              for your favorite
              <br /> coffee.
            </div>
            <p className="mt-4 text-lg font-sans text-gray-600 text-right mb-10">
              Join the community and discover <br /> the best coffees, teas, and
              matchas around you.
            </p>
            {/* Boton */}
            <Button nombre={"Register"}></Button>
          </div>
          <div className="flex justify-center md:justify-end"></div>
        </div>

        {/* Contenido derecha */}
        {/* Imagen */}
        <div className="p-10 md:w-[400px]">
          <img
            src="public/coffees1.jpg"
            alt="ImagenPortada"
            className="rounded-3xl w-full h-auto "
          ></img>
        </div>
      </div>
    </>
  );
};
