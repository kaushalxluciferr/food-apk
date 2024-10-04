import React, { useContext } from 'react';
import './Fooditem.css';
import { assets } from '../../assests/assets';
import { Storecontext } from '../../context/Storecontext';

function Fooditem({ id, name, price, description, image }) {
    const { cartitems, addtocart, removefromcart } = useContext(Storecontext);

    // Check if this specific item is in the cart
    const itemCount = cartitems[id] || 0;

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {
                    itemCount === 0 ? (
                        <img className='add' onClick={() => addtocart(id)} src={assets.add_icon_white} alt="Add to cart" />
                    ) : (
                        <div className='food-item-counter'>
                            <img onClick={() => removefromcart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
                            <p>{itemCount}</p>
                            <img className='img1' onClick={() => addtocart(id)} src={assets.add_icon_green} alt="Add more" />
                        </div>
                    )
                }
            </div>
            <div className="foot-item-info">
                <div className="food-item-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
}

export default Fooditem;
