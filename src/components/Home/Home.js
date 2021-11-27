import React from "react";
import Services from "../Service/Services/Services";
import Banner from "./Banner/Banner";
import useAuth from "../../hooks/useAuth";
import DestinationIdea from "./DestinationIdea/DestinationIdea";
import Explore from "./Explore/Explore";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <DestinationIdea></DestinationIdea>
      <Explore></Explore>
    </div>
  );
};

export default Home;
