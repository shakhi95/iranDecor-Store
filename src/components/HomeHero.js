import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import bg1 from "../assets/hero-bcg.jpg";
import bg2 from "../assets/hero-bcg-2.jpeg";

const HomeHero = () => {
  return (
    <Wrapper className="container py-5">
      <div className="row">
        <div className="col-md-6 px-5">
          <h1 className="text-danger mb-3">
            طراحی خانه خود <br />
            را به ما بسپارید...
          </h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و
          </p>
          <Link to="/products" className="btn btn-info py-0 mt-2">
            مشاهده محصولات
          </Link>
        </div>
        <div className="col-md-6 d-none d-md-block text-center">
          <div id="table" className="position-relative">
            <img
              src={bg1}
              alt="nice table"
              className="img-fluid border rounded"
              style={{
                maxHeight: "400px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <img
              src={bg2}
              alt="nice man"
              className="position-absolute start-0 bottom-0 w-50 border rounded"
              style={{ transform: "translateX(50%)" }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow-x: hidden;

  @keyframes fadeIn {
    from {
      opacity: 0.1;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .col-md-6.d-none {
    animation: fadeIn 2s;
  }

  #table::before {
    content: "";
    height: 80%;
    width: 10%;
    background-color: #decbc0;
    position: absolute;
    right: -7%;
    bottom: 0;
    border-radius: 0.25rem;
    z-index: -1;
  }
`;

export default HomeHero;
