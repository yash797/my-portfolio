import chatapp from "../images/chat-app.png";
              
import defaultImage from "../images/default-project.png";
import xenia from "../images/xenia.png";
import xeniaverse from "../images/xeniaverse.png";
import gamex from "../images/game-x.png";
import digiwork from "../images/digiwork.png";

import radiance from "../images/radiance21.jpg";

export const projectsData = [
  {
    name: "XENIA",
    description:
      "We made this site to facilitate a plethora of essential functions of this nation-wide tech-fest. From registrations, displaying content to payments everything was made from scratch and integrated together.",
    image: xenia,
    code: "",
    techStack: ["React JS", "Mongo BD", "Node JS"],
    deployment: "https://www.pcsbxenia.com/",

    // sysArch: "https://www.pcsbxenia.com/",
  },
  {
    name: "Xeniaverse",
    description:
      "The site was made to deploy information of different events and collect registrations for the same.",
    image: xeniaverse,
    code: "",
    deployment: "https://www.xeniaverse.co.in/",
    techStack: [
      "React JS",
      "Tailwind CSS",
      // "MongoDB",
      // "Docker",
      // "Cloudinary",
      // "Terraform",
    ],
    // sysArch: "https://sysarch.burhanuddinmerchant.me/fnf.html",
  },
  {
    name: "Game-X",
    description:
      "Game-X was developed to download and convey information of different games of different genres.",
    image: gamex,

    deployment: "https://nikitak27.github.io/Web-weaver_GameX/index.html",
    techStack: ["Html", "CSS", "Javascript"],
  },

  {
    name: "RAYS",
    description:
      "An E-commerce website integrated with Alan AI. ",
    image: defaultImage,
    code: "",
    deployment: "",
    techStack: ["ReactJS","Alan AI", "Django"],
  },

  {
    name: "Digital Work",
    description: "Click to see all of my digital work",
    image: digiwork,
    // code: "https://github.com/RohinBhat/node-chat-app",
    deployment:
      "https://drive.google.com/drive/folders/1QkWyPUzxKtE3qSqLB9LuVxu_2a1Vbz81?usp=sharing",
    techStack: [
      "Photoshop",
      "Illustrator",
      "Indesign",
      "Canva",
      // "CSS",
      // "Handlebars",
    ],
  },

  // {
  //   name: "Note It Down",
  //   description:
  //     "A Note-taking app along with a to-do list (Tasks) functionality, Note It Down is an app developed for Android devices using Firebase in the backend.",
  //   image: noteitdown,
  //   code: "https://github.com/RohinBhat/NoteItDown",
  //   techStack: ["Android", "Firebase"],
  // },
];