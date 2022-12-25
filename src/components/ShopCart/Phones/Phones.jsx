import React from 'react'
import Phonedata from './Phonedata'
import Love from "@iconscout/react-unicons/icons/uil-heart"
import Star from "@iconscout/react-unicons/icons/uil-star"
import "./Phones.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../rtk/Slices/Product-slice'


const Phones = () => {
    const dispatch=useDispatch()
  return (
    <div className='phone'>
        <h2>Shop Phone</h2>
      <div className="row">
        {Phonedata.map((e)=>
        <div className="col">
            <div className="head">
                <div className="left">
                    <h4>{e.discount}% OFF</h4>
                </div>
                <div className="right">
                    <div className="count">0</div>
                    <Love></Love>
                </div>
            </div>
            <div className="img">
                <img src={e.cover} alt="" />
            </div>
            <h3>{e.name}</h3>
            <div className="stars">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
            </div>
            <div className="bottom">
                <div className="price">
                    {e.price}.00
                </div>
                <div className="right">
                <div className="add" onClick={()=>dispatch(addToCart(e))}>
                    +
                </div>
                </div>
            </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Phones
