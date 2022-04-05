import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/meowrick.jpg";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./ProfilePage.css";
import Product from "./images/Product2";
import products from "./images/products2";
import Rating1 from "../userStars/userStars";

const ProfilePage = () => {
  return (
    <>
      <div className="div-wrapper2">
        <h2>Profile Page</h2>
      </div>
      <div className="div-wrapper">
        <div className="card mb-3 div-row w-50 ">
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
          <div className="mx-2">
            <Rating1 rating={3.6} numReview={" 3 reviews"} />
          </div>

          <br />
          {/* Names */}
          <h3 className="card-header bg-info text-white">Contact</h3>
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
          <h4 className="card-header bg-info text-white">About Me</h4>
          <div className="card-body">
            <h4 className="-title">
              <strong>Bio:</strong>
            </h4>
            <p className="card-body">I am</p>
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

        <div className="card w-50 h-10">
          <h2 className="card-header bg-info text-white mb-2">Listings</h2>
          <div className="card-body   h-10">
            {products.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
