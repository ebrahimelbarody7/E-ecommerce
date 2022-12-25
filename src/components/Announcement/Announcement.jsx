import React from 'react'
import "./Announcement.css"
import Phone from"@iconscout/react-unicons/icons/uil-phone"
import Massage from"@iconscout/react-unicons/icons/uil-comment-alt-message"
import Countary from"@iconscout/react-unicons/icons/uil-language"

const Announcement = () => {
    return (
        <div className='announcement'>
            <div className="container">
            <div className="left">
                <ul>
                    <li><Phone></Phone></li>
                    <li>+201019092115</li>
                    <li><Massage></Massage> ebrahim@gamil.com</li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li>Theme FAQ's</li>
                    <li>Need Helps</li>
                    <li><Countary></Countary> EN</li>
                    <li><Countary></Countary> USD</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Announcement
