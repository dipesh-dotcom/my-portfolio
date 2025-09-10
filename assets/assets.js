import logo from "./logo.png";
import profile_image from "./profile_image.png";
import user_image from "./user_image.png";
import arrow_icon from "./arrow-icon.png";
import menu_black from "./menu-black.png";
import close_black from "./close-black.png";
import hand_icon from "./hand-icon.png";
import download_icon from "./download-icon.png";
import code_icon from "./code-icon.png";
import edu_icon from "./edu-icon.png";
import project_icon from "./project-icon.png";
import vscode from "./vscode.png";
import git from "./git.png";
import figma from "./figma.png";
import docker from "./docker.png";
import postman from "./postman.png";
import facebook from "./facebook.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import gmail from "./gmail.png";
import whatsapp from "./whatsapp.png";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import python from "./python.png";
import django from "./django.png";
import node from "./nodejs.png";
import mysql from "./mysql.png";
import postgresql from "./postgre.png";
import language from "./language.png";
import library from "./library.png";
import db from "./db.png";
import portfolio_builder from "./portfolio_builder.png";
import blood_bank from "./blood_bank.png";
import blog from "./blog.png";
import right_arrow_white from "./right-arrow-white.png";
export const assets = {
  logo,
  profile_image,
  user_image,
  arrow_icon,
  menu_black,
  close_black,
  hand_icon,
  download_icon,
  code_icon,
  edu_icon,
  project_icon,
  vscode,
  git,
  figma,
  docker,
  postman,
  facebook,
  whatsapp,
  github,
  linkedin,
  gmail,
  html,
  css,
  js,
  react,
  python,
  django,
  node,
  mysql,
  postgresql,
  language,
  library,
  db,
  portfolio_builder,
  blood_bank,
  blog,
  right_arrow_white,
};

export const infoList = [
  {
    icon: assets.code_icon,
    title: "Skills",
    description: "HTML, CSS, JavaScript React Js, Pyhton, Django",
  },
  {
    icon: assets.edu_icon,
    title: "Education",
    description: "Bachelor of Computer Application in Everest College",
  },
  {
    icon: assets.project_icon,
    title: "Projects",
    description: "Built more than 3 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.postman,
  assets.docker,
  assets.figma,
  assets.git,
];

export const techStack = [
  {
    icon: assets.language,
    title: "Languages",
    tech: [
      {
        title: "HTML",
        icon: assets.html,
      },
      {
        title: "CSS",
        icon: assets.css,
      },
      {
        title: "JavaScript",
        icon: assets.js,
      },
      {
        title: "Python",
        icon: assets.python,
      },
    ],
  },
  {
    icon: assets.library,
    title: "Libraries/Frameworks",
    tech: [
      {
        title: "React,js",
        icon: assets.react,
      },
      {
        title: "Django",
        icon: assets.django,
      },
      {
        title: "Node.js",
        icon: assets.node,
      },
    ],
  },
  {
    icon: assets.db,
    title: "Databases",
    tech: [
      {
        title: "MySql",
        icon: assets.mysql,
      },
      {
        title: "PostgreSql",
        icon: assets.postgresql,
      },
    ],
  },
];

export const workList = [
  {
    img: assets.portfolio_builder,
    title: "Portfolio Builder System",
    description:
      "This systen create the portfolio of user as their cradetials.",
    github_link: "https://github.com/dipesh-dotcom/portfolio-builder",
  },
  {
    img: assets.blood_bank,
    title: "Blood Bank Management System",
    description: "This system helps to manage and distribute blood.",
    github_link: "https://github.com/blood-bank-project/blood-bank-project",
  },
  {
    img: assets.blog,
    title: "Blog Website",
    description: "This system helps to manage blog of ther user.",
    github_link: "https://github.com/dipesh-dotcom/Blog-Website-Django",
  },
];
