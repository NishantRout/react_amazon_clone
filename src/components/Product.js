import React from 'react';
import './css/Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐️</p>
                </div>
            </div>

            <img
                className="product__image"
                src="https://images-na.ssl-images-amazon.com/images/I/81lyNVQ6iXL._SL1500_.jpg"
                alt=""
            />

            <button>Add to basket</button>
        </div>
    )
}

export default Product;
