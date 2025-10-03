import { Card1 } from "../Cards/Card1";
import { Card2 } from "../Cards/Card2";
import { Card3 } from "../Cards/Card3";

export const Home = () => {
  return (
    <>
      <div className=" p-10 bg-[url('/public/bg-pink.jpg')] bg-cover bg-center">
        <div className="ml-30 mr-30">
          <div className="border-5 rounded-3xl">
            <Card1></Card1>
            <Card2></Card2>
            <Card3></Card3>
          </div>
        </div>
      </div>
    </>
  );
};
