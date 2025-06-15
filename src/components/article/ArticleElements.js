import styled from "styled-components";

export const ArticleSite = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  background-color: #f5f5f5;

  .article-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    padding: 0 1rem;

    @media only screen and (min-width: 1024px) and (max-width: 1280px) {
      max-width: 950px;
    }
  }

  .article-content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    max-width: 1350px;
  }

  .article-desc {
    width: 100%;
    padding: 0px 20px;
    margin-top: 80px;

    .article-title {
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

    .article-subtitle {
      color: #011c1a;
      text-transform: none;
      font-weight: 700;
      line-height: 1.4;
      margin: 0 0 24px 0;
      font-size: 54px;
      line-height: 1.185;
    }
  }

  .article-content {
    width: 100%;
    padding: 0px 20px;
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
        justify-content: flex-start;

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

  .shape-mockup-article-left {
    position: absolute;
    left: -50px;
    top: 0;
    z-index: 1;
    pointer-events: none;
  }

  .shape-mockup-article-right {
    position: absolute;
    right: -50px;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }

  .jump-article {
    animation: jumpArticle 7s linear infinite;
  }

  @keyframes jumpArticle {
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
