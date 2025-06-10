import React, { useEffect, useState } from "react";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FooterSite, Item } from "./FooterElements";
import { MEDIA_SOSIAL } from "../../config/Data";
import axios from "axios";
import law_logo from "../../assets/img/law_stack/logo_law.svg";
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
          // {
          //     headers: {
          //         Authorization: `Bearer ${process.env.REACT_APP_API}`,
          //     },
          // }
        );

        for (let i = 0; i < response.data.length; i++) {
          let totalVal = 0;
          let totalFork = 0;
          setTotal((totalVal += response.data[i].stargazers_count));
          setFork((totalFork += response.data[i].forks_count));
        }
        // setRepo(response.data);
      } catch {
        console.log("error");
      }
    };
    getList();
  }, []);

  return (
    <FooterSite>
      <div className="footer_container">
        <div className="footer_services">
          <div className="text">Our Services</div>
          <div className="service">
            <div className="text">Real Estate Law</div>
            <div className="text">Personal Injury</div>
          </div>
          <div className="service">
            <div className="text">Corporate Law</div>
            <div className="text">Criminal Law</div>
          </div>
          <div className="service">
            <div className="text">Health Care</div>
            <div className="text">Family Law</div>
          </div>
        </div>
        <div className="footer_company">
          <div className="footer_company_logo">
            <img src={law_logo} alt="law_logo" />
          </div>
          <div className="footer_company_desc">
            Ensaf is a Saudi Arabian law firm founded in 1982. They offer a wide
            range of legal services, including corporate law, commercial law.
          </div>
          <div className="footer_company_social">
            <div className="social_icon">
              <FaInstagram />
            </div>
            <div className="social_icon">
              <FiTwitter />
            </div>
            <div className="social_icon">
              <FiLinkedin />
            </div>
            <div className="social_icon">
              <FiPhone />
            </div>
            <div className="social_icon">
              <FiFacebook />
            </div>
          </div>
        </div>

        <div className="footer_info">
          <div className="footer_info_card">
            <div className="card_icon">
              <FiMapPin className="icon" />
            </div>
            <div className="card_info">
              <div className="text">Location</div>
              <div className="desc">
                Kantor Pusat : Jl. Raya Pati – Tayu Km. 19. Waturoyo, Kec.
                Margoyoso, Kabupaten Pati
              </div>
            </div>
          </div>
          <div className="footer_info_card">
            <div className="card_icon">
              <FiPhone className="icon" />
            </div>
            <div className="card_info">
              <div className="text">Phone</div>
              <div className="desc">+ 152-6485-5467</div>
            </div>
          </div>
          <div className="footer_info_card">
            <div className="card_icon">
              <FaRegEnvelope className="icon" />
            </div>
            <div className="card_info">
              <div className="text">Email</div>
              <div className="desc">info@ensaf.com</div>
            </div>
          </div>
        </div>
      </div>
    </FooterSite>
  );
};

export default Footer;
