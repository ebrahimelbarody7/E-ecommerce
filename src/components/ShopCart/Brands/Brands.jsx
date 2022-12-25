import React from 'react'
import { Link } from 'react-router-dom'
import cat1 from "../../../images/category/cat-1.png"
import cat2 from "../../../images/category/cat-2.png"
import "./Brands.css"

export const Brands = () => {
  return (
    <div className='brands'>
        <div className="head">
            <h3>Brand</h3>
            <span>Shops</span>
        </div>
        <ul className='links'>
            <li>
                <img src={cat1} alt="" />
                Apple
            </li>
            <li>
                <img src={cat2} alt="" />
                Samasung
            </li>
            <li>
                <img src={cat1} alt="" />
                Oppo
            </li>
            <li>
                <img src={cat2} alt="" />
                Vivo
            </li>
            <li>
                <img src={cat1} alt="" />
                Redimi
            </li>
            <li>
                <img src={cat2} alt="" />
                Sony
            </li>
        </ul>
        <div className="allBarands">
            <h3>View All Barand</h3>
        </div>
    </div>
  )
}
