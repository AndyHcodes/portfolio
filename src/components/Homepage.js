import React from "react";
import "../App.css";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="hero-container">
      <h1>Andy Harrison</h1>
      <h1>Full Stack Software Engineer</h1>
      <hr />
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
    </div>
  );
};

export default Homepage;
