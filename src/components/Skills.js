import React from "react";
import styled from "styled-components";
import jsLogo from "../contents/logos/js-logo.png";
import reactLogo from "../contents/logos/react-logo.png";
import reduxLogo from "../contents/logos/redux-logo.png";
import cssLogo from "../contents/logos/css-logo.png";
import bootstrapLogo from "../contents/logos/bootstrap-logo.jpg";
import sassLogo from "../contents/logos/sass-logo.png";
import htmlLogo from "../contents/logos/html-logo.png";
import nodejsLogo from "../contents/logos/nodejs-logo.png";
import mySqlLogo from "../contents/logos/mysql-logo.png";
import pythonLogo from "../contents/logos/python-logo.png";

const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #1f2937;
  margin-left: 10%;
  margin-top: 5%;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 6px;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 2% 10%;
  gap: 25px;
  flex-wrap: wrap;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoName = styled.p`
  color: #777777;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  font-size: 15px;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  margin: 5% 10% 0 10%;
`;

const Skills = () => {
  return (
    <div id="skills">
      <section>
        <Title>Skills</Title>
        <SkillsContainer>
          <LogoContainer>
            <Logo src={jsLogo} />
            <LogoName>Javascript</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={reactLogo} />
            <LogoName>React</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={reduxLogo} />
            <LogoName>Redux</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={bootstrapLogo} />
            <LogoName>Bootstrap</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={sassLogo} />
            <LogoName>Sass</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={cssLogo} />
            <LogoName>Css</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={htmlLogo} />
            <LogoName>Html</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={nodejsLogo} />
            <LogoName>Node JS</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={pythonLogo} />
            <LogoName>Python</LogoName>
          </LogoContainer>
          <LogoContainer>
            <Logo src={mySqlLogo} />
            <LogoName>MySQL</LogoName>
          </LogoContainer>
        </SkillsContainer>
      </section>
      <Line />
    </div>
  );
};

export default Skills;
