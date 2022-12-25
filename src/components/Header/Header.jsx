import React from 'react'
import Search from "@iconscout/react-unicons/icons/uil-search"
import Person from "@iconscout/react-unicons/icons/uil-user"
import Store from "@iconscout/react-unicons/icons/uil-shopping-cart-alt"
import "./Header.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { Badge } from '@mui/material'
// import Badge from '@mui/material/Badge';
// import styled from "styled-components"



const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

window.onscroll=()=>{
   if (document.body.scrollTop >30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".header").style.top="0"
    document.querySelector(".navbar").style.top="74px"
   }else{
    document.querySelector(".header").style.top="32px"
    document.querySelector(".navbar").style.top="104px"
   }
 }
const Header = () => {
  const count=useSelector(state=>state.product)
  // console.log(count.length)
  return (
    <div className='header' >
         <div className="container">
            <div className="row">
                <div className="left">Elbarody</div>
                <div className="center">
                    <div className="box">
                      <Search color='#black'/>
                      <input type="text"  placeholder='Search and hit enter...'/>
                      <span>All Category</span>
                    </div>
                </div>
                <div className="right">
                  <ul>
                    <li><Link to="/"><Person></Person></Link></li>


                        <li>
                          <Link to="/cart"><Store></Store></Link>
                          <span>{count.length}</span>
                        </li>
                  </ul>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Header
