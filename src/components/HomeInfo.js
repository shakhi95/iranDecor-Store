import React from "react";
import styled from "styled-components";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

const HomeInfo = () => {
  return (
    <Wrapper className="py-5">
      <div className="container">
        <div className="text-center px-5">
          <h3 className="text-danger">ساخت محصولات ویژه برای مشتریان ویژه</h3>
          <hr className="line mb-3" />
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 p-3">
            <div className="card bg-light text-center p-4">
              <div className="iconBox bg-info">
                <GiCompass className="fs-2" />
              </div>
              <h5 className="fw-bold">قدمت وتجربه</h5>
              <p className="text-muted">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card bg-light text-center p-4">
              <div className="iconBox bg-info">
                <GiDiamondHard className="fs-2" />
              </div>
              <h5 className="fw-bold">طراحی هوشمند</h5>
              <p className="text-muted">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card bg-light text-center p-4">
              <div className="iconBox bg-info">
                <GiStabbedNote className="fs-2" />
              </div>
              <h5 className="fw-bold">برنامه ریزی</h5>
              <p className="text-muted">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .line {
    width: 5rem;
    height: 3px;
    background-color: red;
    margin: 0 auto;
  }

  .iconBox {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    border-radius: 50%;
    margin: 1rem auto;
  }
`;

export default HomeInfo;
