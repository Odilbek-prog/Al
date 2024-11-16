import React from "react";
import Intro from "../Components/UI/Intro/Intro";
import Serv from "../Components/UI/Serv/Serv";
import Team from "../Components/UI/Team/Team";
import Partner from "../Components/UI/Partner/Partner";
import Media from "../Components/UI/Media/Media";
import Student from "../Components/UI/Student/Student";
import Faq from "../Components/UI/Faq/Faq";
import Consul from "../Components/UI/Consul/Consul";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Serv />
      <Team />
      <Partner />
      <Media />
      <Student />
      <Faq />
      <Consul />
    </div>
  );
};

export default Home;
