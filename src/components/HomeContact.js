import React from "react";
import styled from "styled-components";
import { FaRegEnvelope } from "react-icons/fa";

const HomeContact = () => {
  return (
    <Wrapper className="py-5">
      <div className="container">
        <div className="text-center px-5 mb-4">
          <h3 className="text-danger">عضويت در خبرنامه الكترونيكي سايت</h3>
          <hr className="line mb-3" />
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و
          </p>
        </div>
        <div className="row">
          <div className="col-10 col-md-7 col-lg-5 mx-auto">
            <form
              className="bg-white rounded d-flex align-items-center px-3 py-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <FaRegEnvelope className="fs-5" />
              <input
                type="email"
                className="form-control border-0"
                placeholder="johnDoe@mail.com"
              />
              <button type="submit" className="btn btn-sm btn-info px-3">
                عضویت
              </button>
            </form>
          </div>
        </div>
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

  input:focus,
  input:active {
    border: none !important;
    box-shadow: none !important;
  }
`;

export default HomeContact;
