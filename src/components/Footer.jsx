import React from "react";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <a href="/" className="logo">
              ecom
            </a>
            <p>
              The customer is at the heart of our unique business model, which
              includes design
            </p>
            <img src="./images/payment.png" alt="" className="payment" />
          </div>
          <div className="box left">
            <h3>SHOPPING</h3>
            <ul>
              <li>Clothing Store</li>
              <li>Trending Shoes</li>
              <li>Accessories</li>
              <li>Sale</li>
            </ul>
          </div>
          <div className="box right">
            <h3>SHOPPING</h3>
            <ul>
              <li>Contact Us</li>
              <li>Payment Methods</li>
              <li>Delivary</li>
              <li>Return & Exchanges</li>
            </ul>
          </div>
          <div className="box">
            <h3>NEWLETTER</h3>
            <p>
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            <form>
              <input type="mail" placeholder="your mail" />
            </form>
          </div>
        </div>
        <footer className="credit">
          created by <span> biswajeet dash </span> || all rights reserved 2022
        </footer>
      </section>
    </>
  );
}

export default Footer;
