import React from 'react'
import ArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right"
// import New from "@iconscout/react-unicons/icons/"
import "./Arrivals.css"
import Slider from 'react-slick'
import Ndata from './Ndata'

export const Arrivals = () => {
  return (
    <div className='arrivals'>
        <div className="container">
            <div className="head">
                <h1>Arrivals</h1>
                <span>View All <ArrowRight></ArrowRight></span>
            </div>
            <div className="row">
                {Ndata.map((e)=>
                <div className="box">
                    <div className="img">
                        <img src={e.cover} alt="" />
                    </div>
                    <h3>{e.name}</h3>
                    <span>{e.price}</span>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}
