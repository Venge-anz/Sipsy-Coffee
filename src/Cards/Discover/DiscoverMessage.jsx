export const DiscoverMessage = () => {
  return (
    <>
      <div className="flex flex-row bg-[#93C572] items-center p-20 gap-10">
        <div className="uppercase font-extrabold text-amber-100 text-2xl bagel-fat-one-regular p-20">
          Join our Weekly Coffee Photo Contest and show the world your most
          aesthetic coffee moments.
          <br></br>
          Each week’s winner receives a{" "}
          <span className="text-green-800">
            5-year supply of monthly Coffee & Tea Packs{" "}
          </span>
          Spread the aroma, and start your winning streak!
        </div>

        <img
          src="/Discover/coffeePackShot.jpg"
          alt="coffeePack"
          className="w-[400px] border-2 rounded-2xl border-amber-100"
        ></img>
      </div>
    </>
  );
};
