import styled from "styled-components";
import { devices } from "../../assets/scss/_respondTo";
import themeList from "../../config/themeList";

export const AboutSite = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150vh;
  max-width: 1250px;
  padding: 0;
  position: relative;

  ${devices.smartphone} {
    padding: 70px 0px;
    min-height: 0px;
  }

  ${devices.ipads} {
    min-height: 0px;
  }

  ${devices.laptop} {
    padding: 50px 0px;
    max-width: 100%;
  }

  ${devices.desktops} {
    padding: 140px 0px;
    min-height: 0px;
  }

  .shape-mockup {
    &-about {
      position: absolute;
      top: 50px;
      left: -50px;
      z-index: 1;
      pointer-events: none;
    }

    &-about-right {
      position: absolute;
      bottom: 50px;
      right: -50px;
      z-index: 1;
      pointer-events: none;
    }
  }

  .jump_about {
    animation: jumpAbout 7s linear infinite;
  }

  @keyframes jumpAbout {
    0% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .pembungkus_about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    position: relative; // supaya absolute-nya mengacu ke sini
    z-index: 2;

    ${devices.smartphone} {
      padding: 20px 25px;
    }

    ${devices.ipads} {
      padding: 40px 50px;
    }

    ${devices.tablet} {
      padding: 40px 100px;
    }

    ${devices.laptop} {
      padding: 40px 100px;
    }
  }

  .about_content {
    display: flex;
    gap: 20px;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.tablet} {
      flex-direction: column;
    }

    h1 {
      color: var(--colorMain);
      font-weight: 500;
      font-size: 14px;
    }
  }

  .content_about {
    display: flex;
    flex-direction: column;
    flex: 0 0 40%;
    gap: 20px;
    margin-right: 20px;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    ${devices.tablet} {
      width: 100%;
    }

    ${devices.laptop} {
      width: 100%;
    }

    p {
      line-height: 1.8;
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#6b7280" : "#bcbcbc"};
    }
  }

  .big_heading_about {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--light-text-black)"
        : "var(--dark-text-white)"};
    font-weight: 600;
    font-size: 40px;
    margin: 0px;

    ${devices.smartphone} {
      font-size: 30px;
    }

    span {
      color: var(--colorMain);
      font-size: 40px;

      ${devices.smartphone} {
        font-size: 30px;
      }
    }
  }

  .text_skill {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 15px;
    color: rgb(67, 69, 75);
    gap: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 14px;

      svg {
        color: var(--colorMain);
        font-size: 20px;
      }

      span {
        font-weight: 600;
        font-size: 15px;
        color: rgb(67, 69, 75);
      }
    }
  }

  .card_item {
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--darkCardComponent)"
        : "var(--lightCardComponent)"};
    border-radius: 0.75rem 0.75rem 0 0.75rem;
    max-width: 215px;
    cursor: pointer;
    padding: 20px;
    height: 100%;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      transform: scale(1.08);
    }
  }

  .item_logo {
    border-radius: 0.75rem 0.75rem 0 0.75rem;
    display: inline-block;
    padding: 10px;

    img {
      width: 32px;
    }
  }

  .content_card_new {
    display: grid;
    flex: 0 0 60%;
    gap: 25px;
    grid-template-columns: 1fr 1fr; // Bagi rata 50% - 50%
    grid-template-areas: "cardArea cardArea2";

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    ${devices.tablet} {
      justify-content: center;
      width: 100%;
    }

    ${devices.laptop} {
      width: 100%;
    }

    @media only screen and (min-width: 580px) and (max-width: 768px) {
      justify-content: center;
    }

    .cardArea {
      grid-area: cardArea;
      display: flex;
      flex-direction: column;
      height: 100%;

      .image_wrapper {
        position: relative;
        width: 100%;
        height: 600px;
        border-radius: 80px 0 80px 80px;
        overflow: visible;
      }

      .image_wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 80px 0 80px 80px;
        display: block;
        position: relative;
        z-index: 1;

        &:hover {
          animation: shake 0.5s ease-in-out;
        }
      }

      .image_border {
        position: absolute;
        top: -25px; // geser ke atas
        left: -25px; // geser ke kiri
        width: 100%; // supaya lebih besar dari gambar
        height: 100%;
        border-radius: 80px 0 80px 80px;
        border: 1px solid #003333;
        z-index: -1;
        box-sizing: border-box;
      }

      @keyframes shake {
        0% {
          transform: translate(0);
        }
        25% {
          transform: translate(-5px, 0);
        }
        50% {
          transform: translate(5px, 0);
        }
        75% {
          transform: translate(-5px, 0);
        }
        100% {
          transform: translate(0);
        }
      }
    }

    .cardArea2 {
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 20px;

      .images_card_area {
        height: 100%;
        position: relative;

        &.one {
          border-radius: 80px 80px 80px 0;
        }

        &.two {
          border-radius: 0 80px 80px 80px;
        }

        .images_card2 {
          position: absolute;
          height: 100%;
          width: 100%;
          border-radius: inherit;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          &:hover {
            animation: shake 0.5s ease-in-out;
          }
        }
        @keyframes shake {
          0% {
            transform: translate(0);
          }
          25% {
            transform: translate(-5px, 0);
          }
          50% {
            transform: translate(5px, 0);
          }
          75% {
            transform: translate(-5px, 0);
          }
          100% {
            transform: translate(0);
          }
        }
      }
    }
  }

  .content_card {
    display: grid;
    grid-template-areas: "myArea myArea2";
    width: 50%;
    gap: 25px;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    ${devices.tablet} {
      justify-content: center;
      width: 100%;
    }

    ${devices.laptop} {
      width: 100%;
    }

    @media only screen and (min-width: 580px) and (max-width: 768px) {
      justify-content: center;
    }

    .myArea2 {
      grid-area: myArea2;
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      margin-top: 20px;
      height: 100%;
      gap: 25px;

      .item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;
        width: 100%;

        h2 {
          font-weight: 600;
          font-size: 18px;
        }

        p {
          font-size: 12px;
          width: 100%;
        }
      }
    }

    .myArea {
      grid-area: myArea;
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 25px;

      .item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;
        width: 100%;

        h2 {
          font-weight: 600;
          font-size: 18px;
        }

        p {
          font-size: 12px;
          width: 100%;
        }
      }
    }
  }

  .about_count {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 40px;
    background-color: #003333;
    border: 1px solid #003333;
  }

  .stats-container {
    display: flex;
    align-items: center;
    background-color: #b88649;
    opacity: 90%;
    color: white;
    border-radius: 32px;
    padding: 80px;
    font-family: sans-serif;
    gap: 30px;
    width: 100%;
  }

  .stat-item {
    text-align: center;
    flex: 1;
    min-width: 150px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;

    .content {
      display: flex;
      text-align: left;
      flex-direction: column;
      gap: 10px;
    }

    .icon {
      font-size: 70px;
      display: flex;
      align-items: center;
    }

    h3 {
      font-size: 28px;
      margin: 0;
    }

    p {
      font-size: 16px;
      margin: 0;
    }
  }

  .divider {
    width: 1px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .about_tech {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 40px;

    .tech_heading {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light
          ? "var(--light-text-black)"
          : "var(--dark-text-white)"};
      font-weight: 600;
      font-size: 20px;
    }

    .tech_content {
      display: grid;
      grid-template-columns: repeat(5, auto);
      width: 1000px;
      row-gap: 20px;
      gap: 15px;

      ${devices.smartphone} {
        grid-template-columns: repeat(2, auto);
        width: 100%;
      }

      ${devices.ipads} {
        grid-template-columns: repeat(2, auto);
        width: 100%;
      }

      @media only screen and (min-width: 600px) and (max-width: 768px) {
        grid-template-columns: repeat(3, auto);
        width: 100%;
      }

      ${devices.tablet} {
        grid-template-columns: repeat(4, auto);
        width: 100%;
      }

      ${devices.laptop} {
        grid-template-columns: repeat(5, auto);
        width: 100%;
      }

      .pembungkus {
        cursor: pointer;
        height: 120px;
        width: 100%;
        transition: 350ms ease-in-out;

        &:hover {
          .card_background {
            transition: 350ms ease-in-out;
            transform: translateY(2px);
          }

          .card_contentnya img {
            transform: rotate(4deg) scale(1.4);
            transition: 350ms ease-in-out;
          }
        }
      }

      .card_background {
        background: linear-gradient(
          109.09deg,
          ${({ theme: { theme } }) =>
              theme === themeList.light ? "#70F7F1" : "#979797"}
            0%,
          ${({ theme: { theme } }) =>
              theme === themeList.light
                ? "#47BDFF"
                : "var(--darkCardComponent)"}
            100%
        );
        height: calc(100% + 5px);
        margin-bottom: -125px;
        border-radius: 12px;
        position: relative;
        z-index: -2;
        width: 100%;
        transition: 350ms ease-in-out;
      }

      .card_contentnya {
        background: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--darkCardComponent)"
            : "var(--lightCardComponent)"};
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        position: relative;
        height: 120px;
        padding: 20px;
        width: 100%;
        z-index: -1;
        gap: 10px;
        transition: 350ms ease-in-out;

        img {
          max-height: 50px;
          max-width: 50px;
          transition: 350ms ease-in-out;
        }

        .text_tech {
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;
