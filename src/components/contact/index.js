import React, { useEffect, useState } from "react";
import { FaAccusoft, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { CONTACT_DATA } from "../../config/Data";
import { ButtonContent, ContactSite, FormContents } from "./ContactElements";
import { FiPhone, FiVoicemail, FiX } from "react-icons/fi";

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

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [select, setSelect] = useState("");
  const [berhasil, setBerhasil] = useState(false);

  const whatsappNumber = "6287777000919";

  const set = (name) => {
    return ({ target: { value } }) => {
      setForm((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `LAPORAN KONSULTASI

Informasi Pelapor:
Nama          : ${form.name}
No. HP        : ${form.phone}
Email         : ${form.email}
Area Praktek : ${select}

-------------------------

Detail Konsultasi:
${form.message}

Pesan ini dikirim melalui formulir konsultasi online.
Mohon segera ditindaklanjuti oleh tim terkait.

Terima kasih.`;

    console.log(text, e);

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(url, "_blank");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setSelect("");
    setBerhasil(true);

    // Setelah 3 detik, set kembali ke false
    setTimeout(() => {
      setBerhasil(false);
    }, 3000);
  };

  const valueSelect = [
    {
      name: "Merger and Acquisitions",
      value: "Merger and Acquisitions",
    },
    {
      name: "Banking and Finance",
      value: "Banking and Finance",
    },
    {
      name: "Land and Property",
      value: "Land and Property",
    },
    {
      name: "Project Development",
      value: "Project Development",
    },
    {
      name: "Technology, Media & Telecom",
      value: "Technology, Media & Telecom",
    },
    {
      name: "Corporate Compliance Services",
      value: "Corporate Compliance Services",
    },
    {
      name: "Food & Beverage, Anti-Trust & Competition Law",
      value: "Food & Beverage, Anti-Trust & Competition Law",
    },
    {
      name: "Start-Up Company",
      value: "Start-Up Company",
    },
    {
      name: "Criminal Law",
      value: "Criminal Law",
    },
    {
      name: "Civil Law",
      value: "Civil Law",
    },
    {
      name: "Coal & Nickel Mining",
      value: "Coal & Nickel Mining",
    },
  ];

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <ContactSite id="contact">
      <div className="hero-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="contact-content"
        >
          <motion.h1 variants={item_nya}>{CONTACT_DATA.text_small}</motion.h1>
          <motion.div variants={item_nya} className="big-heading">
            {CONTACT_DATA.big_heading}
          </motion.div>
        </motion.div>
      </div>

      <div className="contact-container">
        <div className="content-form">
          <FormContents>
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              ref={ref}
              className="card-form"
            >
              <div className="content">
                <div className="title-text">Submit Your Inquiry</div>
                <p>
                  <b>Keteragan : </b>Kirimkan pesan atau konsultasi kepada kami,
                  senang melayani anda sebagai client kami, Terimakasih.
                </p>
                <div className="content-form">
                  <form
                    className="form_style"
                    onSubmit={handleSubmit}
                    id="form_baru"
                  >
                    <div className="inputan">
                      <div className="form-content-input">
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
                            Individual
                          </div>
                          <div className="text">
                            <input
                              type="radio"
                              name="jenis_kelamin"
                              value="Perempuan"
                              onChange={() => {}}
                            />
                            Non Individual
                          </div>
                        </div>
                      </div>

                      <FormInput
                        judul="Nama"
                        placeholder="Nama"
                        type="text"
                        value={form.name}
                        onChange={set("name")}
                      />
                      <FormInput
                        judul="No. Handphone"
                        placeholder="No. Handphone"
                        type="number"
                        value={form.phone}
                        onChange={set("phone")}
                      />
                      <FormInput
                        judul="Email"
                        placeholder="Email"
                        type="text"
                        value={form.email}
                        onChange={set("email")}
                      />
                      <FormInputSelectNew
                        option={valueSelect}
                        onChange={handleSelect}
                        placeholder="Area Praktek"
                        value={select}
                      />
                    </div>
                    <FormTextArea
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Pesan Anda"
                    />
                    <p style={{ fontSize: "12px", borderBottom: "none" }}>
                      <b>Catatan Lain : </b> Pesan balasan daripada pesan
                      konsultasi akan dikirimkan melalui No. Hp yang di masukan,
                      jadi pastikan No. Hp anda aktif dan benar.
                    </p>
                    {berhasil ? (
                      <p className="informasi">
                        <b>Informasi : </b> silahkan cek pesan WhatsApp secara
                        berkala.
                        <button onClick={() => setBerhasil(false)}>
                          <FiX />
                        </button>
                      </p>
                    ) : (
                      ""
                    )}

                    <div className="button_flex">
                      <Button
                        id="form_baru"
                        icon={FaAccusoft}
                        label="Kirim Pesan Konsultasi"
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
              className="card-form"
            >
              <div className="content">
                <div className="title-text">Informasi Kontak</div>
                <div className="content-form">
                  <div className="contact-item">
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
                    Jalan Pengasinan No. 3 Jatimulya, Bekasi, Jawa Barat 17115,
                    Indonesia
                  </div>

                  <div className="text-desc">
                    <div className="informasi-kantor">
                      Email :
                      <div className="style-email">
                        <a href="mailto:equironandco@gmail.com">
                          equiron@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="informasi-kantor">
                      No. Handphone :
                      <div className="style-email">
                        <a href="https://wa.me/6287777000919">6287777000919</a>
                      </div>
                    </div>
                  </div>

                  <div className="maps">
                    <a href="https://maps.app.goo.gl/QnPgB2Svhveq7kpJ8">
                      Buka Maps
                    </a>
                  </div>
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
    <div className="form-content-input">
      <div className="text">{item.judul}</div>
      <input
        name={item.name}
        id={item.judul}
        className={`form-input ${item.class}`}
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
    <div className="form-content-input">
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
    <div className="form-content-input">
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
    to: "https://wa.me/6287777000919",
    label: "Whatsapp",
    icon: FaWhatsapp,
    title: "6287777000919",
  },
  {
    to: "https://www.instagram.com/equironandco/",
    label: "Instagram",
    icon: FaInstagram,
    title: "Equiron And Co.",
  },
  {
    to: "tel:+6287777000919",
    label: "Telp.",
    icon: FiPhone,
    title: "+6287777000919",
  },
  {
    to: "mailto:equironandco@gmail.com",
    label: "Email",
    icon: FiVoicemail,
    title: "equironandco@gmail.com",
  },
];
