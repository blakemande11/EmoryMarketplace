import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ChatScreen from "./screens/ChatScreen";

// function App() {
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
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
      <Route
        path="/login"
        element={
          <>
            <Header />
            <LoginScreen />
          </>
        }
      ></Route>
      <Route
        path="/chat"
        element={
          <>
            <Header />
            <ChatScreen />
          </>
        }
      ></Route>
      <Route
        path="/login/forgotPassword"
        element={
          <>
            <Header />
            <ForgotPasswordScreen />
          </>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <>
            <Header />
            <SignUpScreen />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default App;
