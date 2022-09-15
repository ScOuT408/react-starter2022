import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function Cart() {
  return (
    <section>
      <div className="items-info">
        <div className="product-img">
          <img src="./images/cloth.png" alt="iamge" />
        </div>

        <div className="title">
          <h2>title goes here</h2>
        </div>

        <div className="add-minus-quantity">
          <AiOutlineMinus className="plus" />
          <input type="text" placeholder="2" disabled />
          <AiOutlinePlus className="minus" />
        </div>

        <div className="price">
          <h3>2000₹</h3>
        </div>

        <div className="remove-item">
          <MdOutlineRemoveShoppingCart className="btn-remove" />
        </div>
      </div>
      <div className="items-info">
        <div className="product-img">
          <img src="./images/cloth.png" alt="iamge" />
        </div>

        <div className="title">
          <h2>title goes here</h2>
        </div>

        <div className="add-minus-quantity">
          <AiOutlineMinus className="plus" />
          <input type="text" placeholder="2" disabled />
          <AiOutlinePlus className="minus" />
        </div>

        <div className="price">
          <h3>2000₹</h3>
        </div>

        <div className="remove-item">
          <MdOutlineRemoveShoppingCart className="btn-remove" />
        </div>
      </div>
    </section>
  );
}

export default Cart;
