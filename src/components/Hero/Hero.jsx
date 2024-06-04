import React from "react";
import "./Hero.css";
import me from "../../assets/me.png";
import Arrow from "../../assets/Arrow.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="Eclypse"></div>
        <div className="Eclypse2"></div>
        <img src={me} alt="Me" className="Me" />
        <img src={Arrow} alt="Arrow" className="Arrow" />
      </div>
    </section>
  );
};

export default Hero;
