import React from "react";
import {
  FaTrashAlt,
  FaCircle,
  FaPlusSquare,
  FaMinusSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartValues } from "../contexts/cart_context";

const CartItemCard = (props) => {
  //
  const { id, name, color, count, img, price } = props;
  const { clearOneCartItem, cartItemUpOne, cartItemDownOne } = useCartValues();

  const oneUp = () => {
    cartItemUpOne(id, color);
  };

  const oneDown = () => {
    if (count === 1) return;
    cartItemDownOne(id, color);
  };

  return (
    <div className="row text-center align-items-center bg-white rounded py-2 px-3 my-3 mx-1 mx-sm-3">
      <div className="col-6 col-md-5">
        <div className="row align-items-center">
          <div className="d-none d-md-block col-md-5">
            <img
              src={img}
              alt={name}
              className="rounded w-100"
              style={{ height: "100px", objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-md-7 text-start">
            <Link to={`/products/${id}`} className="text-decoration-none">
              <h6 className="text-capitalize m-0 fw-bold">{name}</h6>
            </Link>
            <small>
              رنگ : <FaCircle style={{ color: color }} />
            </small>
            <br />
            <small className="text-muted" style={{ fontSize: "0.7rem" }}>
              {price / 100} دلار
            </small>
            <br className="d-md-none" />
            <small className="d-md-none" style={{ fontSize: "0.7rem" }}>
              کل : {(count * price) / 100} دلار
            </small>
          </div>
        </div>
      </div>
      <div className="col-4 col-md-3">
        <div className="d-flex align-items-center justify-content-center">
          <FaPlusSquare
            style={{ fontSize: "0.7rem", cursor: "pointer" }}
            onClick={oneUp}
          />
          <h6 className="my-0 mx-3 ">{count}</h6>
          <FaMinusSquare
            style={{ fontSize: "0.7rem", cursor: "pointer" }}
            onClick={oneDown}
          />
        </div>
      </div>
      <div className="d-none d-md-block col-md-3">
        <small>{(count * price) / 100} دلار</small>
      </div>
      <div className="col-2 col-md-1">
        <button
          className="btn btn-sm btn-outline-danger border-0"
          onClick={() => clearOneCartItem(id, color)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
