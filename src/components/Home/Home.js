import React from "react";
import AboutMe from "./AboutMe";
import Hero from "../Layout/Hero";
import "../../styles/Home.css";
import Skills from "./Skills";
import FeaturedProjects from "./FeaturedProjects";

const Home = (props) => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
