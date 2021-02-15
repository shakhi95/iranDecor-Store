import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaCircle,
  FaPlusSquare,
  FaMinusSquare,
} from "react-icons/fa";
import { useCartValues } from "../contexts/cart_context";

const SingleAddToCart = ({ product }) => {
  //
  const { id, stock, colors = [] } = product;
  const { addToCart, cartItems } = useCartValues();

  const [colorInx, setColorInx] = useState(0);
  const [count, setCount] = useState(1);
  const [leftItems, setLeftItems] = useState(stock);
  const [visibility, setVisibility] = useState("hidden");

  useEffect(() => {
    let cartCount = 0;
    cartItems.map((item) => {
      if (item.id === id) {
        cartCount = cartCount + item.count;
      }
      return item;
    });
    setLeftItems(stock - cartCount);
  }, [cartItems]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibility("hidden");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [visibility]);

  const oneUp = () => {
    if (count >= leftItems) return;
    setCount((oldCount) => oldCount + 1);
  };

  const oneDown = () => {
    if (count === 1) return;
    setCount((oldCount) => oldCount - 1);
  };

  const renderColors = colors.map((col, inx) => {
    if (inx === colorInx) {
      return (
        <FaCheckCircle className="me-2 fs-5" key={inx} style={{ color: col }} />
      );
    }
    return (
      <FaCircle
        className="me-2 fs-6"
        key={inx}
        style={{ color: col, cursor: "pointer" }}
        onClick={() => setColorInx(inx)}
      />
    );
  });

  return (
    <div className="row user-select-none">
      <div className="col-sm-3">
        <small>موجودی : </small>
      </div>
      <div className="col-sm-9">
        {leftItems === 0 ? (
          <small className="text-danger">موجود نیست.</small>
        ) : (
          <small className="text-success">
            {leftItems} مورد در انبار موجود است.
          </small>
        )}
      </div>
      <hr className="my-3" />
      <small className="mb-2">جزییات سفارش : </small>
      <div className="col-sm-3">
        <small>انتخاب رنگ : </small>
      </div>
      <div className="col-sm-9">
        <div className="d-flex align-items-center">{renderColors}</div>
      </div>
      <div className="col-sm-3 mt-1">
        <small>تـعداد : </small>
      </div>
      <div className="col-sm-9 mt-1">
        <div className="d-flex align-items-center">
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
      <div className="col-sm-9 ms-auto mt-3">
        <div className="d-flex">
          <button
            className="btn btn-sm btn-info py-0 px-3"
            onClick={() => {
              addToCart(product, count, colors[colorInx]);
              setCount(1);
              setVisibility("visible");
            }}
            disabled={leftItems === 0 && true}
          >
            اضافه به سبد خرید
          </button>
          <small
            className="text-success ms-2"
            style={{ visibility: visibility }}
          >
            به سبد خرید اضافه شد.
          </small>
        </div>
      </div>
    </div>
  );
};

export default SingleAddToCart;
