
import React, { use, useEffect, useState } from "react";
import "./style.css";
export const LoadMore = () => {
  const [loadDataProduct, setLoadDataProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [count, setcount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setLoadDataProduct((prev) => [...prev, ...result.products]);
      }

      // disable button at 100 products
      if (loadDataProduct.length + result.products.length >= 100) {
        setDisable(true);
      }

      useEffect(() => {});
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  console.log(loadDataProduct);

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <div className="conntainer">
      {loadDataProduct && loadDataProduct.length
        ? loadDataProduct.map((item, index) => {
            return (
              <div className="item-container">
                <img src={item.thumbnail} alt="" />
                <h2>{item.title}</h2>
              </div>
            );
          })
        : null}
      <button
        className="showmore"
        disabled={disable}
        onClick={() => setcount(count + 1)}
      >
        {disable ? "no more load" : "show more"}
      </button>
    </div>
  );
};
