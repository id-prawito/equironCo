import React, { useEffect } from "react";
import shape_right from "../../assets/img/law_stack/blog-1-shape-right.png";
import shape_lect from "../../assets/img/law_stack/blog-1-shape-left.png";
import { FaCalendarAlt, FaCommentAlt, FaUserAlt } from "react-icons/fa";
import blog_bg from "../../assets/img/law_stack/blog_bg.jpg";
import { useInView } from "react-intersection-observer";
import { Navigation, Pagination } from "swiper/modules";
import { useAnimation, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArticleSite } from "./ArticleElements";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const articles = [
    {
      name: "Smith Miller",
      title: "Steps to Pursue a Career as a Legal Project Manager.",
      image: blog_bg,
    },
    {
      name: "Samira Dsuza",
      title: "Steps to Pursue a Career as a Legal Project Manager.",
      image: blog_bg,
    },
    {
      name: "Michel Phelps",
      title: "Steps to Pursue a Career as a Legal Project Manager.",
      image: blog_bg,
    },
    {
      name: "Sarah Rahma",
      title: "Steps to Pursue a Career as a Legal Project Manager.",
      image: blog_bg,
    },
    {
      name: "Sarah Rahma",
      title: "Steps to Pursue a Career as a Legal Project Manager.",
      image: blog_bg,
    },
  ];

  return (
    <ArticleSite id="article">
      <div className="article-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="article-content-container"
        >
          <motion.div variants={item_nya} className="article-desc">
            <div className="article-title">Publications</div>
            <div className="article-subtitle">Our Publications & Update</div>
          </motion.div>
          <motion.div variants={item_nya} className="article-content">
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
              {articles.map((article, index) => (
                <SwiperSlide key={index}>
                  <div className="blog-card">
                    <div className="blog-img">
                      <a href="#">
                        <img
                          src={article?.image}
                          alt="Blog image about Legal Project Manager"
                        />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="#">
                          <FaUserAlt /> By Jonson
                        </a>
                        <a href="#">
                          <FaCalendarAlt /> 22 Sep, 2025
                        </a>
                        <a href="#">
                          <FaCommentAlt /> 2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="#">{article?.title}</a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>

      <div className="shape-mockup-article-left jump-article">
        <img src={shape_lect} alt="jump" />
      </div>

      <div className="shape-mockup-article-right jump-article">
        <img src={shape_right} alt="jump" />
      </div>
    </ArticleSite>
  );
};

export default Article;
