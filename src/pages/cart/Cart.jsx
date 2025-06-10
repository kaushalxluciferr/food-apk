import './Cart.css'
import { Storecontext } from '../../context/Storecontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartitems, food_list, removefromcart, gettotalamount } = useContext(Storecontext)
  const navigate = useNavigate()

  return (
    <>
      <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartitems[item._id] > 0) {
              return (
                <div key={item._id} className='hrr'>
                  <div className='cart-items-title cart-items-item'>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>${item.price * cartitems[item._id]}</p>
                    <p onClick={() => removefromcart(item._id)} className='cancel'>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
            return null
          })}
        </div>

        <div className="cart-bottom">
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
                <p>${gettotalamount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${gettotalamount() === 0 ? 0 : gettotalamount() + 2}</b>
              </div>
            </div>
            <button onClick={() => navigate('/placeorder')}>Proceed To checkout</button>
          </div>

          <div className="cart-promocode">
            <div>
              <p>If you have any promocode, feel free to enter</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='Promocode' />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
