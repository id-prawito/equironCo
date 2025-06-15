import styled from "styled-components";
import themeList from "../../config/themeList";
import { devices } from "../../assets/scss/_respondTo";

export const ProcessSite = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: auto;
  max-width: 1650px;
  position: relative;

  ${devices.laptop} {
    max-width: 100%;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    max-width: 950px;
  }

  .shape-mockup-process-right {
    position: absolute;
    bottom: -50px; // atur sesuai kebutuhan
    right: 0;
    z-index: 1;
    pointer-events: none;
  }

  .jump-process {
    animation: jumpProcces 7s linear infinite;
  }

  @keyframes jumpProcces {
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

  .process-container {
    width: 100%;
    padding: 80px 150px;
    position: relative;
    z-index: 2;

    @media only screen and (min-width: 1024px) and (max-width: 1280px) {
      padding: 80px 0px;
    }

    ${devices.smartphone} {
      padding: 80px 25px;
    }

    ${devices.ipads} {
      padding: 80px 50px;
    }

    ${devices.tablet} {
      padding: 80px 100px;
    }

    ${devices.tablet} {
      padding: 80px 100px;
    }
  }

  .process-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;

    &-images {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #fff;
      width: 120%;
      transform: translateX(-20%);
      border-radius: 24px;
      overflow: hidden;
      transition: transform 0.3s ease-in-out;

      @media only screen and (min-width: 1024px) and (max-width: 1280px) {
        height: 100%;
        transform: translateX(-28%);
        width: 132%;
      }

      &:hover {
        animation: shaked 0.5s ease-in-out;

        @media only screen and (min-width: 1024px) and (max-width: 1280px) {
          animation: shaked-lg 0.5s ease-in-out;
        }
      }

      img {
        @media only screen and (min-width: 1024px) and (max-width: 1280px) {
          height: 100%;
          width: 140%;
        }
      }

      @keyframes shaked {
        0% {
          transform: translateX(-20%);
        }
        25% {
          transform: translateX(calc(-20% - 5px));
        }
        50% {
          transform: translateX(calc(-20% + 5px));
        }
        75% {
          transform: translateX(calc(-20% - 5px));
        }
        100% {
          transform: translateX(-20%);
        }
      }

      @keyframes shaked-lg {
        0% {
          transform: translateX(-28%);
        }
        25% {
          transform: translateX(calc(-28% - 5px));
        }
        50% {
          transform: translateX(calc(-28% + 5px));
        }
        75% {
          transform: translateX(calc(-28% - 5px));
        }
        100% {
          transform: translateX(-28%);
        }
      }
    }

    &-flow {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      width: 100%;
      color: #000;

      .text {
        color: #b68c5a;
        letter-spacing: normal;
        font-size: 20px;
        text-transform: capitalize;
        font-weight: 500;
        display: block;
      }

      .title {
        color: #011c1a;
        font-size: 54px;
        line-height: 1.085;
        font-weight: 700;

        @media only screen and (min-width: 1024px) and (max-width: 1280px) {
          font-size: 50px;
        }
      }

      .process {
        display: flex;
        margin-bottom: 20px;
        flex-direction: column;

        &-item {
          display: flex;
          gap: 25px;
          margin-bottom: 12px;
          position: relative;

          ::before {
            content: "";
            position: absolute;
            left: 27px;
            width: 1px;
            height: 104%;
            border-right: 2px dashed #b68c5a;
            top: 13px;
            z-index: -1;
          }

          :last-child::before {
            display: none;
          }

          &-icon {
            height: 60px;
            width: 60px;
            line-height: 56px;
            text-align: center;
            background: #b68c5a;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon-class {
              color: #fff;
              height: 24px;
              width: 24px;
              transition: transform 0.5s ease;

              :hover {
                transform: rotateY(180deg);
              }
            }
          }

          &-content {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 80%;

            .box-title {
              font-size: 30px;
              margin-bottom: 7px;
              font-weight: 600;
            }

            .desc {
              margin: 0 0 18px 0;
              color: #868686;
              line-height: 1.75;
            }
          }
        }
      }
    }
  }
`;
