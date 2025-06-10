import React from "react";
import { HERO_DATA } from "../../config/Data";
import { HeroSite } from "./HeroElements";
import { motion } from "framer-motion";
import law1 from "./../../assets/img/law1.png";
import heroBg from "./../../assets/img/law_stack/hero_bg_1_1.jpg";
import heroOverlay from "./../../assets/img/law_stack/hero1-overlay.png";

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
        class="th-hero-bg background-image"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <img src={heroOverlay} alt="Hero overlay"></img>
      </div>
      <div className="container_new">
        <div className="hero_container">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="hero_content"
          >
            <motion.h1 variants={item_nya}>{HERO_DATA.text_small}</motion.h1>
            <motion.div variants={item_nya} className="big_heading">
              {HERO_DATA.big_heading}
            </motion.div>
            <motion.div variants={item_nya} className="big_heading_one">
              {HERO_DATA.big_heading2}
            </motion.div>
            <motion.p variants={item_nya}>{HERO_DATA.description}</motion.p>
            <motion.div variants={item_nya} className="button_hero">
              {HERO_DATA.button.map((item, i) => (
                <div key={i} className="button_my-course">
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
            className="hero_content"
          >
            <motion.div variants={item_nya} className="images_hero">
              <div class="image-border-container">
                <img src={law1} alt="Law Image" class="main-image" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </HeroSite>
  );
};

export default Hero;
