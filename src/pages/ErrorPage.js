import React from "react";
import { Link } from "react-router-dom";

import img404 from "../assets/404.png";

const ErrorPage = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <img src={img404} alt="404" className="img-fluid" />
        <h4 className="mt-2">صفحه مورد نظر یافت نشد.</h4>
        <Link to="/" className="btn btn-info py-0 px-5 mt-3">
          صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
