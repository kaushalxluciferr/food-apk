import './Cart.css'
import { Storecontext } from '../../context/Storecontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
function Cart() {
const {cartitems,food_list,removefromcart,gettotalamount}=useContext(Storecontext)

const navitage=useNavigate()

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
        <br/>
        <hr/>
        {food_list.map((item,index)=>{  // display the selected cart items 
          if(cartitems[item._id]>0)
          {
            return(
              <div className='hrr'>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>${item.price*cartitems[item._id]}</p>
                <p onClick={()=>removefromcart(item._id)} className='cancel'>X</p>
                </div>
                <hr />
                </div>
            )

            
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>    
<<<<<<< HEAD
              <p>${gettotalamount()}</p> 
=======
              <p>${gettotalamount()}</p> //
>>>>>>> f6be9adbca4940cd0ba4916f000273cc943523fe
            </div>
              <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${gettotalamount()===0?0:2}</p>   {/* if mmy cart is epty then it displays 0 but if there is something on the cart then is displays 2*/}
            </div>
            <hr />
            <div className="cart-total-details">
               <b>Total</b>  {/* totl amnt of the item in the cart*/}
               <b>${gettotalamount()+gettotalamount()===0?0:gettotalamount()+2}</b>

            </div>
          </div>
          <button onClick={()=>navitage('/placeorder')}>Proceed To checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You have any promocode feel free to enter</p>
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