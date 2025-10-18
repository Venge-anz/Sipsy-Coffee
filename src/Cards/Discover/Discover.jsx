import { useContext } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import { NavLink } from "react-router";
import { imageContext } from "../../context/ImageContext";

export const Discover = () => {
  const { formData } = useContext(imageContext);

  return (
    <>
      <div id="Discover" className="flex flex-col items-center bg-[#FFDDA6]">
        {/* Titulo */}
        <div className="flex flex-row">
          <img
            src="/Discover/title.png"
            alt="DiscoverTitle"
            className="w-[210px]"
          ></img>
        </div>

        {/* Contenedor de imagenes */}

        <div className="flex md:flex-wrap gap-10 mb-10 border-2 border-amber-900 rounded-2xl p-20 ">
          {formData && formData.length > 0 ? (
            formData.map((imagen, id) => (
              <div key={id}>
                <div className="border-amber-50 rounded-4xl bg-amber-100 h-[400px] w-[300px] overflow-hidden">
                  <img
                    src={URL.createObjectURL(imagen.file)}
                    alt="Selected"
                    className="h-60 w-full object-cover"
                  />
                  <div className="flex flex-col justify-center items-center m-3">
                    <div className="lobster-regular text-3xl text-amber-900">
                      {imagen.title}
                    </div>
                    <div className="font-extralight">@{imagen.username}</div>
                  </div>
                  <div className="m-2 italic">{imagen.ingredients}</div>
                </div>
                <NavLink to="/description">
                  <TbPhotoPlus className="text-3xl cursor-pointer ransition duration-200 ease-in-out hover:scale-115 m-3 " />
                </NavLink>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center border-2 border-amber-200 rounded-2xl bg-[#F5F4E1] ">
              <img
                src="/Discover/coffeeSad.gif"
                alt="coffeeSadPic"
                className="rounded-t-2xl"
              ></img>
              <p>No photos this week...</p>
              <NavLink to="/description">
                <p className="text-amber-700 hover:text-amber-500 mb-2 font-extrabold">
                  Upload the first one!
                </p>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
