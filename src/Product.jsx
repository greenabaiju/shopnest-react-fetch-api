
import React, { useEffect, useState } from "react";
import "./product.css";

const Product = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="products">

      <div className="product-title">
        <span>OUR PRODUCTS</span>
        <h1>All Products</h1>
        <p>Explore our collection of products.</p>
      </div>

      <div className="product-container">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.title} />

            <small>{product.category}</small>

            <h3>{product.title}</h3>

            <h4>{product.price}</h4>

            <p>★★★★★</p>

            <button>Add to Cart</button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Product;

