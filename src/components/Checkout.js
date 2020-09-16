import React from 'react';
import { useStateValue } from '../contexts/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './css/Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout ad"
                />
                <div>
                    <h5 className="user__details" >Hello {user?.email}</h5>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                    {}
                    {basket.length > 0 ? basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    )) :
                        <p className="empty__cart">You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                    }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
