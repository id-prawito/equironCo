import React, { useEffect } from "react";
import {
  FaHandshake,
  FaPeopleArrows,
  FaRegHandshake,
  FaRegNewspaper,
  FaRegThumbsUp,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { CONTACT_DATA } from "../../config/Data";
import { ProcessSite } from "./ProcessElements";
import jump from "../../assets/img/law_stack/process-1-shape.png";
import process_one from "../../assets/img/law_stack/process-1.jpg";

const Process = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

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
        staggerChildren: 0.6,
      },
    },
  };

  const item_nya = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <ProcessSite id="process">
      <div className="shape-mockup jump">
        <img src={jump} alt="jump" srcSet="" />
      </div>
      <div className="process_container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="process_content"
        >
          <div className="process_content_images">
            <img src={process_one} alt="process_one" />
          </div>
          <div className="process_content_flow">
            <div className="text">Work Process</div>
            <div className="title">
              Navigating the Law: Your Assurance of Peace
            </div>
            <div className="process">
              <div className="process_item">
                <div className="process_item_icon">
                  <FaRegHandshake className="icon_class" />
                </div>
                <div className="process_item_content">
                  <div className="box_title">Initial Consultation</div>
                  <div className="desc">
                    Our experienced lawyers thoroughly analyze the facts of each
                    case. They then apply the relevant laws to provide clear.
                  </div>
                </div>
              </div>
              <div className="process_item">
                <div className="process_item_icon">
                  <FaRegNewspaper className="icon_class" />
                </div>
                <div className="process_item_content">
                  <div className="box_title">Case Evaluation</div>
                  <div className="desc">
                    We prioritize understanding your concerns and aligning with
                    your goals. Your satisfaction is our top priority.
                  </div>
                </div>
              </div>
              <div className="process_item">
                <div className="process_item_icon">
                  <FaPeopleArrows className="icon_class" />
                </div>
                <div className="process_item_content">
                  <div className="box_title">Legal Strategy</div>
                  <div className="desc">
                    We develop a customized plan to protect your rights and
                    achieve the best possible outcome.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <div className="hero_container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="contact_content"
        >
          <motion.h1 variants={item_nya}>{CONTACT_DATA.text_small}</motion.h1>
          <motion.div variants={item_nya} className="big_heading">
            {CONTACT_DATA.big_heading}
          </motion.div>
          <motion.p variants={item_nya}>{CONTACT_DATA.description}</motion.p>
          <motion.div variants={item_nya} className="button_hero">
            <div className="button_my-course">
              <div className="item_content">
                <FaRegThumbsUp />
                <a
                  href={CONTACT_DATA.to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_DATA.button}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div> */}
    </ProcessSite>
  );
};

export default Process;
