import styled from "styled-components";
import themeList from "../../config/themeList";
import "../../assets/scss/_index.scss";
import { devices } from "../../assets/scss/_respondTo";

export const HeroSite = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 80vh;
  padding: 0px;
  max-width: 1250px;

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
        ? "var(--light-text-black)"
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
        ? "var(--light-text-black)"
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
      theme === themeList.light ? "#6b7280" : "#8892b0"};
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
        background-color: #7227f3;
        transition: 0.3s all ease;
        transform: scale(1.05);
      }
    }
  }

  .images_hero {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .image-border-container {
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
`;
