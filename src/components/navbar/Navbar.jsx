import React, { useContext, useState } from "react";
import "./Navbar.css"

import { assets } from "../../assests/assets";

import { Link } from "react-router-dom";
import { Storecontext } from "../../context/Storecontext";

function Navbar({setshow}){
    const [menu,setmenu]=useState("home")

    const {gettotalamount}=useContext(Storecontext)
    return(
        <>
       <div className="navbar">
 <Link to='/'> <img src={assets.logo}  className="logo" /></Link>
<ul className="navbar-menu">
<a   onClick={()=>setmenu("home")} className={menu=="home"?"active":""}>Home</a>
<a href="#explore-menu"  onClick={()=>setmenu("menu")} className={menu=="menu"?"active":""} >Menu</a>
<a href="#app-download"  onClick={()=>setmenu("mobile-app")} className={menu=="mobile-app"?"active":""}>Mobile App</a>
<a href="#footer"  onClick={()=>setmenu("contact-us")} className={menu=="contact-us"?"active":""}>Contact Us</a>
</ul>
<div className="navbar-right">
    <img src={assets.search_icon} alt="" />
    <div className="navbar-search-icon">
     <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>   
        <div className={gettotalamount()===0?"":"dot"}>

        </div>
    </div>
    <button onClick={()=>setshow(true)}>Sign In</button>
</div>
       </div>       
        </>
    )
}
export default Navbar