import React, { useState } from 'react'
import Catey from "@iconscout/react-unicons/icons/uil-window-section"
import Menu from "@iconscout/react-unicons/icons/uil-bars"
import "./Navbar.css"
const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className='navbar'>
            <div className="container">
                <div className="row">
                    <div className="left">
                        <div className="box">
                            <Catey></Catey>
                            <span>Categories</span>
                        </div>
                    </div>
                    <div  className={`right ${open?"active":""}`}>
                        <ul>
                            <li onClick={()=>setOpen(!open)}><a href="#">Home</a></li>
                            <li onClick={()=>setOpen(!open)}><a href="#">Pages</a></li>
                            <li onClick={()=>setOpen(!open)}><a href="#">User Account</a></li>
                            <li onClick={()=>setOpen(!open)}><a href="#">Vendor Account</a></li>
                            <li onClick={()=>setOpen(!open)}><a href="#">Trach My Order</a></li>
                            <li onClick={()=>setOpen(!open)}><a href="#">Contact</a></li>
                        </ul>
                    </div >
                    <Menu onClick={()=>setOpen(!open)}></Menu>
                </div>
            </div>
        </div>
    )
}

export default Navbar
