import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import styled from "styled-components";
import { Header404 } from "../components/header";
import { devices } from "../assets/scss/_respondTo";
import { Link } from "react-router-dom";
import themeList from "../config/themeList";
import { background_og } from "../config/_equironImages";
import { Helmet } from "react-helmet-async";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 10px;

  .angka {
    font-size: 180px;
    font-weight: 600;

    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#6b7280" : "var(--colorWhite)"};

    ${devices.smartphone} {
      font-size: 100px;
    }

    ${devices.ipads} {
      font-size: 140px;
    }

    span {
      color: var(--colorMain);
    }
  }

  .text {
    font-size: 35px;
    font-weight: 500;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#6b7280" : "var(--colorWhite)"};

    ${devices.smartphone} {
      font-size: 20px;
    }

    ${devices.ipads} {
      font-size: 28px;
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
      border: 0.2px solid var(--colorMain);
      background-color: transparent;
      color: var(--colorMain);
      padding: 14px 32px;
      border-radius: 14px;
      max-height: 100%;
      cursor: pointer;
      font-size: 14px;
      gap: 10px;
      transition: 0.3s all ease;
      position: relative;
      overflow: hidden;

      ${devices.smartphone} {
        padding: 10px 15px;
        font-size: 12px;
      }

      ${devices.ipads} {
        padding: 10px 15px;
        font-size: 12px;
      }

      ${devices.tablet} {
        padding: 10px 15px;
        font-size: 12px;
      }

      &:hover {
        background-color: #b88649;
        transition: 0.3s all ease;
        transform: scale(1.05);
        color: #ffffff;
      }

      .item_content {
        position: relative;
        z-index: 1;
        display: flex;
        gap: 10px;
        font-size: 18px;
        font-weight: 500;
        padding: 8px;

        ${devices.smartphone} {
          padding: 8px 12px;
          font-size: 14px;
        }

        ${devices.ipads} {
          padding: 8px 12px;
          font-size: 14px;
        }

        ${devices.tablet} {
          padding: 8px 12px;
          font-size: 14px;
        }
      }

      .class-img-og {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.3;
      }
    }
  }
`;

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Home | Equiron and Co.</title>
        <meta
          name="description"
          content="Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya."
        />
        <meta
          name="keywords"
          content="hukum, bisnis, konsultasi, pengacara, notaris"
        />
        <meta name="author" content="Equiron and Co." />

        {/* Open Graph (untuk Facebook, LinkedIn, dll) */}
        <meta property="og:title" content="Beranda | Nama Perusahaan" />
        <meta
          property="og:description"
          content="Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya."
        />
        <meta
          property="og:image"
          content="https://equironandco.com/static/media/background-og.3fde3d841b7224d8add3.png"
        />
        <meta property="og:url" content="https://equironandco.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Equiron and Co." />
        <meta
          name="twitter:description"
          content="Selamat datang di website resmi Nama Perusahaan. Kami menyediakan layanan hukum, bisnis, dan konsultasi terpercaya."
        />
        <meta
          name="twitter:image"
          content="https://equironandco.com/static/media/background-og.3fde3d841b7224d8add3.png"
        />
      </Helmet>
      <Header404 />
      <NotFoundContainer>
        <div className="angka">
          4<span>0</span>4
        </div>
        <div className="text">Sorry, Page Not Found</div>
        <div className="button_hero">
          <div className="button_my-course">
            <div className="item_content">
              <FaRegThumbsUp />
              <Link to="/">Back to Home</Link>
            </div>
            <div className="class-img-og">
              <img src={background_og} alt="" srcset="" />
            </div>
          </div>
        </div>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
