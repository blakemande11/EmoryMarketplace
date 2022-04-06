import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/meowrick.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./ProfilePage.css";
import Product from "./images/Product2";
import products from "./images/products2";
import Rating1 from "../userStars/userStars";
import axios from "axios";

const ProfilePage = () => {
  const { username } = useParams();
  const [users, product, setProducts, setUser] = useState({});

  useEffect(() => {
    const fetchuser = async () => {
      const { data } = await axios.get(`/api/users/${username}`);
      setUser(data);
    };
    fetchuser();
  }, []);

  return (
    <>
      <div className="div-wrapper2">
        <h2>Profile Page</h2>
      </div>
      <div className="div-wrapper">
        <div className="card mb-3 div-row w-50 ">
          <ReactRoundedImage
            image={users.image}
            roundedColor="#321124"
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
          />
          <h2 className="m-2">{users.name}</h2>
          <h5 className="card-title text-muted m-2">
            <i className="fas fa-user"></i> @{users.username}
          </h5>
          <div className="mx-2">
            <Rating1
              rating={users.rating}
              numReview={` ${users.reviews} reviews`}
            />
          </div>

          <br />
          {/* Names */}
          <h3 className="card-header bg-info text-white">Contact</h3>
          <div className="card-body">
            {/* Username */}

            <h7 className="card-title text-muted">
              <i className="fa-solid fa-phone"></i> {users.phone}
            </h7>
            <br></br>
            <h7 className="card-title text-muted">
              <i className="fa-solid fa-envelope"></i> {users.email}
            </h7>
          </div>
          <h4 className="card-header bg-info text-white">About Me</h4>
          <div className="card-body">
            <h4 className="-title">
              <strong>Bio:</strong>
            </h4>
            <p className="card-body">{users.bio}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Major: </strong>
              {users.major}
            </li>
            <li className="list-group-item">
              <strong>Year: </strong>
              {users.year}
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
