import React from "react";
import AboutSnippet from "../Components/AboutSnippet";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Services from "./Services";
import NewsTicker from "../Components/NewsTicker";
import Aabout from "../Components/Aabout";

const Home = () => {
  return (
    <div>
      <AboutSnippet />
      <Aabout />
      <Experience />
      <Services />
      <NewsTicker />
      {/* <About /> */}
    </div>
  );
};

export default Home;
