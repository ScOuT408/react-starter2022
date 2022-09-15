import React from "react";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";

const ProductCardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.5rem, 1fr));
  gap: 2rem;
  place-items: center;

  .product__card {
    background: rgb(255, 251, 251);
    width: 100%;
    padding: 1rem 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-bottom-right-radius: 5rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    position: relative;

    span {
      position: absolute;
      top: 1rem;
      right: 2rem;
      z-index: 1000;
      padding: 1rem 1rem;
      cursor: pointer;
      background: #ececec;
      border-radius: 4.5rem;
      box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
      .eye {
        font-size: 2rem;
      }
    }

    &:hover img {
      transition: 0.25s ease-in-out;
      transform: scale(1.1);
    }

    .img_box {
      width: 13rem;
      height: 17rem;
      margin: 2rem auto;

      img {
        width: 100%;
        height: 95%;
      }
    }

    h3 {
      font-size: 2rem;
      text-transform: capitalize;
      text-align: center;
      font-weight: bold;
      margin-bottom: 0.6rem;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .price {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }

    .cart_button {
      margin-top: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;

      button {
        padding: 1rem 2.9rem;
        cursor: pointer;
        text-transform: capitalize;
        background: rgb(63, 64, 65);
        color: #fff;
        font-size: 1.7rem;
        font-weight: bold;
        border: 0.1rem solid rgba(0, 0, 0, 0.05);
        border-bottom-right-radius: 2rem;
      }
    }
  }
`;

function ProductCard() {
  return (
    <ProductCardDiv>
      <div className="product__card">
        <span>
          <FaEye className="eye" />
        </span>
        <div className="img_box">
          <img src="./images/headphone.png" alt="" />
        </div>
        <h3> boat headphone </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <div className="price"> &#8377;2000/- </div>
        <div className="cart_button">
          <button> add to cart </button>
        </div>
      </div>
      <div className="product__card">
        <span>
          <FaEye className="eye" />
        </span>
        <div className="img_box">
          <img src="./images/headphone.png" alt="" />
        </div>
        <h3> boat headphone </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <div className="price"> &#8377;2000/- </div>
        <div className="cart_button">
          <button> add to cart </button>
        </div>
      </div>
      <div className="product__card">
        <span>
          <FaEye className="eye" />
        </span>
        <div className="img_box">
          <img src="./images/headphone.png" alt="" />
        </div>
        <h3> boat headphone </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <div className="price"> &#8377;2000/- </div>
        <div className="cart_button">
          <button> add to cart </button>
        </div>
      </div>
      <div className="product__card">
        <span>
          <FaEye className="eye" />
        </span>
        <div className="img_box">
          <img src="./images/headphone.png" alt="" />
        </div>
        <h3> boat headphone </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <div className="price"> &#8377;2000/- </div>
        <div className="cart_button">
          <button> add to cart </button>
        </div>
      </div>
    </ProductCardDiv>
  );
}

export default ProductCard;
