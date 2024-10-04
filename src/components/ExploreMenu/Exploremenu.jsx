import React, { useState } from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assests/assets'
import Fooddisplay from '../fooddisplay/Fooddisplay';
function Exploremenu() {
const [category,setcatogery]=useState("All");

console.log(category);


  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates perferendis rerum inventore obcaecati enim quam eius in nemo dolor.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setcatogery(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
<img className={category===item.menu_name?"active":""}   src={item.menu_image} alt="" />
<p>{item.menu_name}</p>
            </div>
          )
            })}
        </div>
<hr />
<Fooddisplay category={category}/>

    </div>
  )
}

export default Exploremenu
