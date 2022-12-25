import React from 'react'
import Power from "@iconscout/react-unicons/icons/uil-power"
import Star from "@iconscout/react-unicons/icons/uil-star"
import Plus from "@iconscout/react-unicons/icons/uil-plus"
import Love from "@iconscout/react-unicons/icons/uil-heart"
import { productItems } from '../Data'
import "./FlachCard.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../rtk/Slices/Product-slice'


const NextArrow =(props)=>{
    const {onClick}=props
    return(
        <div className="btn"  onClick={onClick}>
            <button className='Next'>
                +
            </button>
        </div>
    )
}
const PrevArrow =(props)=>{
    const {onClick}=props
    return(
        <div className="btn" onClick={onClick}>
            <button className='prev'>
                -
            </button>
        </div>
    )
}
const FlachCard = () => {
    const count=useSelector(state=>state.product)
    const dispatch=useDispatch()
    
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow:<NextArrow></NextArrow>,
          prevArrow:<PrevArrow></PrevArrow>,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
        }
        return (
            <div className='flachCard'>
        <div className="container">
            <h1>
                <Power></Power>
                Flach Card
            </h1>
            <Slider {...settings}>
                {productItems.map((e)=>
                        <div className='box'>
                    <div className="product">
                    <div className="top">
                    <div className='discount'>{e.discount}% OFF</div>
                    <div className="right">
                        <span>0
                            {/* {count.map((e)=>e.quantity)} */}
                            </span>
                        <div className="heart">
                        <Love></Love>
                        </div>
                    </div>
                    </div>
                    <div className="img"><img src={e.cover} alt="" /></div>
                            <h5>{e.name}</h5>
                    <div className="text">
                        <div className="left">
                            <Star></Star>
                            <Star></Star>    
                            <Star></Star>    
                            <Star></Star>    
                            <Star></Star>    
                            <div className="price">
                            {e.price} $
                            </div>
                        </div>
                        <div className="right" onClick={()=>dispatch(addToCart(e))} >
                            {/* <Link to="/cart"> */}
                                <Plus></Plus>
                            {/* </Link> */}
                        </div>
                    </div>
                    </div>
                </div>
                
                )}
            </Slider>
        </div>
    </div>
  )
}

export default FlachCard
  