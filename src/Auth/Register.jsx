import { NavLink } from "react-router";
import { Button } from "../components/button";
import { FaArrowLeft } from "react-icons/fa";

export const Register = () => {
  //Volver a la pagina anterior

  return (
    <>
      {/* Pantalla anterior boton */}

      <NavLink to="/home">
        <FaArrowLeft className="text-6xl p-3 cursor-pointer m-5 transition duration-200 hover:scale-90 border-b-2 border-b-green-700 hover:border-b-transparent bg-yellow-300 rounded-4xl" />
      </NavLink>

      {/* Targeta login */}
      <div className="flex flex-col items-center min-h-screen mt-20 ">
        <div className="flex flex-col gap-6 border-3 rounded-3xl p-10 md:h-[500px] md:w-[500px] justify-center items-center bg-[#93C572]">
          <div className="dancing-script text-5xl mb-5">Sipsy</div>
          <form className="flex flex-col gap-3">
            <input
              className="border rounded-2xl p-2 bg-amber-100 w-full"
              type="text"
              name="name"
              id="name"
              required
              placeholder="Username"
            ></input>
            <input
              className="border rounded-2xl bg-amber-100 p-2 w-full"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
            ></input>
            <input
              className="border rounded-2xl bg-amber-100 p-2 w-full"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            ></input>
            <input
              className="border rounded-2xl bg-amber-100 p-2 w-full"
              type="password2"
              name="password2"
              id="password2"
              required
              placeholder="Repeat the password"
            ></input>
          </form>

          {/*  */}
          <div className="flex flex-row text-gray-700 text-sm gap-10 items-center">
            {/* Remember me */}
            <div className="flex gap-2 text-gray-700 text-sm">
              <input type="checkbox" id="checkbox" name="checkbox"></input>
              <label htmlFor="checkbox">Remember me</label>
            </div>
            {/* Do u have a account */}
            <div className="flex flex-col items-center">
              <a
                href="/login"
                className="text-green-900 border border-transparent hover:border-b-green-700"
              >
                Do you have an account?
              </a>
            </div>
          </div>
          <input type="submit" value="Submit" nombre="Register"></input>
        </div>
      </div>
    </>
  );
};
