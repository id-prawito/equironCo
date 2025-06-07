import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import axios from "axios";
import { ProjectSite } from "./ProjectElements";
import law from "../../assets/img/law_stack/law.svg";

const Project = () => {
  const [repo, setRepo] = useState([]);
  const [visible_item, setVisible] = useState(window.innerWidth > 1155 ? 3 : 4);
  const myRef = useRef(null);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const toGithub = () => {
    window.open("https://github.com/id-prawito");
  };

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const showLessItems = () => {
    setVisible(3);
    scrollToRef(myRef);
  };

  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      try {
        const response = await axios(
          "https://api.github.com/users/id-prawito/repos"
          // {
          //     headers: {
          //         Authorization: `Bearer ${process.env.REACT_APP_API}`,
          //     },
          // }
        );
        // console.log(response.data);
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

  // console.log(repo);
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
    <ProjectSite ref={myRef} id="project">
      <div className="project_container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="project_content"
        >
          <motion.div variants={item_nya} className="content_judul">
            <div className="big_heading">Legal Services We Offer</div>
            <h1>What We Do</h1>
          </motion.div>
          <motion.div variants={item_nya} className="content_service">
            <div className="custom_card">
              <div className="icon_wrapper">
                <img src={law} alt="icon" />
              </div>
              <div className="corner_icon">
                <img src={law} alt="corner icon" />
              </div>
              <h3 className="card_title">Criminal Law</h3>
              <p className="card_desc">
                Defense representations for more various criminal charges.
                Investigations and evidence analysis. Bail applications and.
              </p>
              <a href="#" className="read_more">
                Read More <span className="arrow">→</span>
              </a>
            </div>

            <div className="custom_card">
              <div className="icon_wrapper">
                <img src={law} alt="icon" />
              </div>
              <div className="corner_icon">
                <img src={law} alt="corner icon" />
              </div>
              <h3 className="card_title">Criminal Law</h3>
              <p className="card_desc">
                Defense representations for more various criminal charges.
                Investigations and evidence analysis. Bail applications and.
              </p>
              <a href="#" className="read_more">
                Read More <span className="arrow">→</span>
              </a>
            </div>

            <div className="custom_card">
              <div className="icon_wrapper">
                <img src={law} alt="icon" />
              </div>
              <div className="corner_icon">
                <img src={law} alt="corner icon" />
              </div>
              <h3 className="card_title">Criminal Law</h3>
              <p className="card_desc">
                Defense representations for more various criminal charges.
                Investigations and evidence analysis. Bail applications and.
              </p>
              <a href="#" className="read_more">
                Read More <span className="arrow">→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ProjectSite>
  );
};

export default Project;
