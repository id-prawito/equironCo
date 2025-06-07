import React from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Project from "../components/project";
import Footer from "../components/footer";
import Header from "../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
