import React, { useEffect, useRef, useState } from "react";
import icon_gavel from "../../assets/img/law_stack/icon_gavel.svg";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { ServicesSite } from "./ServicesElements";
import axios from "axios";

const Services = () => {
  const [repo, setRepo] = useState([]);
  const myRef = useRef(null);

  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      try {
        const response = await axios(
          "https://api.github.com/users/id-prawito/repos"
        );
        setRepo(response.data);
      } catch {
        console.log("error");
      }
      setLoading(false);
    };
    getList();
  }, []);

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
    <ServicesSite ref={myRef} id="services">
      <div className="services-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="services-content"
        >
          <motion.div variants={item_nya} className="content-title">
            <div className="big-heading">Legal Services We Offer</div>
            <h1>
              In an increasingly complex regulatory environment, NP Consultant
              Indonesia stands as a beacon of legal excellence, providing
              bespoke legal solutions finely tuned to the nuances of Indonesian
              law. Our team is skilled in a wide range of practice areas, each
              handled with the careful attention to detail that sets our firm
              apart.
            </h1>
          </motion.div>
          <motion.div variants={item_nya} className="content-service">
            <div className="custom-card">
              <div className="icon-wrapper">
                <img src={icon_gavel} alt="icon" />
              </div>
              <div className="corner-icon">
                <img src={icon_gavel} alt="corner icon" />
              </div>
              <h3 className="card-title">Criminal Law</h3>
              <p className="card-desc">
                Defense representations for more various criminal charges.
                Investigations and evidence analysis. Bail applications and.
              </p>
              <a href="#" className="read-more">
                Read More <span className="arrow">→</span>
              </a>
            </div>

            <div className="custom-card">
              <div className="icon-wrapper">
                <img src={icon_gavel} alt="icon" />
              </div>
              <div className="corner-icon">
                <img src={icon_gavel} alt="corner icon" />
              </div>
              <h3 className="card-title">Criminal Law</h3>
              <p className="card-desc">
                Defense representations for more various criminal charges.
                Investigations and evidence analysis. Bail applications and.
              </p>
              <a href="#" className="read-more">
                Read More <span className="arrow">→</span>
              </a>
            </div>

            <div className="custom-card">
              <div className="icon-wrapper">
                <img src={icon_gavel} alt="icon" />
              </div>
              <div className="corner-icon">
                <img src={icon_gavel} alt="corner icon" />
              </div>
              <h3 className="card-title">Criminal Law</h3>
              <p className="card-desc">
                Defense representations for more various criminal charges.
                Investigations and evidence analysis. Bail applications and.
              </p>
              <a href="#" className="read-more">
                Read More <span className="arrow">→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ServicesSite>
  );
};

export default Services;
