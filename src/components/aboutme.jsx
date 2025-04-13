import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>About Me</p>
          </div>
          <div className="card-back">
            <p>
              Hey! I'm Anshuman Sahu, a CS & Engineering student from India. I
              specialize in full-stack web development using the MERN stack
              (MongoDB, Express.js, React, Node.js), and I actively practice
              Data Structures and Algorithms in C++ to sharpen my
              problem-solving skills. I'm always eager to learn, build, and
              contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 200px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    background-color: #6a2c70;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #6a2c70;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
  }

  .card-back {
    background-color: #f08a5d;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #f08a5d;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
  }
`;

export default Card;
