import React from 'react'
import { data } from './Wdata'
import "./Wrapper.css"
const Wrapper = () => {
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="row">
            {data.map((e)=>
            <div className="col">
                <div className="img">
                    {e.cover}
                    {/* <i className={Icons}></i> */}
                </div>
                <h3>{e.title}</h3>
                <p>{e.decs}</p>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Wrapper
