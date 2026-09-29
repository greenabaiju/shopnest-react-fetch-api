import React, { useEffect, useState } from "react";
import "./home.css";
import electronics from "./assets/electronics.jpg";
import clothing from "./assets/clothing.jpg";
import footwear from "./assets/footwear.jpg";
import books from "./assets/books.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
       response = await response.json();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span>WELCOME TO SHOPNEST</span>

          <h1>
            Discover Products
            <br />
            <b>You Will Love</b>
          </h1>

          <p>
            Shop the latest products at great prices.
            <br />
            Quality products, easy shopping.
          </p>

          <div className="hero-buttons">
            <button className="btn1">Shop Now</button>
            <button className="btn2">Explore Products</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-top">
          <div>
            <span>FEATURED PRODUCTS</span>
            <h2>Popular Products</h2>
            <p>Check out our most popular products</p>
          </div>

          <Link to="/product">View All →</Link>
        </div>

        <div className="product-container">
          {products.slice(0, 4).map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} />
              </div>

              <div className="product-content">
                <small>{product.category}</small>

                <h3>{product.title}</h3>

                <h4>{product.price}</h4>

                <div className="rating">
                  ★★★★★
                  <span>({product.rating.count})</span>
                </div>

                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <div className="section-top">
          <div>
            <span>SHOP BY CATEGORY</span>
            <h2>Find What You Love</h2>
            <p>Explore our popular categories</p>
          </div>

          <a href="#">View All →</a>
        </div>

        <div className="category-container">
          <div className="category-card">
            <img src={electronics} alt="Electronics" />
            <div className="overlay"></div>

            <div className="category-content">
              <span>01</span>
              <h3>Electronics</h3>
              <p>Latest gadgets & technology</p>
              <button>Shop Now →</button>
            </div>
          </div>

          <div className="category-card">
            <img src={clothing} alt="Clothing" />
            <div className="overlay"></div>

            <div className="category-content">
              <span>02</span>
              <h3>Clothing</h3>
              <p>Trendy styles for everyone</p>
              <button>Shop Now →</button>
            </div>
          </div>

          <div className="category-card">
            <img src={footwear} alt="Footwear" />
            <div className="overlay"></div>

            <div className="category-content">
              <span>03</span>
              <h3>Footwear</h3>
              <p>Step into your style</p>
              <button>Shop Now →</button>
            </div>
          </div>

          <div className="category-card">
            <img src={books} alt="Books" />
            <div className="overlay"></div>

            <div className="category-content">
              <span>04</span>
              <h3>Books</h3>
              <p>Discover your next read</p>
              <button>Shop Now →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="offer1">
        <div className="offer-content">
          <span>SPECIAL OFFER</span>

          <h1>Get 20% Off</h1>

          <p>
            Enjoy amazing discounts on selected products. Don't miss this
            limited time offer.
          </p>

          <button>Shop Now</button>
        </div>

        <div className="offer-box">
          <h5>SAVE</h5>
          <b>20%</b>
          <p>OFF</p>
        </div>
      </section>

      <section className="benefits">
        <div className="benefit">
          <div className="icon">🚚</div>

          <div>
            <h3>Free Delivery</h3>
            <p>On orders above ₹999</p>
          </div>
        </div>

        <div className="benefit">
          <div className="icon">🔒</div>

          <div>
            <h3>Secure Payment</h3>
            <p>100% secure checkout</p>
          </div>
        </div>

        <div className="benefit">
          <div className="icon">↩</div>

          <div>
            <h3>Easy Returns</h3>
            <p>Simple return process</p>
          </div>
        </div>

        <div className="benefit">
          <div className="icon">♡</div>

          <div>
            <h3>Quality Products</h3>
            <p>Carefully selected products</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
