import React from 'react';
import './css/Product.css';

function Product(props) {
    const { title, image, price, rating } = props;
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img
                src={image}
                alt=""
            />

            <button>Add to basket</button>
        </div>
    )
}

export default Product;
