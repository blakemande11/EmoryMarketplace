import express from "express";
import products from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi World");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(3001, console.log("Server on port 3001"));
