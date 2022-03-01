import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

// function App() {
const App = () => {
  return (
    <div>
      <Header />
      <br />
      <main className="py-3">
        <Container>
          <h1>Welcome To Death to Barnes and Nobles</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
