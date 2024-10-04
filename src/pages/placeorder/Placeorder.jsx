import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../context/Storecontext'
function Placeorder() {

const {gettotalamount}=useContext(Storecontext)

  return (
    <>
    <form  className="place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Information </p>
        <div className="multi-fields">
<input type="text" placeholder='First Name'/>
<input type="text" placeholder='Last Name'  />
        </div>
        <input type="email" placeholder='Your Email' />
        <input type="text" placeholder='Street '  />
        <div className="multi-fields">
<input type="text" placeholder='city'/>
<input type="text" placeholder='state'  />
        </div>
        <div className="multi-fields">
<input type="text" placeholder='Zip code '/>
<input type="text" placeholder='Country'  />
        </div>
        <input type="text"placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${gettotalamount()}</p>
            </div>
              <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${gettotalamount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
               <b>Total</b>
               <b>${gettotalamount()+gettotalamount()===0?0:2}</b>

            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
    </>
  )
}

export default Placeorder
