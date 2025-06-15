import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { AboutSite } from "./AboutElements";
import about_jump_right from "../../assets/img/law_stack/about1-right-bottom.png";
import about_jump_left from "../../assets/img/law_stack/process-1-shape.png";
import images_about_1 from "../../assets/img/law_stack/images_about_1.jpg";
import images_about_2 from "../../assets/img/law_stack/images_about_2.png";
import images_about_3 from "../../assets/img/law_stack/images_about_3.png";
import {
  FaBalanceScale,
  FaCheckCircle,
  FaStarHalfAlt,
  FaUserShield,
  FaTrophy,
} from "react-icons/fa";

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

  const statsData = [
    { icon: <FaBalanceScale />, value: "10k+", label: "Case Done" },
    { icon: <FaUserShield />, value: "12k+", label: "Expert Attorneys" },
    { icon: <FaStarHalfAlt />, value: "15k+", label: "Happy Clients" },
    { icon: <FaTrophy />, value: "20k+", label: "Award Winning" },
  ];

  const skillData = [
    { icon: FaCheckCircle, text: "Committed to excellence in legal practice." },
    {
      icon: FaCheckCircle,
      text: "Act with honesty and uphold ethical principles.",
    },
    { icon: FaCheckCircle, text: "Road Test Preparation with 98% success" },
    { icon: FaCheckCircle, text: "Meeting clients' needs is our priority." },
  ];

  return (
    <AboutSite ref={ref} id="about">
      <div className="shape-mockup-about-left jump_about">
        <img src={about_jump_left} alt="shape-mockup-about-left" />
      </div>
      <div className="shape-mockup-about-right jump_about">
        <img src={about_jump_right} alt="shape-mockup-about-right" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="about-container"
      >
        <div className="about-content">
          <motion.div variants={item_nya} className="about-details">
            <h1>Being a frontend developer / frontend engineer.</h1>
            <div className="big-heading-about">
              A Legacy <span>Of</span> Legal Excellence
            </div>
            <p>
              Our team of experienced attorneys has a diverse range of expe
              rtise, covering a wide spectrum of legal areas. We specialize in
              corporate law, family law.
            </p>
            <ul className="text-skill">
              {skillData?.map((item, i) => (
                <li key={i}>
                  <div className="icon">
                    <item.icon />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item_nya} className="content-card-images">
            <div className="cardImagesArea">
              <div className="image-wrapper">
                <div className="image-border" />
                <img src={images_about_1} alt="images_about_1" />
              </div>
            </div>
            <div className="cardImagesArea2">
              <div className="images-card-area one">
                <div className="images-card-area-two">
                  <img src={images_about_2} alt="images_about_2" />
                </div>
              </div>
              <div className="images-card-area two">
                <div className="images-card-area-two">
                  <img src={images_about_3} alt="images_about_3" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={item_nya} className="stats-container">
          {statsData.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className="test">
                <div className="stat-item">
                  <div className="icon">{s.icon}</div>
                  <div className="content">
                    <h3>{s.value}</h3>
                    <p>{s.label}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </AboutSite>
  );
};

export default About;
