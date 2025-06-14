import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import jump from "../../assets/img/law_stack/process-1-shape.png";
import teams_bg from "../../assets/img/law_stack/team-1-bg.jpg";
import heroOverlay from "./../../assets/img/law_stack/hero1-overlay.png";
import hero from "./../../assets/img/law_stack/team_1_8.jpg";
import { TeamsSite } from "./TeamsElements";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Teams = () => {
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
    <TeamsSite id="teams">
      <div
        className="th-hero-bg-teams"
        style={{
          backgroundImage: `url(${teams_bg})`,
        }}
      ></div>

      <div className="teams_container">
        <div className="team-content-container">
          <div className="teams_desc">
            <div className="subtitle">Our Attorneys</div>
            <div className="text-content">
              Dedicated Lawyers, Proven Results
            </div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            ref={ref}
            className="teams_content"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={5}
              spaceBetween={24}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {lawyers.map((lawyer, index) => (
                <SwiperSlide key={index}>
                  <div className="team_card">
                    <div className="team_img">
                      <img src={hero} alt="hero" className="img-hero" />
                    </div>

                    <div className="team-content">
                      <div className="box-title">Nafirdo</div>
                      <div className="desc">Chief Justice</div>
                    </div>

                    <div className="team-content-hover-wrap">
                      <div className="team-content-hover">
                        <div className="team-img">
                          <img src={hero} alt="Team" />
                        </div>
                        <div className="hover-inner">
                          <h3 className="box-title">
                            <a href="team-details.html">Samira Dsuza</a>
                          </h3>
                          <span className="team-desig">Attorney</span>
                          <div className="team-social">
                            <div className="th-social">
                              <a target="_blank" href="https://facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      <div className="shape-mockup-teams jump_teams">
        <img src={jump} alt="jump" srcSet="" />
      </div>
    </TeamsSite>
  );
};

export default Teams;
