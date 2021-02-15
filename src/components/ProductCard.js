import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import { cent2toman } from "../utils/helpers";

const ProductCard = ({ id, name, image, price, featured }) => {
  //
  return (
    <Wrapper>
      <div className="position-relative">
        <img
          src={image}
          className="w-100 rounded"
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="img-hover text-center">
          <Link to={`/products/${id}`} className="iconBox bg-info">
            <FaSearch className="fs-5" />
          </Link>
        </div>
        {featured && (
          <div className="featured bg-danger px-2 rounded-pill">
            <small>فروش ویژه</small>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between px-1 my-2">
        <small className="text-muted">{cent2toman(price)}</small>
        <small className="text-capitalize">{name}</small>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .position-relative:hover {
    .img-hover {
      opacity: 1;
    }
  }

  .img-hover {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: opacity 0.5s;
  }

  .iconBox {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    color: white;
    border-radius: 50%;
  }

  .featured {
    position: absolute;
    color: white;
    top: 10px;
    right: 10px;
  }
`;

export default ProductCard;
