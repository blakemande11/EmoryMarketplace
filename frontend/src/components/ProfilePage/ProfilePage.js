import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/meowrick.jpg";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../Product";
import products from "../../products";
import "./ProfilePage.css";
const ProfilePage = () => {
  return (
    <div className="div-wrapper">
      <div className="card mb-3 div-row">
        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          borderRadius="70"
        />
        <h2 className="m-2">James Ouyang</h2>
        <h5 className="card-title text-muted m-2">
          <i className="fas fa-user"></i> @fname8
        </h5>
        {/* Names */}
        <h3 className="card-header">Contact</h3>
        <div className="card-body">
          {/* Username */}

          <h7 className="card-title text-muted">
            <i className="fa-solid fa-phone"></i> 111-111-1111
          </h7>
          <br></br>
          <h7 className="card-title text-muted">
            <i className="fa-solid fa-envelope"></i> fnmae@emory.edu
          </h7>
        </div>

        <h4 className="card-header">About Me</h4>
        <div className="card-body">
          <h4 className="-title">
            <strong>Bio:</strong>
          </h4>
          <p className="card-body">
            I am a big fan of cats and dogs. I enjoy playing video games,
            sleeping, sleeping, and sleeping
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Major: </strong>Computer Science
          </li>
          <li className="list-group-item">
            <strong>Year: </strong>2023
          </li>
          <li className="list-group-item">
            <strong>Hobbies: </strong>Sleep and Sleep
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Listings</h4>
          <h6 className="card-subtitle mb-2 text-muted">Currently Selling</h6>

          <Row sm={1} md={2} lg={4} xl={5}>
            {products.map((product) => (
              <Col>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
