import React from "react";

function ProductView() {
  return (
    <div className="view_container">
      <div className="grid_box">
        <div className="img__box">
          <img src="../images/watch.png" alt="name" />
        </div>
        <div className="content">
          <h2> Product Name </h2>
          <h3> Category Name </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            itaque error placeat voluptatem, deleniti eius nam vitae suscipit
            libero quae reiciendis ullam iure, nisi obcaecati accusantium, iusto
            maxime perferendis at!
          </p>
          <div className="flex__buttons">
            <button> add to cart </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
