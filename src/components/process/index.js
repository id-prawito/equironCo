import React, { useEffect } from "react";
import { FaPeopleArrows, FaRegHandshake, FaRegNewspaper } from "react-icons/fa";
import process_jump_right from "../../assets/img/law_stack/process-1-shape.png";
import process_one from "../../assets/img/law_stack/process-1.jpg";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { ProcessSite } from "./ProcessElements";

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
    <ProcessSite id="process">
      <div className="shape-mockup-process-right jump-process">
        <img src={process_jump_right} alt="process_jump_right" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        ref={ref}
        className="process-container"
      >
        <div className="process-content">
          <div className="process-content-images">
            <img src={process_one} alt="process_one" />
          </div>
          <div className="process-content-flow">
            <div className="text">Work Process</div>
            <div className="title">
              Navigating the Law: Your Assurance of Peace
            </div>
            <div className="process">
              <motion.div variants={item_nya} className="process-item">
                <div className="process-item-icon">
                  <FaRegHandshake className="icon-class" />
                </div>
                <div className="process-item-content">
                  <div className="box-title">Initial Consultation</div>
                  <div className="desc">
                    Our experienced lawyers thoroughly analyze the facts of each
                    case. They then apply the relevant laws to provide clear.
                  </div>
                </div>
              </motion.div>
              <motion.div variants={item_nya} className="process-item">
                <div className="process-item-icon">
                  <FaRegNewspaper className="icon-class" />
                </div>
                <div className="process-item-content">
                  <div className="box-title">Case Evaluation</div>
                  <div className="desc">
                    We prioritize understanding your concerns and aligning with
                    your goals. Your satisfaction is our top priority.
                  </div>
                </div>
              </motion.div>
              <motion.div variants={item_nya} className="process-item">
                <div className="process-item-icon">
                  <FaPeopleArrows className="icon-class" />
                </div>
                <div className="process-item-content">
                  <div className="box-title">Legal Strategy</div>
                  <div className="desc">
                    We develop a customized plan to protect your rights and
                    achieve the best possible outcome.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </ProcessSite>
  );
};

export default Process;
