import React from "react";
import Point from "../contents/logos/point.svg";
import { githubLink } from "../contents/contents";
import { linkedinLink } from "../contents/contents";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contactContainer">
        <footer>
          <h3>
            Let’s work together on <br />
            your next product.
          </h3>
          <div className="contactInfo">
            <p>
              <img src={Point} style={{ marginRight: "10px" }} />
              Email:{" "}
              <a className="email" href="mailto:gzde.gurler@gmail.com">
                gzde.gurler@gmail.com
              </a>
            </p>
            <div className="websites">
              <a className="github" href={githubLink} target="_blank">
                Github
              </a>
              <a className="linkedin" href={linkedinLink} target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
