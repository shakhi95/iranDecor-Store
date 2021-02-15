import React from "react";
import { Link } from "react-router-dom";
import { CartItemCard, CartTotals } from "../components";
import { useCartValues } from "../contexts/cart_context";
import imgEmptyCart from "../assets/shopping_cart.png";

const CartPage = () => {
  //
  const { cartItems, clearAllCartItems } = useCartValues();

  if (cartItems.length === 0) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <img
            src={imgEmptyCart}
            alt="imgEmptyCart"
            className="img-fluid w-50"
          />
          <h4 className="my-3">سبد خرید شما خالی میباشد...</h4>
          <Link to="/products" className="btn btn-info py-0 px-5 mt-3">
            مشاهده محصولات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 container py-5 user-select-none">
      <div className="row text-center px-3 mx-1 mx-sm-3">
        <div className="col-6 col-md-5">
          <h6 className="m-0">مـشخصات</h6>
        </div>
        <div className="col-4 col-md-3">
          <h6 className="m-0">تـعداد</h6>
        </div>
        <div className="d-none d-md-block col-md-3">
          <h6 className="m-0">قـیمت</h6>
        </div>
        <div className="col-2 col-md-1">
          <h6 className="m-0">حـذف</h6>
        </div>
      </div>
      <hr className="mt-1" />
      {cartItems.map((item, inx) => {
        return <CartItemCard key={inx} {...item} />;
      })}
      <hr />
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-5 px-3 mx-2">
        <div>
          <Link to="/products" className="btn btn-sm btn-info py-0 px-sm-3">
            مشاهده محصولات دیگر
          </Link>
        </div>
        <div>
          <button
            className="btn btn-sm btn-danger py-0 px-sm-3"
            onClick={clearAllCartItems}
          >
            حـذف تمام موارد
          </button>
        </div>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartPage;
