import { FaStar } from "react-icons/fa6";

const imagenes = [
  { id: 1, imagen: "/TopVoted/coffe1.jpg" },
  { id: 2, imagen: "/TopVoted/coffee2.jpg" },
  { id: 3, imagen: "/TopVoted/coffee3.jpg" },
];

export const TopVoted = () => {
  return (
    <>
      {/* Contenido contenedor 1 */}
      <div id="Ranking" className="flex flex-col items-center bg-amber-100">
        {/* Titulo */}
        <div className="lobster-regular text-5xl m-10 border-b-2">
          Top voted last week
        </div>
        {/* contenedores imagenes */}
        <div className="flex flex-wrap justify-center md:justify-between gap-20 ">
          {imagenes.map((img) => (
            <div
              key={img.id}
              className=" flex flex-col items-center border-1 rounded-3xl h-full p-5 gap-5 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 "
            >
              <img
                src={img.imagen}
                alt="imagenTop"
                className="w-52 h-52 rounded-3xl"
              ></img>

              {/* Estrellas creando array */}
              <div className="flex justify-center transition scale-110 hover:-translate-y-1 duration-300">
                {[...Array(5)].map((_, i) => (
                  <div key={i}>
                    <FaStar className="m-1 text-large" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="m-20 text-large ">
          The photos with the most votes will be entered into a contest where
          the winners can receive a supply of coffee, matcha, or tea for 5
          years!
        </div>
      </div>
    </>
  );
};
