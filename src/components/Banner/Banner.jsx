import React from 'react'
import img1 from "../../images/banner-1.png"
import img2 from "../../images/banner-2.png"
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner'>
      <div className="container">
        <div className="row">
        <div className="left">
            <img src={img1} alt="" />
        </div>
        <div className="right">
            <img src={img2} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
