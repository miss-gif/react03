import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <p className="home__subtitle text-cs">
          Hello, <span>My Name Is</span>
        </p>
        <h1 className="home__title text-cs">
          <span>ZON</span> SMIS
        </h1>
        <p className="home__job">
          <span className="text-cs">
            I Am <b>Web Developer</b>
          </span>
        </p>
        <p className="home__text">
          From France, Paris. I have rich experience in web design, also I am good at wordpress. I Love to talk with you about our unique
        </p>
        <div className="home__socials">
          <a href="#" className="home__social-link">
            <FaTwitter></FaTwitter>
          </a>
          <a href="#" className="home__social-link">
            <FaDribbble></FaDribbble>
          </a>
          <a href="#" className="home__social-link">
            <FaBehance></FaBehance>
          </a>
        </div>
        <div className="home__btns">
          <a href="#" className="btn">
            Download Cv
          </a>
          <a href="#" className="hero__link">
            My Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
