import React, { useRef } from 'react'
import GPlay from "@iconscout/react-unicons/icons/uil-google-play"
import App from "@iconscout/react-unicons/icons/uil-apps"
import "./Footer.css"
import emailjs from "@emailjs/browser"


const Footer = () => {
    const form = useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_xopp66f', 'template_jas4uw8', form.current, '2e1i69Hwb0XngW224')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='footer'>
       <div className="container">
        <div className="row">
            <div className="box">
                <div className="logo">
                    <h3>Elbarody</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis et ut ipsum error facilis sed provident.</p>
                    <div className="download">
                        <span><GPlay></GPlay> Google Play</span>
                        <span><App></App> App Store</span>
                    </div>
                </div>
            </div>
            <div className="box">
                <h3>About Us</h3>
                <ul className='about'>
                    <li>Careers</li>
                    <li>Our Store</li>
                    <li>Our Cares</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="box">
                <h3>Customer Care</h3>
                <ul className="customer">
                    <li>Help Center</li>
                    <li>How To Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchashing</li>
                    <li>Returns & Refunder</li>
                </ul>
            </div>
            <div className="box">
                <h3>Contact Us</h3>
                <form className="contact" ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='your name' name='user_name' />
                    <input type="email" placeholder='Your Email' name='user_email'/>
                    <input type="phone" placeholder='Your Number' name='user_phone' />
                    <input type="submit"  />
                </form>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer

