import {
  illustrator,
  javascript,
  typescript,
  visualCode,
  photoshop,
  firebase,
  reactJs,
  mongoDB,
  github,
  sqlite,
  nodeJS,
  mySQL,
  vueJs,
  figma,
  html5,
  scss,
  css,
  php,
  git,
  pokedex,
  disneyPlus,
  spkPromethee,
  arthamas,
  angularJs,
} from "./_images";
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaRegThumbsUp,
  FaLeaf,
  FaInstagram,
  FaChalkboardTeacher,
  FaBalanceScale,
  FaUserShield,
  FaStarHalfAlt,
  FaTrophy,
  FaRegHandshake,
  FaRegNewspaper,
  FaCommentAlt,
  FaCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";

import {
  about_jump_left,
  about_jump_right,
  aimtopindo_logo,
  chakra_giri_logo,
  citra_harapan_jaya_permai_logo,
  clients_shape_left,
  clients_shape_right,
  clm_logo,
  dana_paint_logo,
  gaharu_pelayaran_logo,
  images_about_1,
  images_about_2,
  images_about_3,
  indo_berkat_logo,
  lliadi_logo,
  mitra_galperti_logo,
  pbe_logo,
  process_jump_right,
  process_one,
  pssi_logo,
  publication_image,
  publications_shape_left,
  publications_shape_right,
  semesta_energi_service_logo,
  service_card_1_1,
  service_card_1_2,
  service_card_1_3,
  service_card_1_4,
  service_card_1_5,
  team_member_1,
  team_member_2,
  team_member_3,
  team_member_4,
  teams_bg,
  teams_jump_left,
  tridaya_esa_pakarti_logo,
  warna_warni_logo,
} from "./_equironImages";

export const NAVLINKS = [
  {
    to: "about",
    icon: FaEllipsisV,
    name: "ABOUT",
  },
  {
    to: "services",
    icon: FaEllipsisV,
    name: "SERVICES",
  },
  {
    to: "process",
    icon: FaEllipsisV,
    name: "PROCESS",
  },
  {
    to: "teams",
    icon: FaEllipsisV,
    name: "TEAMS",
  },
  {
    to: "article",
    icon: FaEllipsisV,
    name: "PUBLICATIONS",
  },
  {
    to: "clients",
    icon: FaEllipsisV,
    name: "CLIENTS",
  },
];

export const ABOUT_DATA_EQUIRON = {
  about_shape_mockup_data: [
    {
      tech_img: about_jump_right,
      tech_name: "about_jump_right",
      alt: "shape-mockup-about-right",
      class: "right",
    },
    {
      tech_img: about_jump_left,
      tech_name: "about_jump_left",
      alt: "shape-mockup-about-left",
      class: "left",
    },
  ],
  about_title:
    "Our core values—Trust, Commitment, and Accessibility—are at the heart of everything we do.",
  about_heading: "A Legacy <span>Of</span> Legal Excellence",
  about_desc:
    "is a forward-thinking, full-service law firm dedicated to providing comprehensive legal solutions across various sectors. Founded with a vision to become a trusted legal partner, we serve individuals, businesses, and organizations with professionalism and integrity. Our core values—Trust, Commitment, and Accessibility—are at the heart of everything we do.",
  about_skill_data: [
    {
      icon: FaCheckCircle,
      text: "Trust is the foundation of our client relationships.",
    },
    {
      icon: FaCheckCircle,
      text: "Client-Centered Approach, Excellence and Proactivity",
    },
    {
      icon: FaCheckCircle,
      text: "Accessibility is central to our philosophy.",
    },
    { icon: FaCheckCircle, text: "Partners in Your Success" },
  ],
  about_images_one: {
    title: images_about_1,
    alt: "images_about_1",
  },
  about_images_two: {
    title: images_about_2,
    alt: "images_about_1",
  },
  about_images_three: { title: images_about_3, alt: "images_about_1" },
  about_stats_data: [
    { icon: <FaBalanceScale />, value: "10k+", label: "Case Done" },
    { icon: <FaUserShield />, value: "12k+", label: "Expert Attorneys" },
    { icon: <FaStarHalfAlt />, value: "15k+", label: "Happy Clients" },
    { icon: <FaTrophy />, value: "20k+", label: "Award Winning" },
  ],
};

export const SERVICES_DATA_EQUIRON = {
  service_big_heading: "Legal Services We Offer",
  service_desc:
    "At Equiron & Co., we provide forward-thinking and comprehensive legal services tailored to meet the demands of today’s dynamic legal landscape. Guided by our core values—Trust, Commitment, and Accessibility—we deliver clear, strategic legal counsel across a broad spectrum of practice areas. Whether serving individuals, corporations, or institutions, our experienced team takes a client-first approach, ensuring each solution is crafted with precision, integrity, and a deep understanding of your unique needs. With Equiron & Co. by your side, you can face legal complexities with clarity and confidence.",
  service_data_services: [
    {
      icon: service_card_1_1,
      cornerIcon: service_card_1_1,
      cardTitle: "Merger and Acquisitions",
      cardDesc:
        "Strategic legal guidance for seamless mergers, acquisitions, and business transitions.",
    },
    {
      icon: service_card_1_2,
      cornerIcon: service_card_1_2,
      cardTitle: "Banking and Finance",
      cardDesc:
        "Reliable counsel on financial regulations, lending structures, and transactional compliance.",
    },
    {
      icon: service_card_1_3,
      cornerIcon: service_card_1_3,
      cardTitle: "Land and Property",
      cardDesc:
        "Comprehensive support on real estate transactions, land use, and asset protection.",
    },
    {
      icon: service_card_1_4,
      cornerIcon: service_card_1_4,
      cardTitle: "Project Development",
      cardDesc:
        "Legal support from planning to execution, ensuring regulatory and commercial alignment.",
    },
    {
      icon: service_card_1_5,
      cornerIcon: service_card_1_5,
      cardTitle: "Technology, Media & Telecom",
      cardDesc:
        "Insightful legal solutions for innovation-driven sectors in a fast-evolving digital world.",
    },
    {
      icon: service_card_1_1,
      cornerIcon: service_card_1_1,
      cardTitle: "Corporate Compliance Services",
      cardDesc:
        "Helping businesses meet governance standards with clarity and confidence.",
    },
    {
      icon: service_card_1_2,
      cornerIcon: service_card_1_2,
      cardTitle: "Food & Beverage, Anti-Trust & Competition Law",
      cardDesc:
        "Navigating industry regulations while protecting your competitive edge.",
    },
    {
      icon: service_card_1_3,
      cornerIcon: service_card_1_3,
      cardTitle: "Start-Up Company",
      cardDesc:
        "Tailored legal frameworks to support sustainable growth from early stages.",
    },
    {
      icon: service_card_1_4,
      cornerIcon: service_card_1_4,
      cardTitle: "Criminal Law",
      cardDesc:
        "Trusted representation and defense with integrity, discretion, and expertise.",
    },
    {
      icon: service_card_1_5,
      cornerIcon: service_card_1_5,
      cardTitle: "Civil Law",
      cardDesc:
        "Resolving personal and commercial disputes with fairness and efficiency.",
    },
    {
      icon: service_card_1_1,
      cornerIcon: service_card_1_1,
      cardTitle: "Coal & Nickel Mining",
      cardDesc:
        "Legal insight into mining operations, licensing, and environmental compliance.",
    },
  ],
};

export const PROCESS_DATA_EQUIRON = {
  process_shape_mockup_data: [
    {
      tech_img: process_jump_right,
      tech_name: "process_jump_right",
      alt: "process_jump_right",
      class: "right",
    },
  ],
  process_one_images: {
    title: process_one,
    alt: "process_one",
  },
  process_text: "Work Process",
  process_title: "Navigating the Law: Your Assurance of Peace",
  process_data_works: [
    {
      title: "Consultations",
      desc: `The consultation begins with a client inquiry. We schedule a meeting, either online or in-person. During the session, we identify legal issues and gather relevant documents. After analysis, we provide legal advice and possible solutions. If needed, follow-up consultations are arranged. Confidentiality is guaranteed throughout. We ensure clarity, professionalism, and support every step of the way to resolve legal matters effectively.`,
      icon: FaRegHandshake,
    },
    {
      title: "Executions",
      desc: `After consultation, we draft necessary legal documents and agreements. Upon client approval, we proceed with filing, negotiation, or representation. We coordinate with relevant authorities or parties to ensure proper execution. Throughout the process, we provide updates and clarify each step. Final outcomes are reviewed with the client. Our goal is to deliver effective, timely, and compliant results that reflect the agreed legal strategy and protect the client’s interests.`,
      icon: FaRegNewspaper,
    },
  ],
};

export const TEAMS_DATA_EQUIRON = {
  teams_bg_images: {
    title: teams_bg,
    alt: "teams_bg",
  },
  teams_text: "Our Teams",
  teams_title: "Dedicated Lawyers, Proven Results",
  teams_members: [
    {
      name: "Smith Miller",
      title: "Attorney",
      image: team_member_1,
      socials: [
        { icon: FaInstagram, url: "https://instagram.com/smithmiller" },
        { icon: FiTwitter, url: "https://twitter.com/smithmiller" },
        { icon: FiLinkedin, url: "https://linkedin.com/in/smithmiller" },
        { icon: FiPhone, url: "tel:+628111111111" },
      ],
    },
    {
      name: "Samira Dsuza",
      title: "Senior Partner",
      image: team_member_2,
      socials: [
        { icon: FaInstagram, url: "https://instagram.com/samira" },
        { icon: FiTwitter, url: "https://twitter.com/samira" },
        { icon: FiLinkedin, url: "https://linkedin.com/in/samira" },
        { icon: FiPhone, url: "tel:+628122222222" },
      ],
    },
    {
      name: "Michel Phelps",
      title: "Chief Justice",
      image: team_member_3,
      socials: [
        { icon: FaInstagram, url: "https://instagram.com/phelps" },
        { icon: FiTwitter, url: "https://twitter.com/phelps" },
        { icon: FiLinkedin, url: "https://linkedin.com/in/phelps" },
        { icon: FiPhone, url: "tel:+628133333333" },
      ],
    },
    {
      name: "Sarah Rahma",
      title: "Legal Advisor",
      image: team_member_4,
      socials: [
        { icon: FaInstagram, url: "https://instagram.com/sarahrahma" },
        { icon: FiTwitter, url: "https://twitter.com/sarahrahma" },
        { icon: FiLinkedin, url: "https://linkedin.com/in/sarahrahma" },
        { icon: FiPhone, url: "tel:+628144444444" },
      ],
    },
    {
      name: "Smith Miller",
      title: "Attorney",
      image: team_member_1,
      socials: [
        { icon: FaInstagram, url: "https://instagram.com/smithmiller" },
        { icon: FiTwitter, url: "https://twitter.com/smithmiller" },
        { icon: FiLinkedin, url: "https://linkedin.com/in/smithmiller" },
        { icon: FiPhone, url: "tel:+628111111111" },
      ],
    },
    {
      name: "Samira Dsuza",
      title: "Senior Partner",
      image: team_member_2,
      socials: [
        { icon: FaInstagram, url: "https://instagram.com/samira" },
        { icon: FiTwitter, url: "https://twitter.com/samira" },
        { icon: FiLinkedin, url: "https://linkedin.com/in/samira" },
        { icon: FiPhone, url: "tel:+628122222222" },
      ],
    },
  ],
  teams_shape_mockup_data: [
    {
      tech_img: teams_jump_left,
      tech_name: "shape-mockup-teams",
      alt: "teams_jump_left",
      class: "right",
    },
  ],
};

export const PUBLICATIONS_DATA_EQUIRON = {
  publications_text: "Publications",
  publications_title: "Our Publications & Update",
  publications_articles: [
    {
      author: "Smith Miller",
      title: "Steps to Pursue a Career as a Legal Project Manager.",
      image: publication_image,
      date: "22 Sep, 2025",
      comments: "2 Comments",
      icons: {
        user: FaUserAlt,
        calendar: FaCalendarAlt,
        comment: FaCommentAlt,
      },
    },
    {
      author: "Samira",
      title: "Top 10 Legal Tech Trends in 2025.",
      image: publication_image,
      date: "18 Sep, 2025",
      comments: "4 Comments",
      icons: {
        user: FaUserAlt,
        calendar: FaCalendarAlt,
        comment: FaCommentAlt,
      },
    },
    {
      author: "Michel",
      title: "How Legal Frameworks Shape Business Success.",
      image: publication_image,
      date: "14 Sep, 2025",
      comments: "5 Comments",
      icons: {
        user: FaUserAlt,
        calendar: FaCalendarAlt,
        comment: FaCommentAlt,
      },
    },
    {
      author: "Sarah",
      title: "Understanding Contract Law in Modern Business.",
      image: publication_image,
      date: "10 Sep, 2025",
      comments: "8 Comments",
      icons: {
        user: FaUserAlt,
        calendar: FaCalendarAlt,
        comment: FaCommentAlt,
      },
    },
    {
      author: "David",
      title: "The Importance of Due Diligence in Legal Practice.",
      image: publication_image,
      date: "05 Sep, 2025",
      comments: "3 Comments",
      icons: {
        user: FaUserAlt,
        calendar: FaCalendarAlt,
        comment: FaCommentAlt,
      },
    },
  ],
  publications_shape_mockup_data: [
    {
      tech_img: publications_shape_right,
      tech_name: "publications_shape_right",
      alt: "publications-shape-right",
      class: "right",
    },
    {
      tech_img: publications_shape_left,
      tech_name: "publications_shape_left",
      alt: "publications-shape-right",
      class: "left",
    },
  ],
};

export const CLIENTS_DATA_EQUIRON = {
  clients_text: "Clients",
  clients_title: "Our Featured Clients",

  clients_data_client: [
    {
      name: "AIMTOPINDO",
      title: "aimtopindo_logo",
      image: aimtopindo_logo,
    },
    {
      name: "Chakra Giri",
      title: "chakra_giri_logo",
      image: chakra_giri_logo,
    },
    {
      name: "Citra Harapan Jaya Permai",
      title: "citra_harapan_jaya_permai_logo",
      image: citra_harapan_jaya_permai_logo,
    },
    {
      name: "CLM",
      title: "clm_logo",
      image: clm_logo,
    },
    {
      name: "Dana Paint",
      title: "dana_paint_logo",
      image: dana_paint_logo,
    },
    {
      name: "PSSI",
      title: "pssi_logo",
      image: pssi_logo,
    },
    {
      name: "Gaharu Pelayaran",
      title: "gaharu_pelayaran_logo",
      image: gaharu_pelayaran_logo,
    },
    {
      name: "Lliadi",
      title: "lliadi_logo",
      image: lliadi_logo,
    },
    {
      name: "Indo Berkat",
      title: "indo_berkat_logo",
      image: indo_berkat_logo,
    },
    {
      name: "Mitra Galperti",
      title: "mitra_galperti_logo",
      image: mitra_galperti_logo,
    },
    {
      name: "PBE",
      title: "pbe_logo",
      image: pbe_logo,
    },
    {
      name: "Semesta Energi Service",
      title: "semesta_energi_service_logo",
      image: semesta_energi_service_logo,
    },
    {
      name: "Tridaya Esa Pakarti",
      title: "tridaya_esa_pakarti_logo",
      image: tridaya_esa_pakarti_logo,
    },
    {
      name: "Warna Warni",
      title: "warna_warni_logo",
      image: warna_warni_logo,
    },
  ],
  clients_shape_mockup_data: [
    {
      tech_img: clients_shape_right,
      tech_name: "clients_shape_right",
      alt: "clients-shape-right",
      class: "right",
    },
    {
      tech_img: clients_shape_left,
      tech_name: "clients_shape_left",
      alt: "clients-shape-left",
      class: "left",
    },
  ],
};

export const TECH_STACK = [
  {
    tech_img: html5,
    tech_name: "HTML 5",
  },
  {
    tech_img: css,
    tech_name: "CSS",
  },
  {
    tech_img: javascript,
    tech_name: "JavaScript",
  },
  {
    tech_img: typescript,
    tech_name: "TypeScript",
  },
  {
    tech_img: github,
    tech_name: "Github",
  },
  {
    tech_img: reactJs,
    tech_name: "React JS",
  },
  {
    tech_img: visualCode,
    tech_name: "Visual Code",
  },
  {
    tech_img: scss,
    tech_name: "Scss",
  },
  {
    tech_img: mySQL,
    tech_name: "MySQL",
  },
  {
    tech_img: figma,
    tech_name: "Figma",
  },
  {
    tech_img: php,
    tech_name: "PHP",
  },
  {
    tech_img: nodeJS,
    tech_name: "Node JS",
  },
  {
    tech_img: mongoDB,
    tech_name: "MongoDB",
  },
  {
    tech_img: firebase,
    tech_name: "Firebase",
  },
  {
    tech_img: illustrator,
    tech_name: "Illustrator",
  },
  {
    tech_img: photoshop,
    tech_name: "Photoshop",
  },
  {
    tech_img: angularJs,
    tech_name: "Angular",
  },
  {
    tech_img: sqlite,
    tech_name: "Sqlite",
  },
  {
    tech_img: git,
    tech_name: "Git",
  },
  {
    tech_img: vueJs,
    tech_name: "Vue JS",
  },
];

export const CONTACT_DATA = {
  text_small: "Have Any Questions?",
  big_heading: "Get in Touch with Us",
  description:
    "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  icon: FaRegThumbsUp,
  to: "mailto:prawito.id@gmail.com",
  button: "Say Hello",
};

export const EXPE_DATA = {
  text_small: "What's Next ?",
  big_heading: "Where from I've Experienced",
  expe: [
    {
      tab: "Fulltime",
      key: 1,
      heading: "WEB DEVELOPER ",
      to: "https://www.linkedin.com/company/bank-mandiri/?originalSubdomain=id",
      text_expe: "@ PT. Bank Mandiri (Persero)",
      date: "Agustus 2022 - Now",
      skill: [
        {
          icon: FaLeaf,
          desc: "Work as Web Developer at Departement Wholesale, Group Digital Banking Delivery, PT. Bank Mandiri in developing EForm (Tab Application) for reservation transaction financial or non financial at branch of Bank Mandiri, and developing Branch Admin (Web Application) based on AngularJS.",
        },
      ],
    },
    {
      tab: "Fulltime",
      key: 2,
      heading: "FRONTEND DEVELOPER ",
      to: "www.facebook.com",
      text_expe: "@ Prudential Indonesia",
      date: "April 2022 - Juli 2022 (4 Month)",
      skill: [
        {
          icon: FaLeaf,
          desc: "Work as Front-End Developer at Prudential Indonesia in developing PRUForce (Mobile Application) and PRUHub (Web Application) based on ReactJS, AngularJS, and Ionic Framework.",
        },
      ],
    },
    {
      tab: "Training II",
      key: 3,
      heading: "FRONTEND IT PERBANKAN ",
      to: "www.facebook.com",
      text_expe: "@ Thematic Academy DTS KOMINFO",
      date: "August 2021 - October 2021",
      skill: [
        {
          icon: FaLeaf,
          desc: "Training to answer the challenges of technological developments in the service sector financial management that aims to equip trainees with basic knowledge, specific hard skills and soft skills with the needs of the banking industry.",
        },
        {
          icon: FaLeaf,
          desc: "Shared knowledge about how to do coding with programming technology HTML, CSS, JavaScript, and React JS.",
        },
      ],
    },
    {
      tab: "Internship",
      key: 4,
      heading: "WEB DEVELOPER ",
      to: "www.facebook.com",
      text_expe: "@ PT. KAI Indonesia",
      date: "January 2019 - March 2019",
      skill: [
        {
          icon: FaLeaf,
          desc: "Designed, built, and tested an online system for PT. KAI DAOP 6 Yogyakarta employees using PHP, HTML, Bootstrap, JavaScript, and MySQL.",
        },
      ],
    },
    {
      tab: "Training I",
      key: 5,
      heading: "BIG DATA ANALYTICS ",
      to: "www.facebook.com",
      text_expe: "@ Fresh Graduate Academy DTS KOMINFO",
      date: "October 2019 - December 2019",
      skill: [
        {
          icon: FaLeaf,
          desc: "Shared knowledge about how to do basic coding with Python.",
        },
        {
          icon: FaLeaf,
          desc: "Worked on some final projects to solved current problems using Machine Learning, and data twitter.",
        },
      ],
    },
    {
      tab: "Certificate",
      key: 6,
      heading: "ORACLE ACADEMY ",
      to: "www.facebook.com",
      text_expe: "@ Oracle | Diponegoro University",
      date: "December 2018",
      skill: [
        {
          icon: FaLeaf,
          desc: "Oracle Academy is a training program from Oracle that provides training that includes Database design and Database programming with SQL, Database programming with PL/SQL, Java Programming, and Java Fundamentals.",
        },
      ],
    },
  ],
};

export const MEDIA_SOSIAL = [
  {
    to: "https://github.com/id-prawito",
    label: "Github",
    icon: FiGithub,
  },
  {
    to: "https://www.instagram.com/praw.ito/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    to: "https://twitter.com/id_praw",
    label: "Twitter",
    icon: FiTwitter,
  },
  {
    to: "https://linkedin.com/in/prawito/",
    label: "Linkedin",
    icon: FiLinkedin,
  },
  {
    to: "tel:+6282137925172",
    label: "Phone",
    icon: FiPhone,
  },
];

export const HERO_DATA = {
  text_small: "Your Guardian in Law",
  big_heading: "Experienced.",
  big_heading2: "Lawyers, Proven, Result",
  description:
    "Our team of experienced attorneys has a diverse range of expe rtise, covering a wide spectrum of legal areas. We specialize in corporate law, family law.",
  button: [
    {
      to: "https://wa.me/6287777000919",
      nama_button: "CONTACT US",
      icon: FaChalkboardTeacher,
    },
  ],
};

export const WORK_DATA = {
  text_small: "Hi bro, this is",
  big_heading: "Some Things I've Built",
  project: [
    {
      style: "row-reverse",
      project_to: "https://www.arthamasabadi.co.id/",
      project_img: arthamas,
      alt: "Bank Artha Mas Abadi",
      ml: "0px",
      mr: "-80px",
      ai: "flex-start",
      ta: "left",
      text: "Featured Project",
      description:
        "Bank Artha Mas Abadi website is a website that is used to provide information to customers about the products and services of Bank Artha Mas Abadi, and other information.",
      tect_list: ["React", "Laravel", "MySql"],
      project_link: [
        {
          to: "https://github.com/id-prawito/disney-plus",
          icon: FiGithub,
        },
        {
          to: "https://id-prawito.github.io/disney-plus/",
          icon: FiExternalLink,
        },
      ],
    },
    {
      style: "row",
      project_to: "https://id-prawito.github.io/pokedex-id/",
      project_img: pokedex,
      alt: "Pokedex-id",
      ml: "-80px",
      mr: "0px",
      ai: "flex-end",
      ta: "right",
      text: "Featured Project",
      description:
        "Pokédex id is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. Search for a Pokémon by name orusing it's National Pokédex number.",
      tect_list: [
        "VS Code",
        "Pokedex API",
        "React",
        "Styled Components",
        "Github Pages",
      ],
      project_link: [
        {
          to: "https://github.com/id-prawito/pokedex-id",
          icon: FiGithub,
        },
        {
          to: "https://id-prawito.github.io/pokedex-id/",
          icon: FiExternalLink,
        },
      ],
    },
    {
      style: "row-reverse",
      project_to: "https://id-prawito.github.io/disney-plus/",
      project_img: disneyPlus,
      alt: "Disney Plus",
      ml: "0px",
      mr: "-80px",
      ai: "flex-start",
      ta: "left",
      text: "Featured Project",
      description:
        "Disney Plus is a movie search app clone from Disney + website, this app can helps display and sort all movies available in the TMDB API. This App is build with ReactJS, SCSS and Swiper JS. Also, uses Github Pages to deploy.",
      tect_list: [
        "VS Code",
        "TMDB API",
        "React",
        "Scss",
        "Github Pages",
        "Swiper Js",
      ],
      project_link: [
        {
          to: "https://github.com/id-prawito/disney-plus",
          icon: FiGithub,
        },
        {
          to: "https://id-prawito.github.io/disney-plus/",
          icon: FiExternalLink,
        },
      ],
    },
    {
      style: "row",
      project_to: "https://promethee.ta-spk.xyz",
      project_img: spkPromethee,
      alt: "SPK - Promethee",
      ml: "-80px",
      mr: "0px",
      ai: "flex-end",
      ta: "right",
      text: "Featured Project",
      description:
        "Decision Support System for Priority Determination of Small Dam Construction Development with The Promethee Method (Preference Ranking Organization Methodfor Enrichment Evaluation).",
      tect_list: [
        "VS Code",
        "Laravel",
        "PHP",
        "MySQL",
        "Pond Data",
        "Promethee Method",
      ],
      project_link: [
        {
          to: "#",
          icon: FiGithub,
        },
        {
          to: "https://promethee.ta-spk.xyz",
          icon: FiExternalLink,
        },
      ],
    },
  ],
};
