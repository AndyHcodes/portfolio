import React, { useState } from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Andy Harrison</h1>

      <p>HTML/CSS | Javascript | React | NodeJS | MySQL | MongoDB | Express</p>
      <div className="social-links">
        <a
          href="https://github.com/AndyHcodes"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
        <a
          href="https://twitter.com/home"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-twitter-square" aria-hidden="true" />
        </a>
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          View CV
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
