import styled from "styled-components";
import themeList from "../../config/themeList";
import "../../assets/scss/_index.scss";
import { devices } from "../../assets/scss/_respondTo";

export const HeroSite = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* min-height: 80vh; */
  margin: 0px;
  max-width: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;

  .container_new {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(
      0,
      0,
      0,
      0.4
    ); /* atau warna lain seperti rgba(80,0,130,0.5) */
    z-index: 1;
  }

  ${devices.smartphone} {
    padding: 40px 0px;
    min-height: 0px;
  }

  .hero_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    color: var(--colorMain);
    font-weight: 500;
    font-size: 14px;
  }

  span {
    font-size: 14px;
  }

  p {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--dark-text-white)"
        : "var(--dark-text-white)"};
    max-width: 540px;
    line-height: 1.8;

    ${devices.smartphone} {
      font-size: 14px;
    }
  }

  .hero_container {
    padding: 0 0px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    max-width: 1250px;

    @media only screen and (min-width: 1024px) and (max-width: 1280px) {
      max-width: 950px;
    }

    ${devices.smartphone} {
      padding: 0px 25px;
    }

    ${devices.ipads} {
      padding: 0px 50px;
    }
  }

  .big_heading {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--dark-text-white)"
        : "var(--dark-text-white)"};
    font-weight: 600;
    font-size: 60px;
    margin: 0px;

    ${devices.smartphone} {
      font-size: 38px;
    }

    ${devices.ipads} {
      font-size: 38px;
    }
  }

  .big_heading_one {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#fff" : "#fff"};
    font-weight: 600;
    font-size: 60px;
    margin: 0px;

    ${devices.smartphone} {
      font-size: 40px;
    }

    ${devices.ipads} {
      font-size: 40px;
    }
  }

  .button_hero {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 20px;

    .button_my-course {
      display: flex;
      align-items: center;
      background-color: var(--colorMain);
      padding: 14px 20px;
      border-radius: 6px;
      max-height: 100%;
      cursor: pointer;
      font-size: 14px;
      color: #ffffff;
      gap: 10px;
      transition: 0.3s all ease;

      ${devices.smartphone} {
        font-size: 12px;
      }

      &:hover {
        background-color: #b88649;
        transition: 0.3s all ease;
        transform: scale(1.05);
      }
    }
  }

  .images_hero {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 100%;

    @media only screen and (min-width: 1024px) and (max-width: 1280px) {
      width: 100%;
    }

    .image-border-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: inline-block;
      border-radius: 0 70px 0 70px;
      overflow: visible; // ← penting agar pseudo-element tidak terpotong
      border: 2px solid rgb(255, 255, 255); // ← warna emas elegan
      transition: transform 0.5s ease-in-out;

      &::after {
        content: "";
        position: absolute;
        top: -15px;
        left: -15px;
        width: 100%;
        height: 100%;
        border: 2px solid #caa768;
        border-radius: 0 70px 0 70px;
        z-index: 1;
        transition: border-color 0.5s ease-in-out, top 0.5s ease-in-out,
          left 0.5s ease-in-out;
      }

      &:hover::after {
        border-color: #e6c88d;
        top: -20px;
        left: -20px;
      }

      &:hover {
        transform: scale(1.02); // lebih lembut
      }
    }

    .main-image {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 0 70px 0 70px;
      position: relative;
      z-index: 2;
      background-color: white; // tambahan opsional jika gambar transparan
      transition: opacity 0.5s ease-in-out;
    }
  }

  .carousel-container {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 20px 0;
    scroll-behavior: smooth;
  }

  .carousel-item {
    flex: 0 0 auto;
    width: 250px;
    scroll-snap-align: start;
  }

  .carousel-img {
    width: 100%;
    border-radius: 0 70px 0 70px;
  }

  .th-hero-bg {
    inset: 0;
    z-index: -4;

    @media only screen and (min-width: 1024px) and (max-width: 1280px) {
      height: 670px;
    }
  }
`;
