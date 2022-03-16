import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

// function App() {
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <br />
            <main>
              <Container>
                <h1>Welcome To Death to Barnes and Nobles</h1>
                <HomeScreen />
              </Container>
            </main>
            <Footer />
          </>
        }
      ></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route
        path="/login/forgotPassword"
        element={<ForgotPasswordScreen />}
      ></Route>
      <Route path="/signup" element={<SignUpScreen />}></Route>
    </Routes>
  );
};

export default App;
