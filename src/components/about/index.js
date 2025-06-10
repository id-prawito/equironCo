import React, { useEffect } from "react";
import { TECH_STACK, ABOUT_DATA } from "../../config/Data";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { AboutSite } from "./AboutElements";
import law from "./../../assets/img/law.jpg";
import law1 from "./../../assets/img/law1.png";
import law2 from "./../../assets/img/law2.png";
import {
  FaBalanceScale,
  FaStarHalfAlt,
  FaTrophy,
  FaUserShield,
} from "react-icons/fa";
import jump from "../../assets/img/law_stack/process-1-shape.png";
import jump_right from "../../assets/img/law_stack/about1-right-bottom.png";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

  const item_card = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <AboutSite ref={ref} id="about">
      <div className="shape-mockup-about jump_about">
        <img src={jump} alt="jump" srcSet="" />
      </div>

      <div className="shape-mockup-about-right jump_about">
        <img src={jump_right} alt="jump" srcSet="" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="pembungkus_about"
      >
        <div className="about_content">
          <motion.div variants={item_nya} className="content_about">
            <h1>{ABOUT_DATA.text_small}</h1>
            <div className="big_heading_about">
              A Legacy <span>Of</span> Legal Excellence
            </div>
            <p>{ABOUT_DATA.text_description}</p>
            <ul className="text_skill">
              {ABOUT_DATA.skill.map((item, i) => (
                <li key={i}>
                  <div className="icon">
                    <item.icon />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item_nya} className="content_card_new">
            <div className="cardArea">
              <div className="image_wrapper">
                <div className="image_border" />
                <img src={law} alt="" />
              </div>
            </div>
            <div className="cardArea2">
              <div className="images_card_area one">
                <div className="images_card2">
                  <img src={law1} alt="" srcSet="" />
                </div>
              </div>
              <div className="images_card_area two">
                <div className="images_card2">
                  <img src={law2} alt="" srcSet="" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={item_nya} class="stats-container">
          <div class="stat-item">
            <i class="icon">
              <FaBalanceScale />
            </i>
            <div className="content">
              <h3>10k+</h3>
              <p>Case Done</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="stat-item">
            <i class="icon">
              <FaUserShield />
            </i>
            <div className="content">
              <h3>12k+</h3>
              <p>Expert Attorneys</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="stat-item">
            <i class="icon">
              <FaStarHalfAlt />
            </i>
            <div className="content">
              <h3>15k+</h3>
              <p>Happy Client</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="stat-item">
            <i class="icon">
              <FaTrophy />
            </i>
            <div className="content">
              <h3>20k+</h3>
              <p>Award Winning</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AboutSite>
  );
};

export default About;
