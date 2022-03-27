import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import products from "../products";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
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
