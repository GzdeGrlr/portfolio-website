import React from "react";
import styled from "styled-components";
import { aboutMe } from "../contents/contents";

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
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

const Profile = () => {
  return (
    <div id="profile">
      <section>
        <h2 className="title">Profile</h2>
        <div className="profileContainer">
          <div className="profileCard">
            <h3>Profile</h3>
            <div className="infos">
              <div>
                <ul className="bold">
                  <li>Date of Birth: </li>
                  <li>City: </li>
                  <li>Education: </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>23.10.1994</li>
                  <li>İstanbul </li>
                  <li>
                    Boğaziçi University, Philosophy <br /> Undergraduate, 2020{" "}
                    <Hr /> Istanbul University, Computer Programming <br />{" "}
                    Associate degree, 2024{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about">
            <h3>About Me</h3>
            <p>{aboutMe}</p>
          </div>
        </div>
      </section>
      <Line />
    </div>
  );
};

export default Profile;
