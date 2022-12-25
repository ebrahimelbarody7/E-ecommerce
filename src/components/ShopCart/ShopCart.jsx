import React from 'react'
import { Brands } from './Brands/Brands'
import Phones from './Phones/Phones'
import "./ShopCart.css"

const ShopCart = () => {
  return (
    <div className='shopCart'>
        <div className="container">
            {/* <div className="row"> */}
                <Brands></Brands>
                <Phones></Phones>
            {/* </div> */}
        </div>
    </div>
  )
}

export default ShopCart
