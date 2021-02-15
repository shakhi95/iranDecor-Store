import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useProductsValues } from "../contexts/products_context";

const Breadcrumb = () => {
  //
  const path = useLocation().pathname;
  const {
    product: { name },
    oneProduct_loading: loading,
  } = useProductsValues();

  const renderCrumb = () => {
    if (path === "/about") {
      return (
        <>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none" to="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="breadcrumb-item active text-white">درباره ما</li>
        </>
      );
    } else if (path === "/products") {
      return (
        <>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none" to="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="breadcrumb-item active text-white">محصولات ما</li>
        </>
      );
    } else if (path === "/cart") {
      return (
        <>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none" to="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="breadcrumb-item active text-white">سبد خرید</li>
        </>
      );
    } else if (path === "/cart/checkout") {
      return (
        <>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none" to="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none" to="/cart">
              سبد خرید
            </Link>
          </li>
          <li className="breadcrumb-item active text-white">صورت حساب</li>
        </>
      );
    } else if (path.includes("/products/")) {
      return (
        <>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none" to="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none" to="/products">
              محصولات ما
            </Link>
          </li>
          <li className="breadcrumb-item active text-white text-capitalize">
            <small style={{ fontFamily: "sans-serif" }}>
              {loading ? "..." : name}
            </small>
          </li>
        </>
      );
    }
  };

  return (
    <div className="bg-info shadow-sm">
      <div className="container">
        <nav>
          <ol className="breadcrumb py-1" style={{ fontSize: "0.9rem" }}>
            {renderCrumb()}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
