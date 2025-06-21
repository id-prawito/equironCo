import React from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Services from "../components/services";
import Footer from "../components/footer";
import Header from "../components/header";
import Process from "../components/process";
import Teams from "../components/teams";
import Article from "../components/article";
import Clients from "../components/clients";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Equiron and Co.</title>
        <meta
          name="description"
          content="Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya."
        />
        <meta
          name="keywords"
          content="hukum, bisnis, konsultasi, pengacara, notaris"
        />
        <meta name="author" content="Equiron and Co." />

        {/* Open Graph (untuk Facebook, LinkedIn, dll) */}
        <meta
          property="og:title"
          content="Equiron and Co. | Trust - Commitment - Accesible"
        />
        <meta
          property="og:description"
          content="Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya."
        />
        <meta
          property="og:image"
          content="https://equironandco.com/static/media/background-og.3fde3d841b7224d8add3.png"
        />
        <meta property="og:url" content="https://equironandco.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Equiron and Co. | Trust - Commitment - Accesible"
        />
        <meta
          name="twitter:description"
          content="Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya."
        />
        <meta
          name="twitter:image"
          content="https://equironandco.com/static/media/background-og.3fde3d841b7224d8add3.png"
        />
      </Helmet>

      <Header />
      <Hero />
      <About />
      <Services />
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
