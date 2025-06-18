import React, { useEffect, useRef } from "react";
import icon_gavel from "../../assets/img/law_stack/icon_gavel.svg";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { ServicesSite } from "./ServicesElements";

const Services = () => {
  const myRef = useRef(null);

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

  const services = 0;

  const servicesData = [
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Merger and Acquisitions",
      cardDesc:
        "Strategic legal guidance for seamless mergers, acquisitions, and business transitions.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Banking and Finance",
      cardDesc:
        "Reliable counsel on financial regulations, lending structures, and transactional compliance.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Land and Property",
      cardDesc:
        "Comprehensive support on real estate transactions, land use, and asset protection.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Project Development",
      cardDesc:
        "Legal support from planning to execution, ensuring regulatory and commercial alignment.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Technology, Media & Telecom",
      cardDesc:
        "Insightful legal solutions for innovation-driven sectors in a fast-evolving digital world.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Corporate Compliance Services",
      cardDesc:
        "Helping businesses meet governance standards with clarity and confidence.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Food & Beverage, Anti-Trust & Competition Law",
      cardDesc:
        "Navigating industry regulations while protecting your competitive edge.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Start-Up Company",
      cardDesc:
        "Tailored legal frameworks to support sustainable growth from early stages.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Criminal Law",
      cardDesc:
        "Trusted representation and defense with integrity, discretion, and expertise.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Civil Law",
      cardDesc:
        "Resolving personal and commercial disputes with fairness and efficiency.",
    },
    {
      icon: icon_gavel,
      cornerIcon: icon_gavel,
      cardTitle: "Coal & Nickel Mining",
      cardDesc:
        "Legal insight into mining operations, licensing, and environmental compliance.",
    },
  ];

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
              At Equiron & Co., we provide forward-thinking and comprehensive
              legal services tailored to meet the demands of today’s dynamic
              legal landscape. Guided by our core values—Trust, Commitment, and
              Accessibility—we deliver clear, strategic legal counsel across a
              broad spectrum of practice areas. Whether serving individuals,
              corporations, or institutions, our experienced team takes a
              client-first approach, ensuring each solution is crafted with
              precision, integrity, and a deep understanding of your unique
              needs. With Equiron & Co. by your side, you can face legal
              complexities with clarity and confidence.
            </h1>
          </motion.div>
          <motion.div variants={item_nya} className="content-service">
            {servicesData?.map((service, i) => (
              <div key={i} className="custom-card">
                <div className="icon-wrapper">
                  <img src={service.icon} alt="icon" />
                </div>
                <div className="corner-icon">
                  <img src={service.cornerIcon} alt="corner icon" />
                </div>
                <h3 className="card-title">{service.cardTitle}</h3>
                <p className="card-desc">{service.cardDesc}</p>
                {services === 1 && (
                  <a href="/" className="read-more">
                    Read More <span className="arrow">→</span>
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </ServicesSite>
  );
};

export default Services;
