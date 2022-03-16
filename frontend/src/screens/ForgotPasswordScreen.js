import React from "react";
import ForgotPass from "../components/ForgotPass";
import Header from "../components/Header";

const ForgotPasswordScreen = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Forgot Password Screen</h1>
      </div>
      <div>
        <ForgotPass />
      </div>
    </>
  );
};

export default ForgotPasswordScreen;
