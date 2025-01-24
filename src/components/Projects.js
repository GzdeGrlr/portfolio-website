import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import PizzaDot from "../contents/pagePhotos/pizza-store.png";
import { pizzaStoreText } from "../contents/contents";
import RandomJokes from "../contents/pagePhotos/random-jokes.png";
import { randomJokesText } from "../contents/contents";
import PropertyPulse from "../contents/pagePhotos/PropertyPulse.png";
import { propertyPulseText } from "../contents/contents";
import { BsChevronDoubleRight } from "react-icons/bs";

const Projects = () => {
  return (
    <div id="projects">
      <section>
        <h2 className="title">Projects</h2>
        <div className="projectsContainer">
          <div>
            <Card style={{ width: "28rem", minHeight: "650px" }}>
              <Card.Img
                variant="top"
                src={PizzaDot}
                style={{
                  width: "398px",
                  height: "240px",
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#3730A3",
                    fontWeight: "500",
                    fontSize: "30px",
                    marginBottom: "15px",
                    marginTop: "20px",
                  }}
                >
                  Pizza DOT
                </Card.Title>
                <Card.Text style={{ color: "#6b7280" }}>
                  {pizzaStoreText}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #React
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #Router
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #Axios
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 15px 6px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #Cypress
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="links" style={{ marginTop: "15px" }}>
                <Card.Link
                  href="https://github.com/GzdeGrlr/pizza-store-form"
                  target="_blank"
                  style={{ display: "flex" }}
                >
                  View on Github <BsChevronDoubleRight />
                </Card.Link>
                <Card.Link
                  href="https://pizza-store-form-neoa8gjs0-gzdegrlr.vercel.app/"
                  target="_blank"
                >
                  Go to app <BsChevronDoubleRight />
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "28rem", minHeight: "650px" }}>
              <Card.Img
                variant="top"
                src={RandomJokes}
                style={{
                  width: "398px",
                  height: "240px",
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#3730A3",
                    fontWeight: "500",
                    fontSize: "30px",
                    marginBottom: "15px",
                    marginTop: "20px",
                  }}
                >
                  Give it a laugh!
                </Card.Title>
                <Card.Text style={{ color: "#6b7280" }}>
                  {randomJokesText}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush box-2">
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #React
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #Redux
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #Router
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 15px 6px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #Axios
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="links" style={{ marginTop: "15px" }}>
                <Card.Link
                  href="https://github.com/GzdeGrlr/give-it-a-laugh"
                  target="_blank"
                >
                  View on Github <BsChevronDoubleRight />
                </Card.Link>
                <Card.Link
                  href="https://give-it-a-laugh.vercel.app/"
                  target="_blank"
                >
                  Go to app <BsChevronDoubleRight />
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "28rem", minHeight: "650px" }}>
              <Card.Img
                variant="top"
                src={PropertyPulse}
                style={{
                  width: "398px",
                  height: "240px",
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#3730A3",
                    fontWeight: "500",
                    fontSize: "30px",
                    marginBottom: "15px",
                    marginTop: "20px",
                  }}
                >
                  Property Pulse
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#6b7280",
                    height: "96px",
                  }}
                >
                  {propertyPulseText}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush box-3">
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #NextJS
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #Next Auth
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "1px solid #3730A3",
                    padding: "6px 18px 7px",
                    background: "#FFFFFF",
                    borderRadius: "4px",
                    fontWeight: "500",
                    color: "#3730A3",
                  }}
                >
                  #MongoDB
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="links" style={{ marginTop: "15px" }}>
                <Card.Link
                  href="https://github.com/GzdeGrlr/PropertyPulse"
                  target="_blank"
                >
                  View on Github <BsChevronDoubleRight />
                </Card.Link>
                <Card.Link
                  href="https://property-pulse-taupe-two.vercel.app/"
                  target="_blank"
                >
                  Go to app <BsChevronDoubleRight />
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
