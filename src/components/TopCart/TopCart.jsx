import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick"
import "./TopCart.css"
import Arrowright from "@iconscout/react-unicons/icons/uil-arrow-right"


export const TopCart = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        responsive:[
            {
                breackpoint:1024,settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
      };
  return (
    <div className='topCart'>
        <div className="container">
            <div className='head'>
                <h1>Top Categories</h1>
                <span>View All <Arrowright></Arrowright></span>
            </div>
            <Slider {...settings}>
                {Tdata.map((e)=>
                <div className="box">
                    <div className="col">
                    <div className="top">
                        <div className="left">{e.para}</div>
                        <div className="right">{e.desc}</div>
                    </div>
                    <div className="img">
                        <img src={e.cover} alt="" />
                    </div>
                    </div>
                </div>
                )}
            </Slider>
        </div>
    </div>
  )
}
