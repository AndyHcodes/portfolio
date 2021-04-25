import React, { useState } from "react";
import "../styles/Aboutme.css";
import profilefour from "../images/profilefour.png";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme__container">
        <div className="about__wrapper">
          <img
            className="profile-image"
            src={profilefour}
            alt="me"
            height="300px"
            width="300px"
            borderRadius="50%"
          />

          <h1>About Me</h1>
        </div>

        <div className="about__wrapper">
          <p>
            A Software Engineer, having completed the Manchester Codes Software
            Engineer Bootcamp in February 2021. With over 16 years of experience
            in the banking sector, I am now seeking a role in Software
            Engineering, bringing with me a wealth of skills and professional
            experience. I am a keen learner and would like to land a role where
            I can satisfy my passion for further learning and development.{" "}
            <br /> <br />I am passionate about sport, both playing and watching
            as well as music, films and books. When I am not spending time with
            my very lively two year old daughter, I am generally on my bike or
            attending a sporting event or gig. I love outdoor adventures having
            cycled across Italy and kayaked the Caledonian canal. I also love to
            travel having visited New York, Boston, Toronto, Montreal, Brisbane
            and Hong Kong in recent years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
