import React from "react";
import { Link } from "react-router-dom";
import { useCartValues } from "../contexts/cart_context";
import { useUserValues } from "../contexts/user_context";

import { cent2toman } from "../utils/helpers";

const CartTotals = () => {
  //
  const { totalAmount } = useCartValues();
  const { isSignedIn } = useUserValues();

  return (
    <div className="row">
      <div className="col-md-6 mx-auto text-center">
        <div className="bg-light rounded border border-info py-3 px-4 shadow">
          <div className="d-flex justify-content-between mb-2">
            <small className="fw-bold">جـمع : </small>
            <small>{totalAmount.toFixed(2)} دلار</small>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <small className="fw-bold">مـالـیات (9%) : </small>
            <small>{(totalAmount * 0.09).toFixed(2)} دلار</small>
          </div>
          <hr className="my-2" />
          <div className="d-flex justify-content-between mb-2">
            <small>هزینه نهایی - دلار : </small>
            <small>{(totalAmount * 1.09).toFixed(2)} دلار</small>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <small>هزینه نهایی - تومان : </small>
            <small>{cent2toman(parseInt(totalAmount * 1.09 * 100))}</small>
          </div>
          <div className="mt-5">
            {isSignedIn ? (
              <Link
                to="/cart/checkout"
                className="btn btn-sm btn-success w-100"
              >
                مشاهده صورت حساب و ادامه خرید
              </Link>
            ) : (
              <small>
                برای تکمیل خرید، ابتدا{" "}
                <Link to="/login" className="text-decoration-none">
                  وارد
                </Link>{" "}
                حساب کاربری خود شوید.
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
