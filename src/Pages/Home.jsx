import React from "react";
import AboutSnippet from "../Components/AboutSnippet";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Services from "./Services";
import NewsTicker from "../Components/NewsTicker";
import Aabout from "../Components/Aabout";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <AboutSnippet />
      <Aabout />
      <Experience />
      <Services />
      <NewsTicker />
      {/* <About /> */}
      <Footer />
    </div>
  );
};

export default Home;
