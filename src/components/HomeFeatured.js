import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useProductsValues } from "../contexts/products_context";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

const HomeFeatured = () => {
  //
  const {
    featured_products: products,
    allProducts_loading: loading,
    allProducts_error: error,
  } = useProductsValues();

  const renderFeatured = () => {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <div className="text-center my-5">خطایی رخ داد... دوباره تلاش کنید</div>
      );
    }

    return products.map((product) => {
      return (
        <div key={product.id} className="col-md-6 col-lg-4 my-2">
          <ProductCard {...product} />
        </div>
      );
    });
  };

  return (
    <Wrapper className="py-5">
      <div className="container text-center">
        <h3 className="text-danger">پیشنهاد شگفت انگیز</h3>
        <hr className="line" />
        <div className="row mt-4 px-3">{renderFeatured()}</div>
        <Link className="btn btn-info py-0 mt-5 px-3" to="/products">
          محصولات دیگر...
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #eaded7;

  .line {
    width: 5rem;
    height: 3px;
    background-color: red;
    margin: 0 auto;
  }
`;

export default HomeFeatured;
