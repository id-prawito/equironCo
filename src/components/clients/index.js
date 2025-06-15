import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import jump from "../../assets/img/law_stack/process-1-shape.png";
import teams_bg from "../../assets/img/law_stack/team-1-bg.jpg";
import blog_bg from "../../assets/img/law_stack/blog_bg.jpg";
import shape_left from "../../assets/img/law_stack/blog-1-shape-left.png";
import shape_right from "../../assets/img/law_stack/blog-1-shape-right.png";
import goto_logo from "./../../assets/img/law_stack/goto.png";
import omron_logo from "./../../assets/img/law_stack/omron.png";
import gopay_logo from "./../../assets/img/law_stack/gopay.png";
import shopee_logo from "./../../assets/img/law_stack/shopee.png";
import bumn_logo from "./../../assets/img/law_stack/bumn.png";
import pertamina_logo from "./../../assets/img/law_stack/pertamina.png";
import mandiri_logo from "./../../assets/img/law_stack/mandiri.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCalendarAlt, FaCommentAlt, FaUserAlt } from "react-icons/fa";
import { ClientsSite } from "./ClientsElements";

const Clients = () => {
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
      image: mandiri_logo,
    },
    {
      name: "Samira Dsuza",
      title: "Attorney",
      image: omron_logo,
    },
    {
      name: "Samira Dsuza",
      title: "Attorney",
      image: gopay_logo,
    },
    {
      name: "Samira Dsuza",
      title: "Attorney",
      image: shopee_logo,
    },
    {
      name: "Samira Dsuza",
      title: "Attorney",
      image: bumn_logo,
    },
    {
      name: "Smith Miller",
      title: "Attorney",
      image: pertamina_logo,
    },
  ];

  return (
    <ClientsSite id="clients">
      <div className="clients-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="clients-content-container"
        >
          <motion.div variants={item_nya} className="clients-desc">
            <div className="clients-title">Clients</div>
            <div className="clients-subtitle">Our Featured Clients</div>
          </motion.div>
          <motion.div variants={item_nya} className="clients-content">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={4}
              spaceBetween={34}
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
                  <div className="client-card">
                    <div className="content-img">
                      <img
                        src={lawyer.image}
                        alt="Blog image about Legal Project Manager"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>

      <div className="shape-mockup-clients-left jump-clients">
        <img src={shape_left} alt="jump" srcSet="" />
      </div>

      <div className="shape-mockup-clients-right jump-clients">
        <img src={shape_right} alt="jump" srcSet="" />
      </div>
    </ClientsSite>
  );
};

export default Clients;
