import { Card1 } from "../Cards/Card1";
import { AboutUs } from "../Cards/AboutUs";
import { TopVoted } from "../Cards/Ranking";
import { Discover } from "../Cards/Discover/Discover";
import { DiscoverMessage } from "../Cards/Discover/DiscoverMessage";

export const Home = () => {
  return (
    <>
      <div className="m-10 mr-30 ml-30">
        <div className="border-5 rounded-3xl">
          <Card1></Card1>
          <TopVoted></TopVoted>
          <DiscoverMessage />
          <Discover></Discover>
          <AboutUs></AboutUs>
        </div>
      </div>
    </>
  );
};
