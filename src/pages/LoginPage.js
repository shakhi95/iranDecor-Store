import React from "react";
import { LoginForm } from "../components";

const LoginPage = () => {
  //
  return (
    <div className="min-vh-100 container py-5">
      <div className="row">
        <div className="col-sm-10 col-md-7 col-lg-5 mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
