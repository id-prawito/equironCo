import styled from "styled-components";

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

  .th-hero-bg-teams {
    position: relative;
    width: 100%;
    height: 800px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;

    .hero_overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
      pointer-events: none;
      mix-blend-mode: overlay;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: #f5f5f5;
      opacity: 0.8;
      z-index: 2;
      pointer-events: none;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1280px) {
      height: 670px;
    }
  }

  .teams_container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    padding: 0 1rem;
  }

  .teams_content {
    width: 100%;
    padding: 0px 20px;
  }

  .shape-mockup-teams {
    position: absolute;
    left: -50px;
    top: 0;
    z-index: 1;
    pointer-events: none;
  }

  .shape-mockup-teams-right {
    position: absolute;
    right: -50px;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }

  .jump_teams {
    animation: jumpAbout 7s linear infinite;
  }

  .lawyer_card {
    background-color: #21312c;
    border-radius: 1rem;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    height: 100%;
    color: white;
  }

  .lawyer_img {
    border-radius: 1rem;
    width: 100%;
    height: 16rem;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .lawyer_name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .lawyer_title {
    font-size: 0.875rem;
    color: #d1d5db;
  }

  @keyframes jumpAbout {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  .team_card {
    position: relative;
    overflow: hidden;
    background-color: #314e52;
    border-radius: 24px;
    transition: 0.4s ease;
    border-bottom: 6px solid #b68c5a;

    .team_img {
      overflow: hidden;
      position: relative;
      border-radius: 24px 24px 34px 34px;
      height: 230px;
      transition: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;

      .img-hero {
        border-radius: 24px 24px 34px 34px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: 0.4s;
        height: 135%;
        position: absolute;
        top: 0%;
      }
    }

    .team-content {
      padding: 16px 16px 16px;
      text-align: center;
      background: #314e52;
      border-radius: 0 0 24px 24px;
      transition: 0.4s;
      z-index: 1;
      position: relative;

      .box-title {
        margin-bottom: 2px;
        font-size: 20px;
        color: #fff;
        font-weight: 600;
        transition: 0.4s;
      }

      .desc {
        font-size: 14px;
        color: #ccc;
      }
    }

    .team-content-hover-wrap {
      position: absolute;
      inset: 0;
      visibility: hidden;
      opacity: 0;
      transition: 0.4s ease-in-out;
      z-index: 10;

      .team-content-hover {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: #b68c5a;
          opacity: 0.8;
          z-index: 1;
          border-radius: 24px;
          transition: 0.4s;
        }

        .team-img {
          height: 100%;
          img {
            border-radius: 24px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            transition: 0.4s;
          }
        }

        .hover-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          color: white;
          width: 100%;
          padding: 0 1rem;

          .box-title {
            font-size: 20px;
            color: #fff;
            font-weight: 600;
            margin-bottom: 4px;
          }

          .team-desig {
            font-size: 14px;
            color: #fff;
            margin-bottom: 12px;
            display: block;
          }

          .team-social {
            display: flex;
            justify-content: center;
            gap: 16px;

            .th-social a {
              color: #fff;
              font-size: 16px;
              transition: color 0.3s;
            }

            .th-social a:hover {
              color: #314e52;
            }
          }
        }
      }
    }

    &:hover {
      .team-content-hover-wrap {
        visibility: visible;
        opacity: 1;
      }
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

  .team-content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    max-width: 1350px;
  }

  .teams_desc {
    width: 100%;
    padding: 0px 20px;
    text-align: center;

    .subtitle {
      color: #b68c5a;
      margin-bottom: 25px;
      position: relative;
      margin-top: -0.4em;
      padding-top: 0;
      letter-spacing: normal;
      font-size: 20px;
      text-transform: capitalize;

      display: block;
    }

    .text-content {
      margin-top: -0.2em;
      text-transform: capitalize;
      font-size: 42px;
      margin-bottom: 20px;
      font-weight: 700;
    }

    .sec-title {
      color: #011c1a;
      text-transform: none;
      font-weight: 700;
      line-height: 1.4;
      margin: 0 0 24px 0;
      font-size: 54px;
      line-height: 1.185;
    }
  }

  .blog-card {
    border-radius: 24px;
    border: 1px solid #b68c5a;
    border-bottom: 6px solid #b68c5a;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-color: #fff;

    .blog-img {
      border-radius: 24px;
      overflow: hidden;

      a {
        color: #b68c5a;
        text-decoration: none;
        outline: 0;
        -webkit-transition: all ease 0.4s;
        transition: all ease 0.4s;
      }

      img {
        width: 100%;
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
      }
    }

    .blog-content {
      padding-top: 30px;
      position: relative;
      z-index: 3;
      padding: 28px;
      border-radius: 0 0 24px 24px;
      padding-bottom: 10px;

      .blog-meta {
        margin: -0.4em 0 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: inline-block;
          font-size: 12px;
          color: #868686;
          position: relative;
          margin-right: 26px;
          position: relative;

          svg {
            font-size: 10px;
            margin-right: 4px;
            color: #868686;
          }

          &::before {
            content: "";
            position: absolute;
            right: -15px;
            height: 16px;
            width: 1px;
            background: #e0e0e0;
            top: 2px;
          }

          &:last-child::before {
            content: none;
          }
        }
      }

      .box-title {
        font-size: 24px;
        line-height: 1.417;
        font-weight: 600;
        margin-top: -0.32em;
        margin-bottom: 12px;

        color: #011c1a;
        text-transform: none;
        margin: 0 0 15px 0;

        a {
          background-image: -webkit-linear-gradient(right, #b68c5a, #b68c5a);
          background-image: linear-gradient(to left, #b68c5a, #b68c5a);
          background-repeat: no-repeat;
          background-position: bottom left;
          background-size: 0 2px;
          -webkit-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
        }
      }
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
`;
