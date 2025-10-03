import { Button } from "../components/button";

export const Card3 = () => {
  return (
    <>
      <div className="flex flex-col" style={{ backgroundColor: "#93C572" }}>
        <div className="flex flex-col md:flex-row justify-baseline">
          <img src="public/store.jpg" alt="storeImage" className="w-full"></img>

          {/* Imagen */}
          <div className="flex flex-col">
            <img src="public/pngwing.com.png" className="w-60 "></img>

            {/* Letras */}
            <div className="flex flex-col gap-10 ml-10 bg-amber-100 mr-30 rounded-2xl p-5 mb-3">
              <div className="flex items-center">
                <div className="text-4xl lobster-regular  ">
                  Visit our store!
                </div>
              </div>

              <div className="font-light italic">
                At Casa Cafe, we believe that every experience matters. From
                rich, aromatic coffees to soothing teas, vibrant matcha drinks,
                and delicious Japanese dishes, we craft everything with care and
                high-quality ingredients. Our mission is simple: create a
                welcoming space where you can relax, connect, or get inspired.
              </div>
              <Button nombre={"Contact us"}></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
