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
import ProfileScreen from "./screens/ProfileScreen";
import ItemScreen from "./screens/ItemScreen";
import HeaderSignedIn from "./components/HeaderSignedIn";

// function App() {
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeaderSignedIn />
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
        //not sure how to change this
        path="/product/2"
        element={
          <>
            <Header />
            <ItemScreen />
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
        path="/Profile"
        element={
          <>
            <HeaderSignedIn />
            <ProfileScreen />
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
