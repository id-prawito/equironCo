import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Navigation, Pagination } from "swiper/modules";
import { useAnimation, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { TeamsSite } from "./TeamsElements";
import teams_jump_left from "../../assets/img/law_stack/process-1-shape.png";
import team_member_1 from "./../../assets/img/law_stack/team_member_1.jpg";
import teams_bg from "../../assets/img/law_stack/team-1-bg.jpg";
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
      image: team_member_1,
    },
    {
      name: "Samira Dsuza",
      title: "Attorney",
      image: team_member_1,
    },
    {
      name: "Michel Phelps",
      title: "Chief Justice",
      image: team_member_1,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: team_member_1,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: team_member_1,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: team_member_1,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: team_member_1,
    },
    {
      name: "Sarah Rahma",
      title: "Attorney",
      image: team_member_1,
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

      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        ref={ref}
        className="teams-container"
      >
        <div className="team-content-container">
          <motion.div variants={item_nya} className="teams-desc">
            <div className="subtitle">Our Teams</div>
            <div className="text-content">
              Dedicated Lawyers, Proven Results
            </div>
          </motion.div>
          <motion.div variants={item_nya} className="teams-content">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={5}
              spaceBetween={24}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                800: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
                1290: { slidesPerView: 4 },
              }}
            >
              {lawyers.map((lawyer, index) => (
                <SwiperSlide key={index}>
                  <div className="team-card">
                    <div className="team-img">
                      <img
                        src={team_member_1}
                        alt="team_member"
                        className="img-hero"
                      />
                    </div>

                    <div className="team-content">
                      <div className="box-title">{lawyer?.name}</div>
                      <div className="desc">Chief Justice</div>
                    </div>

                    <div className="team-content-hover-wrap">
                      <div className="team-content-hover">
                        <div className="team-img">
                          <img src={team_member_1} alt="Team" />
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
      </motion.div>

      <div className="shape-mockup-teams jump_teams">
        <img src={teams_jump_left} alt="teams_jump_left" />
      </div>
    </TeamsSite>
  );
};

export default Teams;
