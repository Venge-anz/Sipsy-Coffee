import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div
          className="flex justify-center rounded-t-2xl"
          style={{ backgroundColor: "#93C572" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center bg-amber-100 md:w-full h-full mr-10 ml-10 md:h-12 pb-3 md:pb-0 rounded-4xl mt-4 pl-6 pr-6 gap-5">
            <div className="dancing-script text-3xl">Sipsy</div>

            <div className="flex flex-col md:flex-row md:gap-10 font-extralight cursor-pointer">
              <div>Discover</div>
              <div>Ranking</div>
              <div>About us</div>
            </div>

            <NavLink to="/login" className="font-bold cursor-pointer">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
