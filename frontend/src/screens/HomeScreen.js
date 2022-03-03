import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h2>Latest Products</h2>

      <Row sm={1} md={2} lg={4} xl={5}>
        {products.map((product) => (
          <Col>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
