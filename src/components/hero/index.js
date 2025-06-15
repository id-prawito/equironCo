import React from "react";
import { HERO_DATA } from "../../config/Data";
import { HeroSite } from "./HeroElements";
import { motion } from "framer-motion";
import images_about_2 from "./../../assets/img/law_stack/images_about_2.png";
import hero_background from "./../../assets/img/law_stack/hero_background.jpg";
import hero_overlay from "./../../assets/img/law_stack/hero_overlay.png";

const Hero = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4,
      },
    },
  };

  const item_nya = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <HeroSite id="home">
      <div
        className="th-hero-bg background-image"
        style={{
          backgroundImage: `url(${hero_background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <img src={hero_overlay} alt="Hero overlay"></img>
      </div>
      <div className="background-container">
        <div className="hero-container">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="hero-content"
          >
            <motion.h1 variants={item_nya}>{HERO_DATA.text_small}</motion.h1>
            <motion.div variants={item_nya} className="big-heading">
              {HERO_DATA.big_heading}
            </motion.div>
            <motion.div variants={item_nya} className="big-heading-one">
              {HERO_DATA.big_heading2}
            </motion.div>
            <motion.p variants={item_nya}>{HERO_DATA.description}</motion.p>
            <motion.div variants={item_nya} className="button-hero">
              {HERO_DATA.button.map((item, i) => (
                <div key={i} className="button-my-course">
                  <item.icon />
                  <a href={item.to} target="_blank" rel="noopener noreferrer">
                    {item.nama_button}
                  </a>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="hero-content"
          >
            <motion.div variants={item_nya} className="images-hero">
              <div className="image-border-container">
                <img
                  src={images_about_2}
                  alt="Law Image"
                  className="main-image"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </HeroSite>
  );
};

export default Hero;
