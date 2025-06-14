import React, { useEffect } from "react";
import {
  FaAccusoft,
  FaFax,
  FaInstagram,
  FaRegThumbsUp,
  FaWhatsapp,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { CONTACT_DATA } from "../../config/Data";
import { ButtonContent, ContactSite, FormContents } from "./ContactElements";
import { FiFacebook, FiPhone } from "react-icons/fi";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.6,
      },
    },
  };

  const item_nya = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <ContactSite id="contact">
      <div className="hero_container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="contact_content"
        >
          <motion.h1 variants={item_nya}>{CONTACT_DATA.text_small}</motion.h1>
          <motion.div variants={item_nya} className="big_heading">
            {CONTACT_DATA.big_heading}
          </motion.div>
        </motion.div>
      </div>

      <div className="contact-container-new">
        <div className="content-form-new">
          <FormContents>
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              ref={ref}
              className="card_form"
            >
              <div className="content">
                <div className="title-text">Submit Your Inquiry</div>
                <p>
                  <b>Keteragan : </b>Kirimkan pesan atau pengaduan kepada kami,
                  senang melayani anda sebagai nasabah kami, Terimakasih.
                </p>
                <div className="content_form">
                  <form className="form_style" onSubmit="" id="form_baru">
                    <div className="inputan">
                      <div className="form_content_input">
                        <div className="text">Request</div>
                        <div
                          className="radio-group"
                          style={{ marginBottom: "16px" }}
                        >
                          <div className="text">
                            <input
                              type="radio"
                              name="jenis_kelamin"
                              value="Laki-laki"
                              onChange={() => {}}
                            />
                            Laki-laki
                          </div>
                          <div className="text">
                            <input
                              type="radio"
                              name="jenis_kelamin"
                              value="Perempuan"
                              onChange={() => {}}
                            />
                            Perempuan
                          </div>
                        </div>
                      </div>

                      <FormInput
                        judul="Nama"
                        placeholder="Nama"
                        type="text"
                        value=""
                        onChange=""
                      />
                      <FormInput
                        judul="No. Handphone"
                        placeholder="No. Handphone"
                        type="number"
                        value=""
                        onChange=""
                      />
                      <FormInput
                        judul="Email"
                        placeholder="Email"
                        type="number"
                        value=""
                        onChange=""
                      />

                      <FormInputSelectNew
                        option=""
                        onChange=""
                        placeholder="Jenis Layanan"
                        value=""
                      />
                    </div>
                    <FormTextArea
                      value=""
                      onChange=""
                      placeholder="Pesan Anda"
                    />
                    <p style={{ fontSize: "12px", borderBottom: "none" }}>
                      <b>Catatan Lain : </b> Pesan balasan daripada form
                      pengaduan akan dikirimkan melalui No. Hp yang di masukan,
                      jadi pastikan No. Hp anda aktif dan benar.
                    </p>
                    {/* {dataresponse?.success && berhasil ? (
                        <p className="informasi">
                          <b>Informasi : </b>
                          {dataresponse?.message}, silahkan cek pesan WhatsApp
                          secara berkala.
                          <button onClick={() => setBerhasil(false)}>
                            <FiX />
                          </button>
                        </p>
                      ) : (
                        ""
                      )} */}

                    <div className="button_flex">
                      <Button
                        id="form_baru"
                        icon={FaAccusoft}
                        label="Kirim Pesan Pengaduan"
                        style={{ fontSize: "12px" }}
                      >
                        Hitung
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </FormContents>
        </div>

        <div className="content-info-new">
          <FormContents>
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              ref={ref}
              className="card_form"
            >
              <div className="content">
                <div className="title-text">Informasi Kontak</div>
                <div className="content_form">
                  <div className="contact_item">
                    {MEDIA_SOSIAL?.map((item, i) => (
                      <div key={i} className="item_contactNew">
                        <div className="icon_text">
                          <item.icon />
                          {item?.label}
                        </div>
                        <div
                          className="label"
                          style={{ textDecoration: "underline" }}
                        >
                          {item?.to ? (
                            <a href={item?.to}>{item?.title}</a>
                          ) : (
                            item?.title
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="title-text">Informasi Alamat</div>

                <div className="informasi-text">
                  <div className="text-contant">Kantor Pusat</div>
                  <div className="text-desc">
                    Jl. Raya Pati – Tayu Km. 19. Waturoyo, Kec. Margoyoso,
                    Kabupaten Pati, Jawa Tengah 59154
                  </div>

                  <div className="text-desc">
                    <div className="informasi-kantor">
                      Email :
                      <div className="style-email"> equiron@gmail.com</div>
                    </div>
                    <div className="informasi-kantor">
                      No. Handphone :
                      <div className="style-email"> +62831765782572</div>
                    </div>
                  </div>

                  <div className="maps">Buka Maps</div>
                </div>
              </div>
            </motion.div>
          </FormContents>
        </div>
      </div>
    </ContactSite>
  );
};

export default Contact;

export const Button = (item) => {
  return (
    <ButtonContent>
      <button
        style={item.style}
        onClick={item.onClick}
        id={item.id}
        to={item.to}
        className="button_my-course"
      >
        <a href={item.to}>{item.label}</a>
      </button>
    </ButtonContent>
  );
};

export const FormInputSelect = (item) => {
  return (
    <div className="form_content">
      <label>{item.placeholder}</label>
      <select
        className="style_select"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item?.data &&
          item.data?.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export const FormInput = (item) => {
  return (
    <div className="form_content_input">
      <div className="text">{item.judul}</div>
      <input
        name={item.name}
        id={item.judul}
        className={`form_input ${item.class}`}
        type={item.type}
        placeholder={item.placeholder}
        required
        onChange={item.onChange}
        value={item.value}
        ref={item.innerRef}
      />
    </div>
  );
};

export const FormTextArea = (item) => {
  return (
    <div className="form_content_input">
      <div className="text">Pesan</div>
      <textarea
        placeholder={item.placeholder}
        required
        value={item.value}
        onChange={item.onChange}
        name="pesan"
        id="pesan"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export const FormInputSelectNew = (item) => {
  return (
    <div className="form_content_input">
      <div className="text">{item.placeholder}</div>
      <select
        className="style_selectNew"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item?.option &&
          item?.option.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export const MEDIA_SOSIAL = [
  {
    to: "https://wa.me/085225100893",
    label: "Whatsapp",
    icon: FaWhatsapp,
    title: "085225100893",
  },
  {
    to: "https://www.instagram.com/bprsarthamasabadi/",
    label: "Instagram",
    icon: FaInstagram,
    title: "Artha Mas Abadi",
  },
  {
    to: "https://www.facebook.com/Banksyariah.Arthamsabadi/",
    label: "Facebook",
    icon: FiFacebook,
    title: "Artha Mas Abadi",
  },
  {
    to: "tel:+6282137925173",
    label: "Telp.",
    icon: FiPhone,
    title: "(0295) 4150477",
  },
  {
    to: "",
    label: "Fax",
    icon: FaFax,
    title: "4150400",
  },
];
