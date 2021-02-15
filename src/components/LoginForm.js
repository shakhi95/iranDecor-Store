import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserValues } from "../contexts/user_context";

const LoginForm = () => {
  //
  const [selectedForm, setSelectedForm] = useState("login");
  const history = useHistory();
  const { signIn } = useUserValues();

  const goBack = () => {
    history.goBack();
  };

  const singIngoBack = () => {
    signIn();
    history.goBack();
  };

  return (
    <div className="bg-white rounded p-4 text-center">
      <h5 className="text-primary">ورود / ثبت نام کاربر</h5>
      <div className="btn-group btn-group-sm w-100 my-4">
        <button
          type="button"
          className={`btn btn-outline-info ${
            selectedForm === "register" && "active"
          }`}
          onClick={() => setSelectedForm("register")}
        >
          ثبت نام
        </button>
        <button
          type="button"
          className={`btn btn-outline-info ${
            selectedForm === "login" && "active"
          }`}
          onClick={() => setSelectedForm("login")}
        >
          ورود
        </button>
      </div>
      <div className="text-start">
        {selectedForm === "login" ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <small>نام کاربری :</small>
              <input
                type="text"
                className="form-control"
                value="khalil_shakhi"
                disabled
              />
            </div>
            <div className="mb-3">
              <small>رمز عبور :</small>
              <input
                type="password"
                className="form-control"
                value="sdfsdfsfsd"
                style={{ letterSpacing: "0.2rem" }}
                disabled
              />
            </div>
            <button
              className="btn btn-sm btn-info w-100 my-2"
              onClick={singIngoBack}
            >
              ورود
            </button>
            <button className="btn btn-sm btn-secondary w-100" onClick={goBack}>
              انصراف
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <small>نام کاربری :</small>
              <input
                type="text"
                className="form-control"
                value="khalil_shakhi"
                disabled
              />
            </div>
            <div className="mb-3">
              <small>رمز عبور :</small>
              <input
                type="password"
                className="form-control"
                value="sdfsdfsfsd"
                style={{ letterSpacing: "0.2rem" }}
                disabled
              />
            </div>
            <div className="mb-3">
              <small>تکرار رمز عبور :</small>
              <input
                type="password"
                className="form-control"
                value="sdfsdfsfsd"
                style={{ letterSpacing: "0.2rem" }}
                disabled
              />
            </div>
            <button
              className="btn btn-sm btn-info w-100 my-2"
              onClick={singIngoBack}
            >
              ثبت نام
            </button>
            <button className="btn btn-sm btn-secondary w-100" onClick={goBack}>
              انصراف
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
