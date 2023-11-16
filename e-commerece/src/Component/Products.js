import React from 'react';
// import { IndividualProduct } from './IndividualProduct';
import '../Component/CardStyle.css';

export const Products = ({ products, addToCart }) => {
  return (
    <div className="cards-container">
      {products.map((individualProduct) => (
        <div key={individualProduct.ID} className="card">
          <img src={individualProduct.url} alt="cart-img" className="Product-image" />
          <div className="card-content">
            <h4>{individualProduct.title}</h4>
            <p>{individualProduct.description}</p>
            <p className="price">
              <span className="orginial-price">Rs.{individualProduct.price}</span>
              <span className="strickout-price"><s>Rs.{individualProduct.strikeoutPrice}</s></span>
              <span className="offer">{individualProduct.offer}</span>
            </p>
            <div className="button">
              <button className="cart-btn btn" onClick={() => addToCart(individualProduct)}>
                Add to Cart
              </button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
