import React from "react";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <section>
      <div className="products_div">
        <div className="filter_search">
          <div className="input-box">
            <input type="text" placeholder="search.." />
            <FaSearch className="search" />
          </div>
        </div>
        <div className="drop-down">
          <select className="select_box">
            <option value="all">all</option>
            <option value="cloths">cloths</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
      </div>
      <section>
        <div className="product_container">
          <ProductCard />
        </div>
      </section>
    </section>
  );
}

export default Products;
