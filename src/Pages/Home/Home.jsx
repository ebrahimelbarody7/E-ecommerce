import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import { Arrivals } from '../../components/Arrivals/Arrivals'
import Banner from '../../components/Banner/Banner'
import { Discount } from '../../components/Discount/Discount'
import FlachCard from '../../components/FlashCard/FlachCard'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Navbar/Slider/Slider'
import ShopCart from '../../components/ShopCart/ShopCart'
import { TopCart } from '../../components/TopCart/TopCart'
import Wrapper from '../../components/Wrapper/Wrapper'

const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
      <Header></Header>
      <Navbar></Navbar>
      <Slider></Slider>
      <FlachCard></FlachCard>
      <TopCart></TopCart>
      <Arrivals></Arrivals>
      <Discount></Discount>
      <ShopCart></ShopCart>
      <Banner></Banner>
      <Wrapper></Wrapper>
      <Footer></Footer>
    </div>
  )
}

export default Home
