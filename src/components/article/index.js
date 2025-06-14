import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import jump from "../../assets/img/law_stack/process-1-shape.png";
import teams_bg from "../../assets/img/law_stack/team-1-bg.jpg";
import blog_bg from "../../assets/img/law_stack/blog_1_1.jpg";
import shape_lect from "../../assets/img/law_stack/blog-1-shape-left.png";
import shape_right from "../../assets/img/law_stack/blog-1-shape-right.png";
import heroOverlay from "./../../assets/img/law_stack/hero1-overlay.png";
import hero from "./../../assets/img/law_stack/team_1_8.jpg";
import { ArticleSite } from "./ArticleElements";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCalendarAlt, FaCommentAlt, FaUserAlt } from "react-icons/fa";

const Article = () => {
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
  const lawyers = [
    {
      name: "Smith Miller",
      title: "Attorney",
      image: hero,
    },
    {
      name: "Samira Dsuza",
      title: "Attorney",
      image: hero,
    },
    {
      name: "Michel Phelps",
      title: "Chief Justice",
      image: hero,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: hero,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: hero,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: hero,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: hero,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: hero,
    },
  ];

  return (
    <ArticleSite id="article">
      <div className="teams_container">
        <div className="team-content-container">
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            ref={ref}
            className="teams_desc"
          >
            <div className="subtitle">Publications</div>
            <div className="sec-title">Our Publications & Update</div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            ref={ref}
            className="teams_content"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              spaceBetween={24}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {lawyers.map((lawyer, index) => (
                <SwiperSlide key={index}>
                  <div class="blog-card">
                    <div class="blog-img">
                      <a href="blog-details.html">
                        <img
                          src={blog_bg}
                          alt="Blog image about Legal Project Manager"
                        />
                      </a>
                    </div>
                    <div class="blog-content">
                      <div class="blog-meta">
                        <a href="blog.html">
                          <FaUserAlt /> By Jonson
                        </a>
                        <a href="blog.html">
                          <FaCalendarAlt /> 22 Sep, 2025
                        </a>
                        <a href="blog-details.html">
                          <FaCommentAlt /> 2 Comments
                        </a>
                      </div>
                      <h3 class="box-title">
                        <a href="blog-details.html">
                          Steps to Pursue a Career as a Legal Project Manager.
                        </a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      <div className="shape-mockup-teams jump_teams">
        <img src={shape_lect} alt="jump" srcSet="" />
      </div>

      <div className="shape-mockup-teams-right jump_teams">
        <img src={shape_right} alt="jump" srcSet="" />
      </div>
    </ArticleSite>
  );
};

export default Article;
