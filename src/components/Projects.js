import React from "react";
import "../styles/Projects.css";
import CardItem from "./CardItem";
import weather from "../images/weather.jpg";
import rocket from "../images/rocket.jpg";
import lps from "../images/lps.jpg";

const Projects = () => {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={weather}
              text="This App displays the weather forecast for cities in the UK. There 
              is a search function for city and the ability to provide a more detailed 
              forecast for each day.  The data is taken from a Manchester Codes API. Built with React"
              label="Weather App"
              button="GitHub"
              button1="Live Page"
              href="https://github.com/AndyHcodes/weather-app"
              href1="https://reverent-lalande-2a940c.netlify.app/"
            />
            <CardItem
              src={rocket}
              text="This App was built as part of my Manchester Codes Bootcamp and was
              designed to simulate a standard tech test. The app has a search
              function that sends a request to Nasa for a specific image that then
              displays all images linked to the search word. Built with React"
              label="Tech Test"
              button="GitHub"
              button1="Live Page"
              href="https://github.com/AndyHcodes/tech-test"
              href1="https://tech-test-three.vercel.app/"
            />
            <CardItem
              src={lps}
              text="A joint collaboration with two other Manchester Codes
              students. This is a football selector game that allows you to
              register or login and select a team you think will win. The data is
              stored on MongoDB and live scores and fixture are fetched from an
              API. Built with React"
              label="Last Person Stands"
              button="GitHub"
              button1="Live Page"
              href="https://github.com/JackRandom/last-person-standing"
              href1="https://last-person-standing-git-master.jackrandom1.vercel.app/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
