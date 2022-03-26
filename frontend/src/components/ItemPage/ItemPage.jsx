import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import "./itempage.css";

class ItemPage extends Component {
  render() {
    return (
      <div className="item-wrapper" style={{}}>
        <div className="img-wrapper">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/419hvpJ48fL._SX400_BO1,204,203,200_.jpg"
            className="rounded pt-2 pb-2"
            alt="..."
            style={{ maxWidth: "21.9rem" }}
          />
        </div>
        <h1 className="txt-left w-75">
          <i>Algorithms</i>
        </h1>
        <div className="tags" style={{}}>
          <h5 className="txt-left m-1">
            <b>Tags: </b>
          </h5>
          <button className="rounded-pill btn btn-warning btn-sm m-1">
            <b>CS 253</b>
          </button>
          <button className="rounded-pill btn btn-warning btn-sm m-1">
            Computer Science
          </button>
          <button className="rounded-pill btn btn-warning btn-sm m-1">
            Fair
          </button>
        </div>
        <h5 className="txt-left w-75">
          <b>Description: </b>This is a description. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h5>
        <Container fluid>
          <Row className="item-bar">
            <Col className="bar-col1">
              <img
                src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"
                className="rounded pt-2 pb-2 mr-2"
                alt="..."
                style={{ maxWidth: "75px" }}
              />
              <h5 className="ml-2">
                <b>
                  <u>First Name Last Name</u>
                </b>
              </h5>
            </Col>
            <Col className="bar-col1">
              <h3 className="m-5">
                <b>$7</b>
              </h3>
              <Button variant="primary" size="lg">
                Chat
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ItemPage;
