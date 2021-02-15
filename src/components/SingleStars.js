import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const SingleStars = ({ stars }) => {
  //
  const renderStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index} className="me-1">
        {stars > index + 0.5 ? (
          <BsStarFill style={{ color: "#ffb900" }} />
        ) : stars > index ? (
          <BsStarHalf style={{ color: "#ffb900" }} />
        ) : (
          <BsStar style={{ color: "#ffb900" }} />
        )}
      </span>
    );
  });

  return (
    <div className="d-flex flex-row-reverse align-items-center" title={stars}>
      {renderStars}
    </div>
  );
};

export default SingleStars;
