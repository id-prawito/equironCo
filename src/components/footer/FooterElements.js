import styled from "styled-components";
import { devices } from "../../assets/scss/_respondTo";
import themeList from "../../config/themeList";

export const FooterSite = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 70px;
  padding: 15px;
  height: auto;
  background-color: #021c1a;

  .footer_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; // 2 kolom sama rata
    width: 100%; // full width
    max-width: 1350px; // batas maksimum lebar
    margin: 0 auto; // tengah secara horizontal
    align-items: center;
    gap: 40px; // jarak antar kolom, opsional
    padding: 20px;

    @media only screen and (min-width: 1024px) and (max-width: 1280px) {
      max-width: 950px;
      padding: 20px 0px;
    }

    .footer_services {
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: 100%;
      justify-content: flex-start;

      .text {
        font-size: 16px;
        font-weight: bold;
        text-align: left;
      }

      .service {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        .text {
          font-size: 14px;
          font-weight: 500;
          color: rgb(145, 145, 145);
          position: relative;
          text-align: left;

          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 1px;
            background-color: rgb(145, 145, 145);
            margin: 0 20px;
          }

          &:last-child::after {
            display: none;
          }
        }
      }
    }

    .footer_company {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      &_logo {
        img {
          width: 100px;
          height: 100px;
        }
      }

      &_desc {
        font-size: 13px;
        width: 100%;
        line-height: 2;
        color: rgb(145, 145, 145);
      }

      &_social {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;

        .social_icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background-color: #1a3331;
          color: #a8b2d1;
          cursor: pointer;

          &:hover {
            background-color: rgb(43, 82, 79);
          }
        }
      }
    }

    .footer_info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      justify-content: flex-start;
      height: 100%;

      &_card {
        display: flex;
        border-radius: 8px;
        align-items: flex-start;
        flex-direction: row;
        gap: 20px;
        width: 100%;
        height: 70%;

        .card_icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          border-radius: 12px;
          background-color: #1a3331;
          color: rgb(150, 111, 4);
          cursor: pointer;
          font-size: 24px;
          transition: transform 0.4s ease, background-color 0.3s ease;
          width: 12%;

          @media only screen and (min-width: 1024px) and (max-width: 1280px) {
            width: 50px;
          }

          &:hover {
            background-color: rgb(43, 82, 79);
          }

          .icon {
            font-size: 24px;
            transition: transform 0.5s ease;

            :hover {
              transform: rotateY(180deg);
            }
          }
        }

        .card_info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          width: 80%;
          text-align: left;

          .text {
            font-size: 16px;
            font-weight: bold;
            color: rgb(233, 234, 238);
          }

          .desc {
            font-size: 12px;
            color: #a8b2d1;
            line-height: 1.6;
          }
        }
      }
    }
  }

  .footer_media-social {
    display: none;

    ${devices.smartphone} {
      display: initial;
    }

    ${devices.ipads} {
      display: initial;
    }
  }

  .footer_item {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--light-text-grey)"
        : "var(--dark-text-white)"};
    transition: 0.1s all ease;
    letter-spacing: 0.4px;
    font-size: 12px;
    line-height: 1.4;

    &:hover {
      color: #6c62e2;
      transition: 0.1s all ease;
    }
  }

  .github_stats {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    span {
      display: inline-flex;
      margin: 0px 7px;
    }

    svg {
      display: inline-block;
      margin-right: 5px;
      height: 14px;
      width: 14px;
    }
  }
`;

export const Item = styled.ul`
  color: ${({ theme: { theme } }) =>
    theme === themeList.light
      ? "var(--light-text-grey)"
      : "var(--dark-text-white)"};
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 20px;
  padding: 0px;
  margin: 0px;

  .item_li {
    transition: 0.3s all ease;
    padding: 10px;

    &:hover {
      transform: translateY(-5px);
      transition: 0.3s all ease;
      color: #b88649;
    }
  }
`;
