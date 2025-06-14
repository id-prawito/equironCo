import styled from "styled-components";
import themeList from "../../config/themeList";
import { devices } from "../../assets/scss/_respondTo";

export const ContactSite = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  min-height: 40vh;
  padding: 0px;
  max-width: 1250px;

  ${devices.smartphone} {
    justify-content: center;
    min-height: 0px;
  }

  ${devices.ipads} {
    justify-content: center;
    min-height: 0px;
  }

  .contact_content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    text-align: center;
    max-width: 540px;
    line-height: 1.8;
    font-size: 14px;

    ${devices.smartphone} {
      font-size: 14px;
    }

    ${devices.ipads} {
      font-size: 14px;
    }
  }

  .hero_container {
    padding: 0 100px;
    padding-top: 60px;

    ${devices.smartphone} {
      padding: 50px 25px;
    }

    ${devices.ipads} {
      padding: 50px 50px;
    }
  }

  .big_heading {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--light-text-black)"
        : "var(--dark-text-white)"};
    font-weight: 600;
    font-size: 40px;
    margin: 0px;
    margin-bottom: 30px;

    ${devices.smartphone} {
      font-size: 30px;
    }

    ${devices.smartphone} {
      font-size: 30px;
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
      padding: 12px 20px;
      border-radius: 6px;
      max-height: 100%;
      cursor: pointer;
      font-size: 14px;
      gap: 10px;
      transition: 0.3s all ease;

      ${devices.smartphone} {
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
        display: flex;
        gap: 10px;
      }
    }
  }

  .contact-container-new {
    display: grid;
    grid-template-columns: 58% 40%;
    width: 100%;
    gap: 25px;
    margin-bottom: 50px;
  }

  .contact-container {
    align-items: center;
    width: 100%;
    border: 1px solid #000;

    .contact-form {
      margin-right: 30px;
    }
  }

  .heading_form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    padding: 40px 0px;
    width: 80%;

    h2 {
      font-size: 42px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  .text_keterangan {
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .form_currency {
    padding: 14px 26px;
    /* border: 1.2px solid #aaa; */

    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 16px;
    font-weight: 600;

    ::placeholder {
      color: #aeaeae;
      font-size: 14px;
      font-weight: 300;
      text-transform: capitalize;
    }

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  .content_form {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;
  }

  .content_hasil {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .text {
      font-size: 16px;
      font-weight: 500;
    }

    .hasil {
      font-size: 18px;
      font-weight: 600;
      margin-left: 10px;
      color: #ff6d00;
    }
  }

  .gambar_pemanis {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    padding: 20px;

    img {
      width: 100%;
      /* height: 100%; */
    }

    ${devices.smartphone} {
      display: none;
    }

    ${devices.ipads} {
      display: none;
    }
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .content_form_pengaduan {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    width: 100%;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptops} {
      flex-direction: column;
    }
  }

  .card_content_flex {
    display: flex;
    flex-direction: row;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptops} {
      flex-direction: column;
    }
  }

  .content_form_buka {
    display: initial;
    /* flex-direction: row;
    gap: 40px; */

    /* ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptops} {
      flex-direction: column;
    } */
  }
  .informasi {
    font-size: 12px !important;
    border-bottom: none;
    padding: 10px 20px;
    background-color: #709fff;
    border-radius: 10px;
    width: max-content;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    button {
      display: flex;
      background: none;
      color: #fff;
      margin: auto;
      padding: 0px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
    }
  }

  .inputan {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptops} {
      flex-direction: column;
    }
  }

  textarea {
    padding: 12px 20px;
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 14px;
    font-weight: 400;
    font-family: "Rubik", sans-serif;

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  select:required:invalid {
    color: #aeaeae;
    font-size: 14px;
    font-weight: 300;
    text-transform: capitalize;
  }
  option[value=""][disabled] {
    display: none;
  }
  option {
    color: #7227f3;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    /* background: transparent; */
    background-image: url("data:image/svg+xml;utf8,<svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 15px;
    border-radius: 2px;
    padding: 14px 20px;
    border: 1.2px solid #aaa;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;

    :focus {
      outline: none;
    }
  }

  .style_selectNew {
    -webkit-appearance: none;
    -moz-appearance: none;
    /* background: transparent; */
    background-image: url("data:image/svg+xml;utf8,<svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 15px;
    border-radius: 2px;
    padding: 14px 20px;
    border: 1.2px solid #aaa;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;

    :focus {
      outline: none;
    }
  }

  .form_input {
    padding: 14px 20px;
    /* border: 1.2px solid #aaa; */

    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 14px;
    font-weight: 500;

    ::placeholder {
      color: #aeaeae;
      font-size: 14px;
      font-weight: 300;
      text-transform: capitalize;
    }

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  .class_file {
    padding: 10px 20px;
  }

  .button_my-course {
    display: flex;
    align-items: center;
    background-color: var(--colorMain);
    padding: 14px 20px;
    border-radius: 20px;
    max-height: 100%;
    cursor: pointer;
    font-size: 14px;
    color: #ffffff;
    gap: 10px;
    transition: 0.3s all ease;

    &:hover {
      background-color: #038100;
      transition: 0.3s all ease;
      transform: scale(1.05);
    }
  }

  .card_form {
    height: max-content;
    /* border-radius: 8px; */
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#fff" : "var(--mediumColor)"};
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 20px;
    transition: box-shadow 1s;
    margin-right: 30px;
    ${devices.smartphone} {
      width: 100% !important;
    }

    ${devices.ipads} {
      width: 100% !important;
    }

    ${devices.laptops} {
      width: 100% !important;
    }

    :hover {
      border: 1px solid var(--colorMain);
      box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    height: 100%;

    p {
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 300;

      padding-bottom: 10px;
      border-bottom: 1px solid #a5a5a5;
    }

    .text_keterangan {
      text-align: left;

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
        font-weight: 300;

        li {
          display: flex;
          flex-direction: row;

          ${devices.smartphone} {
            flex-direction: column;
            gap: 10px;
          }

          @media only screen and (min-width: 470px) {
            flex-direction: row;
          }

          b {
            font-size: 13px;
            font-weight: 400;
          }

          span {
            font-weight: 500;
          }
        }
      }
    }
  }

  .form_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 100%;

    .text {
      font-weight: 500;
      font-size: 14px;
      color: #000;
      width: 100%;

      ::after {
        content: "*";
        color: red;
      }
    }

    .form_currency {
      padding: 14px 20px;
      /* border: 1.2px solid #aaa; */

      border: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
      box-sizing: border-box;
      border-radius: 8px;
      color: #00193e;

      font-size: 14px;
      font-weight: 600;

      ::placeholder {
        color: #aeaeae;
        font-size: 14px;
        font-weight: 300;
        text-transform: capitalize;
      }

      :focus {
        border: 1px solid #aaa;
        outline: none;
      }
    }
  }

  .form_content_input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 100%;

    .text {
      font-weight: 500;
      font-size: 14px;
      color: #000;
      width: 100%;

      ::after {
        content: "*";
        color: red;
      }
    }

    .text_keterangan {
      font-size: 10px;
      margin-top: -10px;
      color: #a5a5a5;
    }

    textarea::-webkit-input-placeholder {
      color: #aeaeae;
    }
  }

  .content_form {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
  }

  .contact_item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    color: #000;
  }

  .item_contact {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    font-size: 14px;

    :last-child {
      align-items: flex-end;
    }

    .icon_text {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      width: 120px;
    }

    .label {
      text-align: end;
      overflow-wrap: anywhere;
      width: 100%;
    }
  }

  .item_contactNew {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    font-size: 14px;

    :last-child {
      align-items: flex-start;
    }

    .icon_text {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      width: 120px;
      color: #000;
    }

    .label {
      text-align: end;
      overflow-wrap: anywhere;
      width: 100%;
    }
  }

  .gambar_pemanis {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    padding: 20px;

    img {
      width: 100%;
      /* height: 100%; */
    }

    ${devices.smartphone} {
      display: none;
    }

    ${devices.ipads} {
      display: none;
    }
  }

  .class_table {
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }

    ${devices.smartphone} {
      overflow-x: auto;
    }
  }

  .form_style {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  .button_flex {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #fff;
    ${devices.smartphone} {
      width: 600px;
    }

    thead {
      tr {
        .text {
          font-size: 12px;
        }
        th {
          padding: 0.75rem;
          border: 1px solid
            ${({ theme: { theme } }) =>
              theme === themeList.light
                ? "#fff"
                : "var(--mediumColor)"} !important;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #fff;
        }
      }
    }
  }

  tbody {
    border: 1px solid #fff;
    font-size: 13px;
    background: #f0f0f0;

    tr:nth-child(even) {
      background: #f7f7f7;
    }

    td {
      border: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#fff" : "var(--mediumColor)"};
      padding: 0.75rem;
      color: #000;
      line-height: 1.3;
      font-weight: 500;
      text-align: center;

      ${devices.smartphone} {
        text-align: left;
      }

      :nth-child(1) {
        text-align: center;

        ${devices.smartphone} {
          text-align: center;
        }
      }
    }
  }

  .heading {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    width: 100%;
  }

  .body {
    width: 100%;
  }

  .footer {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    width: 100%;
    margin-top: 20px;
  }
`;

export const ButtonContent = styled.div`
  display: initial;
  z-index: 2;
  .button_my-course {
    display: flex;
    align-items: center;
    background-color: #038100;
    padding: 14px 24px;
    border-radius: 20px;
    max-height: 100%;
    cursor: pointer;
    font-size: 14px;
    color: #ffffff;
    gap: 10px;
    transition: 0.3s all ease;

    &:hover {
      background-color: #038100;
      transition: 0.3s all ease;
      transform: scale(1.05);
    }
    a {
      background-color: transparent;
    }
  }

  .button_organisasi {
    display: flex;
    align-items: center;
    font-weight: 400;

    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#f4f4f4" : "var(--mediumColor)"};

    padding: 8px 15px;
    border-radius: 8px;
    width: max-content;
    color: var(--colorMain);
    margin: auto;
    margin-top: 60px;
    gap: 10px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const FormContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .content_form_pengaduan {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    width: 100%;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptops} {
      flex-direction: column;
    }
  }

  .card_content_flex {
    display: flex;
    flex-direction: row;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptops} {
      flex-direction: column;
    }
  }

  .content_form_buka {
    display: initial;
    /* flex-direction: row;
    gap: 40px; */

    /* ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptops} {
      flex-direction: column;
    } */
  }
  .informasi {
    font-size: 12px !important;
    border-bottom: none;
    padding: 10px 20px;
    background-color: #709fff;
    border-radius: 10px;
    width: max-content;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    button {
      display: flex;
      background: none;
      color: #fff;
      margin: auto;
      padding: 0px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
    }
  }

  .inputan {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptops} {
      flex-direction: column;
    }
  }

  textarea {
    padding: 12px 20px;
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 14px;
    font-weight: 400;
    font-family: "Rubik", sans-serif;

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  select:required:invalid {
    color: #aeaeae;
    font-size: 14px;
    font-weight: 300;
    text-transform: capitalize;
  }
  option[value=""][disabled] {
    display: none;
  }
  option {
    color: #7227f3;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    /* background: transparent; */
    background-image: url("data:image/svg+xml;utf8,<svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 15px;
    border-radius: 2px;
    padding: 14px 20px;
    border: 1.2px solid #aaa;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;

    :focus {
      outline: none;
    }
  }

  .style_selectNew {
    -webkit-appearance: none;
    -moz-appearance: none;
    /* background: transparent; */
    background-image: url("data:image/svg+xml;utf8,<svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 15px;
    border-radius: 2px;
    padding: 14px 20px;
    border: 1.2px solid #aaa;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;

    :focus {
      outline: none;
    }
  }

  .form_input {
    padding: 14px 20px;
    /* border: 1.2px solid #aaa; */

    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 14px;
    font-weight: 500;

    ::placeholder {
      color: #aeaeae;
      font-size: 14px;
      font-weight: 300;
      text-transform: capitalize;
    }

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  .class_file {
    padding: 10px 20px;
  }

  .button_my-course {
    display: flex;
    align-items: center;
    background-color: var(--colorMain);
    padding: 14px 20px;
    border-radius: 20px;
    max-height: 100%;
    cursor: pointer;
    font-size: 14px;
    color: #ffffff;
    gap: 10px;
    transition: 0.3s all ease;

    &:hover {
      background-color: #038100;
      transition: 0.3s all ease;
      transform: scale(1.05);
    }
  }

  .card_form {
    height: max-content;
    /* border-radius: 8px; */
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#fff" : "var(--mediumColor)"};
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 20px;
    transition: box-shadow 1s;
    margin-right: 30px;
    ${devices.smartphone} {
      width: 100% !important;
    }

    ${devices.ipads} {
      width: 100% !important;
    }

    ${devices.laptops} {
      width: 100% !important;
    }

    :hover {
      border: 1px solid var(--colorMain);
      box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    height: 100%;

    .title-text {
      font-size: 24px;
      font-weight: 700;
      color: #000;
    }

    p {
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 300;

      padding-bottom: 10px;
      border-bottom: 1px solid #a5a5a5;
    }

    .text_keterangan {
      text-align: left;

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
        font-weight: 300;

        li {
          display: flex;
          flex-direction: row;

          ${devices.smartphone} {
            flex-direction: column;
            gap: 10px;
          }

          @media only screen and (min-width: 470px) {
            flex-direction: row;
          }

          b {
            font-size: 13px;
            font-weight: 400;
          }

          span {
            font-weight: 500;
          }
        }
      }
    }
  }

  .form_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 100%;

    .text {
      font-weight: 500;
      font-size: 14px;
      color: #000;
      width: 100%;

      ::after {
        content: "*";
        color: red;
      }
    }

    .form_currency {
      padding: 14px 20px;
      /* border: 1.2px solid #aaa; */

      border: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
      box-sizing: border-box;
      border-radius: 8px;
      color: #00193e;

      font-size: 14px;
      font-weight: 600;

      ::placeholder {
        color: #aeaeae;
        font-size: 14px;
        font-weight: 300;
        text-transform: capitalize;
      }

      :focus {
        border: 1px solid #aaa;
        outline: none;
      }
    }
  }

  .form_content_input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 100%;

    .text {
      font-weight: 500;
      font-size: 14px;
      width: 100%;
      color: #000;

      ::after {
        content: "*";
        color: red;
      }
    }

    .text_keterangan {
      font-size: 10px;
      margin-top: -10px;
      color: #a5a5a5;
    }

    textarea::-webkit-input-placeholder {
      color: #aeaeae;
    }
  }

  .content_form {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
  }

  .contact_item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    color: #000;
  }

  .item_contact {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    font-size: 14px;

    :last-child {
      align-items: flex-end;
    }

    .icon_text {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      width: 120px;
      color: #000;
    }

    .label {
      text-align: end;
      overflow-wrap: anywhere;
      width: 100%;
    }
  }

  .item_contactNew {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    font-size: 14px;

    :last-child {
      align-items: flex-start;
    }

    .icon_text {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      width: 120px;
    }

    .label {
      text-align: end;
      overflow-wrap: anywhere;
      width: 100%;
    }
  }

  .gambar_pemanis {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    padding: 20px;

    img {
      width: 100%;
      /* height: 100%; */
    }

    ${devices.smartphone} {
      display: none;
    }

    ${devices.ipads} {
      display: none;
    }
  }

  .class_table {
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }

    ${devices.smartphone} {
      overflow-x: auto;
    }
  }

  .form_style {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  .button_flex {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #fff;
    ${devices.smartphone} {
      width: 600px;
    }

    thead {
      tr {
        .text {
          font-size: 12px;
        }
        th {
          padding: 0.75rem;
          border: 1px solid
            ${({ theme: { theme } }) =>
              theme === themeList.light
                ? "#fff"
                : "var(--mediumColor)"} !important;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #fff;
        }
      }
    }
  }

  tbody {
    border: 1px solid #fff;
    font-size: 13px;
    background: #f0f0f0;

    tr:nth-child(even) {
      background: #f7f7f7;
    }

    td {
      border: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#fff" : "var(--mediumColor)"};
      padding: 0.75rem;
      color: #000;
      line-height: 1.3;
      font-weight: 500;
      text-align: center;

      ${devices.smartphone} {
        text-align: left;
      }

      :nth-child(1) {
        text-align: center;

        ${devices.smartphone} {
          text-align: center;
        }
      }
    }
  }

  .heading {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    width: 100%;
  }

  .body {
    width: 100%;
  }

  .footer {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    width: 100%;
    margin-top: 20px;
  }

  .radio-group {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 40%;

    .text {
      color: #000;
      font-size: 14px;
      margin-right: 16px;
      display: flex;
      align-items: center;
    }
  }

  .radio-group input[type="radio"] {
    accent-color: #b88649;
    margin-right: 6px;

    width: 16px;
    height: 16px;
  }

  .informasi-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #000;

    .text-contant {
      font-weight: 700;
      font-size: 16px;
    }

    .text-desc {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .informasi-kantor {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 6px;
      }
    }

    .style-email {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      color: #b88649;
      cursor: pointer;

      :hover {
        color: #000;
      }
    }

    .maps {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      color: #000;
      cursor: pointer;

      :hover {
        color: #b88649;
      }
    }
  }
`;
