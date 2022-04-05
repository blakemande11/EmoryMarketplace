import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-2 p-2 card-size">
      <Link to={`/product/${product._id}`}>
        <Card.Img className="photo" src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <strong>{product.name}</strong>
        </Link>
        <Card.Text as="div" className="my-3">
          <div>Course: {product.course}</div>
          <div>Condition: {product.condition}</div>
          <div>Seller: {product.seller} </div>
        </Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
