import styled from "styled-components";
import { devices } from "../../assets/scss/_respondTo";

export const ClientsSite = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: #f5f5f5;

  ${devices.ipads} {
    padding: 160px 40px;
  }

  .clients-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    padding: 0 1rem;

    ${devices.ipads} {
      padding: 160px 40px;
      height: max-content;
    }

    ${devices.tablet} {
      padding: 80px 100px;
    }

    ${devices.laptop} {
      max-width: 950px;
    }
  }

  .clients-content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    max-width: 1350px;

    ${devices.ipads} {
      justify-content: space-between;
    }
  }

  .clients-desc {
    width: 100%;
    padding: 0px 20px;
    text-align: center;

    ${devices.ipads} {
      padding: 0px 0px;
    }

    ${devices.tablet} {
      padding: 0px 0px;
    }

    .clients-title {
      color: #b68c5a;
      margin-bottom: 25px;
      position: relative;
      padding-top: 0;
      letter-spacing: normal;
      font-size: 20px;
      text-transform: capitalize;
      display: block;
    }

    .clients-subtitle {
      color: #011c1a;
      text-transform: none;
      font-weight: 700;
      line-height: 1.4;
      margin: 0 0 24px 0;
      font-size: 54px;
      line-height: 1.185;

      ${devices.ipads} {
        line-height: 1.3;
        font-size: 34px;
      }
    }
  }

  .clients-content {
    width: 100%;
    padding: 0px 20px;

    ${devices.ipads} {
      padding: 0px;
    }
  }

  .client-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    border-radius: 24px;
    overflow: hidden;

    .content-img {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .shape-mockup-clients-left {
    position: absolute;
    left: -50px;
    top: 0;
    z-index: 1;
    pointer-events: none;
  }

  .shape-mockup-clients-right {
    position: absolute;
    right: -50px;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }

  .jump-clients {
    animation: jumpClients 7s linear infinite;
  }

  @keyframes jumpClients {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 16px;
    font-weight: bold;
  }

  .swiper-pagination {
    display: none !important;
  }

  .swiper-slide {
    max-width: 100%; // ini bisa batasi total
  }
`;
