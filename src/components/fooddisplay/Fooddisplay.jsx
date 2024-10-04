import React from 'react'
import './Fooddisplay.css'
import { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../fooditem/Fooditem';

function Fooddisplay({category}) {
   console.log(category);
    
    const {food_list}=useContext(Storecontext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes Around You</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
      
         if(category==="All"||category===item.category)
         {
          return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
         }

 
        })        }
      </div>
    </div>
  )
}

export default Fooddisplay
