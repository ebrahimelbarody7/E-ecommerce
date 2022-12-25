import React, { useState } from 'react'
import { categories } from '../../Data'
import "./Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/pagination';
import Sdata from "./Sdata"

const Slider = () =>{
    const [cat,setCat]=useState(categories)
  return (
    <div className='slider'>
        <div className="container">
            <div className="row">
            <div className="s_left">
            <ul>
                {cat.map((e)=>
                <li>
                    <a href="#">
                        <img src={e.cateImg} alt="" />
                        {e.cateName}
                    </a>
                </li>
                )}
            </ul>
        </div>
        <div className="s_right">
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}>
                {Sdata.map((e)=>
             <SwiperSlide >
                <div className="box">
                    <div className="text">
                        <h1>{e.title}</h1>
                        <p>{e.desc}</p>
                        <button>Visit Collections</button>
                    </div>
                    <div className="img">
                        <img src={e.cover} alt="" />
                    </div>
                </div>
             </SwiperSlide>
                
                )}
            
        </Swiper>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Slider
