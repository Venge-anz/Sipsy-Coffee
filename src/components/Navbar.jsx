import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <nav>
        {/* //Color pistacho del navbar */}
        <div className="flex justify-center rounded-t-2xl bg-[#93C572]">
          <div className="flex flex-col md:flex-row justify-between items-center bg-amber-100 md:w-full h-full mr-10 ml-10 md:h-12 pb-3 md:pb-0 rounded-4xl mt-4 pl-6 pr-6 gap-5">
            <div className="dancing-script text-3xl">Sipsy</div>

            <div className="flex flex-col md:flex-row md:gap-10 font-extralight cursor-pointer">
              <a
                href="#Discover"
                className="border border-transparent hover:border-b-gray-500"
              >
                Discover
              </a>

              <a
                href="#Ranking"
                className="border border-transparent hover:border-b-gray-500"
              >
                Ranking
              </a>

              <a
                href="#aboutUs"
                className="border border-transparent hover:border-b-gray-500"
              >
                About us
              </a>
            </div>

            <NavLink
              to="/login"
              className="font-bold cursor-pointer border-b-2 border-green-700 bg-yellow-300 rounded-4xl p-2 pr-4 pl-4 transition duration-200 hover:scale-95 hover:border-b-transparent "
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
