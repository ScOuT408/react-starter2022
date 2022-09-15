import React from "react";
import styled from "styled-components";

const BannerSec = styled.div`
  margin-top: 4rem;
  background: url("./images/banner-2.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 450px) {
    background-position: left;
  }

  .banner_div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 60rem;
    width: 70%;

    @media (max-width: 450px) {
      width: 100%;
      text-align: center;
    }

    h2 {
      font-size: 3rem;
      text-transform: capitalize;
      font-weight: bold;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      text-transform: capitalize;
      max-width: 40rem;
    }
  }
`;

function Banner() {
  return (
    <BannerSec>
      <div className="banner_div">
        <div className="content">
          <h2> quality matter </h2>
          <p>we have top most prouducts that's make your life easier</p>
        </div>
      </div>
    </BannerSec>
  );
}

export default Banner;
