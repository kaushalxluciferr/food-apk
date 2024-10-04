import { createContext, useEffect, useState } from "react";

export const Storecontext=createContext(null);
import { food_list } from "../assests/assets";
const Storecontextprovider=(props)=>{


const [cartitems,setcartitem]=useState({});



//function to add items on teh cart
const addtocart=(itemid)=>{
if(!cartitems[itemid])
{
    setcartitem((prev)=>({...prev,[itemid]:1}))  //if my item is added for the first time then  it initializes by the one
}
else{
setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))  //increases the no of items value by one 
}
}

//function to remove item and no of items from the cart
const removefromcart=(itemid)=>
{
setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}

// useEffect(()=>{
// console.log(cartitems);

// },[cartitems]) // when the cartitem is update 


const gettotalamount=()=>{
    let totalamount=0;
    for(let item in cartitems)
    {
        if(cartitems[item]>0)
        {
       let iteminfo=food_list.find((product)=>product._id===item)
       totalamount +=iteminfo.price*cartitems[item];
        }
    }
    return totalamount;
}


    const contextvalue={
food_list,cartitems,setcartitem,addtocart,removefromcart,gettotalamount
    }
    
    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default Storecontextprovider