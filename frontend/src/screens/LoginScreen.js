import React, { Component } from "react";
import Login from "../components/Login";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginScreen = () => {
  return (
    <div class="center">
      <Header />
      <div>
        <h1>Login Screen</h1>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default LoginScreen;
