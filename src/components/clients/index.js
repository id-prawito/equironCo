import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import shape_left from "../../assets/img/law_stack/blog-1-shape-left.png";
import shape_right from "../../assets/img/law_stack/blog-1-shape-right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ClientsSite } from "./ClientsElements";

import aimtopindo_logo from "./../../assets/img/law_stack/clients/aimtopindo_logo.png";
import chakra_giri_logo from "./../../assets/img/law_stack/clients/chakra-giri_logo.png";
import citra_harapan_jaya_permai_logo from "./../../assets/img/law_stack/clients/citra-harapan-jaya-permai_logo.png";
import clm_logo from "./../../assets/img/law_stack/clients/clm_logo.png";
import dana_paint_logo from "./../../assets/img/law_stack/clients/dana-paint_logo.png";
import pssi_logo from "./../../assets/img/law_stack/clients/pssi_logo.png";
import gaharu_pelayaran_logo from "./../../assets/img/law_stack/clients/gaharu-pelayaran_logo.png";
import lliadi_logo from "./../../assets/img/law_stack/clients/Illiadi_logo.png";
import indo_berkat_logo from "./../../assets/img/law_stack/clients/indo-berkat_logo.png";
import mitra_galperti_logo from "./../../assets/img/law_stack/clients/mitra galperti_logo.webp";
import pbe_logo from "./../../assets/img/law_stack/clients/pbe_logo.png";
import semesta_energi_service_logo from "./../../assets/img/law_stack/clients/semesta-energi-service_logo.png";
import tridaya_esa_pakarti_logo from "./../../assets/img/law_stack/clients/tridaya-esa-pakarti_logo.png";
import warna_warni_logo from "./../../assets/img/law_stack/clients/warna-warni_logo.png";

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
      name: "AIMTOPINDO",
      title: "Client",
      image: aimtopindo_logo,
    },
    {
      name: "Chakra Giri",
      title: "Client",
      image: chakra_giri_logo,
    },
    {
      name: "Citra Harapan Jaya Permai",
      title: "Client",
      image: citra_harapan_jaya_permai_logo,
    },
    {
      name: "CLM",
      title: "Client",
      image: clm_logo,
    },
    {
      name: "Dana Paint",
      title: "Client",
      image: dana_paint_logo,
    },
    {
      name: "PSSI",
      title: "Client",
      image: pssi_logo,
    },
    {
      name: "Gaharu Pelayaran",
      title: "Client",
      image: gaharu_pelayaran_logo,
    },
    {
      name: "Lliadi",
      title: "Client",
      image: lliadi_logo,
    },
    {
      name: "Indo Berkat",
      title: "Client",
      image: indo_berkat_logo,
    },
    {
      name: "Mitra Galperti",
      title: "Client",
      image: mitra_galperti_logo,
    },
    {
      name: "PBE",
      title: "Client",
      image: pbe_logo,
    },
    {
      name: "Semesta Energi Service",
      title: "Client",
      image: semesta_energi_service_logo,
    },
    {
      name: "Tridaya Esa Pakarti",
      title: "Client",
      image: tridaya_esa_pakarti_logo,
    },
    {
      name: "Warna Warni",
      title: "Client",
      image: warna_warni_logo,
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
                      <img src={lawyer.image} alt={lawyer.title} />
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
