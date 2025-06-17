import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FooterSite, Item, WaItemSite } from "./FooterElements";
import axios from "axios";
import logoEquiron from "../../assets/img/law_stack/logoEquiron.png";
import {
  FiFacebook,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  const [total, setTotal] = useState([]);
  const [fork, setFork] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios(
          "https://api.github.com/users/id-prawito/repos"
        );

        for (let i = 0; i < response.data.length; i++) {
          let totalVal = 0;
          let totalFork = 0;
          setTotal((totalVal += response.data[i].stargazers_count));
          setFork((totalFork += response.data[i].forks_count));
        }
      } catch {
        console.log("error");
      }
    };
    getList();
  }, []);

  const valueSelect = [
    [
      { name: "Merger and Acquisitions", value: "Merger and Acquisitions" },
      { name: "Banking and Finance", value: "Banking and Finance" },
    ],
    [
      { name: "Land and Property", value: "Land and Property" },
      { name: "Project Development", value: "Project Development" },
    ],
    [
      {
        name: "Technology, Media & Telecom",
        value: "Technology, Media & Telecom",
      },
      {
        name: "Corporate Compliance Services",
        value: "Corporate Compliance Services",
      },
    ],
    [
      {
        name: "Food & Beverage, Anti-Trust & Competition Law",
        value: "Food & Beverage, Anti-Trust & Competition Law",
      },
      { name: "Start-Up Company", value: "Start-Up Company" },
    ],
    [
      { name: "Criminal Law", value: "Criminal Law" },
      { name: "Civil Law", value: "Civil Law" },
    ],
    [{ name: "Coal & Nickel Mining", value: "Coal & Nickel Mining" }],
  ];

  return (
    <FooterSite>
      <div className="footer-container">
        <div className="footer-services">
          <div className="text">Our Services</div>

          <div className="test-flex">
            {valueSelect.map((group, index) => (
              <div className="service" key={index}>
                {group.map((item, subIndex) => (
                  <div className="text" key={subIndex}>
                    {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-company">
          <div className="footer-company-logo">
            <img src={logoEquiron} alt="law_logo" />
          </div>
          <div className="footer-company-desc">
            Equiron & Co. is a forward-thinking, full-service law firm dedicated
            to providing comprehensive legal solutions across various sectors.
          </div>
          <div className="footer-company-social">
            <div className="social-icon">
              <FaInstagram />
            </div>
            <div className="social-icon">
              <FiTwitter />
            </div>
            <div className="social-icon">
              <FiLinkedin />
            </div>
            <div className="social-icon">
              <FiPhone />
            </div>
            <div className="social-icon">
              <FiFacebook />
            </div>
          </div>
        </div>

        <div className="footer-info">
          <div className="footer-info-card">
            <div className="card-icon">
              <FiMapPin className="icon" />
            </div>
            <div className="card-info">
              <div className="text">Location</div>
              <div className="desc">
                Jalan Pengasinan No. 3 Jatimulya, Bekasi, Jawa Barat 17115,
                Indonesia
              </div>
            </div>
          </div>
          <div className="footer-info-card">
            <div className="card-icon">
              <FiPhone className="icon" />
            </div>
            <div className="card-info">
              <div className="text">Phone</div>
              <div className="desc">+62 8777-7000-919</div>
            </div>
          </div>
          <div className="footer-info-card">
            <div className="card-icon">
              <FaRegEnvelope className="icon" />
            </div>
            <div className="card-info">
              <div className="text">Email</div>
              <div className="desc">equironandco@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <WaItemContent />
    </FooterSite>
  );
};

export default Footer;

export const WaItemContent = () => {
  const waRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop >= 300 ||
        document.documentElement.scrollTop >= 300
      ) {
        waRef.current.classList.add("active");
      } else {
        waRef.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <WaItemSite>
      <div ref={waRef} className="wa_content">
        <a
          href="https://wa.me/6287777000919"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="wa_text">Hubungi Kami via Whatsapp</div>
          <div className="wa_icon"></div>
        </a>
      </div>
    </WaItemSite>
  );
};
