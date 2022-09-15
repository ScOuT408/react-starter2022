import React from "react";

function LatestProducts() {
  return (
    <div className="latest_product">
      <h2 className="heading"> latest products </h2>
      <section>
        <div className="product__container">
          <div className="product__gridbox">
            <div className="product_box">
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
            <div className="product_box">
              <div className="img_box">
                <img src="./images/watch.png" alt="" />
              </div>
              <h3> apple watch </h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              <div className="price"> &#8377;4000/- </div>
              <div className="cart_button">
                <button> add to cart </button>
              </div>
            </div>
            <div className="product_box">
              <div className="img_box">
                <img src="./images/cloth.png" alt="" />
              </div>
              <h3> black jacket/hoodie </h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              <div className="price"> &#8377;3000/- </div>
              <div className="cart_button">
                <button> add to cart </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestProducts;
