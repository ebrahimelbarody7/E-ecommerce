import React from 'react'
import { productItems } from '../../components/Data'
import "./Cart.css"
import Announcement from "../../components/Announcement/Announcement" 
import Header from "../../components/Header/Header" 
import Navbar from "../../components/Navbar/Navbar" 
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import { decrease, increase, removeProduct } from '../../rtk/Slices/Product-slice'

const Cart = () => {
    const cart=useSelector(state=>state.product)
    const dispatch=useDispatch()

    let sallary=
        cart.reduce((a,b)=>{
            a+=b.price * b.quantity
            return a        
        },0)

    
  return (
    <>
    <Announcement></Announcement>
    <Header></Header>
    <Navbar></Navbar>
    <div className='cart'>
       <div className="container">
        <div className="row">
        <div className="left">
        {cart.map((e)=>
                <div className='box'>
                    <div className="product">
                        <div className="img"><img src={e.cover} alt="" /></div>
                        <div className="text">
                            <h5>{e.name}</h5>   
                            <div className="bottom">
                                <div className="count">
                                   {(e.price)}*{e.quantity}
                                </div>
                                <div className="price">
                                    {e.price} $
                                </div>
                            </div>
                        </div>
                        <div className="action">
                            <div className="del" onClick={()=>dispatch(removeProduct(e))}>X</div>
                            <div className="bottom">
                                <div className="increase" onClick={()=>dispatch(increase(e))}>
                                    +
                                </div>
                                <span >{e.quantity}</span>
                                <div className="dec" onClick={()=>dispatch(decrease(e))}>
                                    -
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )}
        </div>
        <div className="right">
            <div className="summary">
                <h3>Cart Summary</h3>
                <div className="price">
                    Total Price:
                    <span>{sallary}</span>
                </div>
            </div>
        </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Cart
 