import React, { useState } from "react";
import styled from "styled-components";

const SingleGalley = ({ images = [[]] }) => {
  //
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <Wrapper className="container">
      <div className="row bg-dark rounded">
        <img
          src={mainImg.url}
          alt={mainImg.id}
          className="p-0 shadow-sm main"
        />
      </div>
      <div className="row mt-1">
        {images.slice(0, 4).map((img, inx) => {
          const classname =
            img.id === mainImg.id
              ? "p-0 rounded border shadow-sm small active"
              : "p-0 rounded border shadow-sm small";

          return (
            <div key={inx} className="col-6 col-lg-3 my-1">
              <img
                src={img.url}
                alt={img.id}
                className={classname}
                onClick={() => setMainImg(images[inx])}
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .active {
    border: 1px solid red !important;
  }

  .main {
    height: 500px;
    width: 100%;
    object-fit: contain;
  }

  .small {
    height: 100px;
    cursor: pointer;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    small {
      height: 50px;
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    small {
      height: 75px;
    }
  }
`;

export default SingleGalley;
