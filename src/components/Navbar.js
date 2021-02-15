import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCartValues } from "../contexts/cart_context";
import { useUserValues } from "../contexts/user_context";

const Navbar = () => {
  //
  const [show, setShow] = useState(false);
  const { totalItems } = useCartValues();
  const { isSignedIn, signOut } = useUserValues();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-1 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => setShow(false)}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${show ? "d-block" : "d-none"}`}
        >
          <div className="navbar-nav ms-auto">
            <Link
              className={
                useLocation().pathname === "/" ? "nav-link active" : "nav-link"
              }
              to="/"
              onClick={() => setShow(false)}
            >
              صفحه اصلی
            </Link>
            <Link
              className={
                useLocation().pathname === "/products"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/products"
              onClick={() => setShow(false)}
            >
              محصولات
            </Link>
            <Link
              className={
                useLocation().pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/about"
              onClick={() => setShow(false)}
            >
              درباره ما
            </Link>
          </div>
          <div className="navbar-nav ms-auto flex-row justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div>
              <Link
                className="btn btn-sm btn-outline-secondary me-3 position-relative"
                to="/cart"
                onClick={() => setShow(false)}
              >
                <FaShoppingCart /> سبد خرید
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              </Link>
            </div>
            <div>
              {isSignedIn ? (
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={signOut}
                >
                  <FaUserCircle /> خروج
                </button>
              ) : (
                <Link className="btn btn-sm btn-outline-secondary" to="/login">
                  <FaUserCircle /> ورود / ثبت نام
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
