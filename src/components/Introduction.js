import React from "react";
import { introText } from "../contents/contents";
import Photo from "../contents/introPhoto.jpeg";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { githubLink } from "../contents/contents";
import { linkedinLink } from "../contents/contents";

const Introduction = () => {
  return (
    <div id="intro">
      <div className="lineContainer">
        <div className="line"></div>
        <span>Gözde Gürler</span>
      </div>
      <article className="introContent">
        <div className="introText">
          <h1>Hello there.</h1>
          <p>{introText}</p>
          <div className="introButtons">
            <a href={githubLink} target="_blank">
              <BsGithub
                style={{
                  fontSize: "20px",
                  color: "#3730A3",
                }}
              />
              Github
            </a>
            <a href={linkedinLink} target="_blank">
              <BsLinkedin
                style={{
                  fontSize: "20px",
                  color: "#3730A3",
                }}
              />{" "}
              LinkedIn
            </a>
            <a
              href="#contact"
              style={{ backgroundColor: "#3730A3", color: "white" }}
            >
              <MdEmail
                style={{
                  fontSize: "20px",
                }}
              />{" "}
              Contact
            </a>
          </div>
        </div>
        <div>
          <img className="introImage" src={Photo} alt="introPhoto" />
        </div>
      </article>
    </div>
  );
};

export default Introduction;
