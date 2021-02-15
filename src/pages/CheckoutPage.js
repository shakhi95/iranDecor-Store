import React from "react";
import { Link } from "react-router-dom";
import { useCartValues } from "../contexts/cart_context";
import imgEmptyCart from "../assets/shopping_cart.png";
import imgPayment from "../assets/online_payment.png";
import { FaCircle } from "react-icons/fa";
import { cent2toman } from "../utils/helpers";

const CheckoutPage = () => {
  //
  const { cartItems, totalAmount } = useCartValues();

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
    <div className="min-vh-100 container py-5">
      <div className="row align-items-center">
        <div className="col-md-7 ps-md-5 text-center text-md-start">
          <h3 className="text-primary mb-5">صورت حساب نهایی</h3>
          <h6 className="mb-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و{" "}
          </h6>
          <small>- ضمانت اصل بودن کالا</small>
          <br />
          <small>- امکان پرداخت در محل</small>
          <br />
          <small>- پشتیبانی 7 روز هفته 24 ساعته</small>
          <br />
          <small>- امکان تحویل اکسپرس</small>
          <br />
        </div>
        <div className="col-md-5 text-center">
          <img
            src={imgPayment}
            alt="imgPayment"
            className="w-100"
            style={{ height: "250px", objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="row p-3 p-md-5 my-3">
        <table className="table table-sm table-light table-hover align-middle text-center">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">نام کالا</th>
              <th scope="col">رنگ</th>
              <th scope="col">تعداد</th>
              <th scope="col">قیمت - دلار</th>
              <th className="d-none d-sm-table-cell" scope="col">
                کد سفارش
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, inx) => {
              return (
                <tr key={inx}>
                  <td>{inx + 1}</td>
                  <td
                    className="text-capitalize"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {item.name}
                  </td>
                  <td>
                    <FaCircle style={{ color: item.color }} />
                  </td>
                  <td>{item.count}</td>
                  <td>{(item.count * item.price) / 100}</td>
                  <td className="d-none d-sm-table-cell">
                    <small style={{ fontFamily: "sans-serif" }}>
                      {item.id + item.color}
                    </small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
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
              <button className="btn btn-sm btn-success py-0">
                تایید اطلاعات و پرداخت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
