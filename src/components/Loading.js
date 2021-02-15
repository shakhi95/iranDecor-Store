import React from "react";
import styled from "styled-components";

const Loading = () => {
  //
  return (
    <Wrapper className="my-5">
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: #0dcaf0;
    animation: spinner 0.6s linear infinite;
  }
`;

export default Loading;
