import React from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Project from "../components/project";
import Footer from "../components/footer";
import Header from "../components/header";
import Process from "../components/process";
import Teams from "../components/teams";
import Article from "../components/article";
import Clients from "../components/clients";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Process />
      <Teams />
      <Article />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
