import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import NumberCounter from 'number-counter'

import Heart from '../../assets/heart.png'
import HeroImg from '../../assets/hero_image.png'
import HeroImgBack from '../../assets/hero_image_back.png'
import Cal from '../../assets/calories.png'

import {motion} from 'framer-motion'
const Hero = () => {
  const mob = window.innerWidth<=768 ? true : false;
  const transition = {type : 'spring', duration: 3}
  return (
    <div className='hero' >
    <div className="blur blur-h"></div>
      <div className='left-h'>
        <Header />

        <div className='the-best-ad'>
          
          <motion.div
          initial = {{left : mob? '150px':'238px'}}
          whileInView = {{left : '9px'}}
          transition= {transition}
          >
          
          </motion.div>
          <span>the best fitness club in the city</span>
        </div>


        <div className="hero-text">
          <div><span className='stroke-text'>Shape </span>Your<span></span></div>

          <div><span>Ideal Body</span></div>

          <div><span>Here We help people to reach their body goal. Also make you healthy both physically and mentally</span></div>
        </div>


        <div className="figures">
          <div><span> <NumberCounter end={15} start = {5} delay = '3' preFix = "+" /> </span><span>expert coaches</span></div>
          <div><span> <NumberCounter start = {300} end = {500} delay = '2' preFix = "+" /> </span><span>Members joined</span></div>
          <div><span> <NumberCounter end={50} start = {5} delay = '2' preFix = "+" /> </span><span>Fitness Programs</span></div>
        </div>

        <div className="hero-butn">
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More </button>
        </div>

      </div>
      <div className='right-h'>
        <button className="btn">JOIN NOW</button>


        <motion.div 
        initial = {{right : '-1rem'}}
        whileInView = {{right:'4rem'}}
        transition = {transition}
        className='heart-rate'>
          <img src={Heart} alt="" />
          <span>Heart Rate </span><span>110 bpm</span>
        </motion.div>



        <img src={HeroImg} alt="" className='hero-image' />
        <motion.img 
        initial={{right:'11rem'}}
        whileInView = {{right : '20rem'}}
        transition = {transition}
        src={HeroImgBack} alt="" className='hero-image-back' />

        <motion.div
        initial = {{right : '37rem'}}
        whileInView = {{right : '28rem'}}
        transition = {transition}
        className="calories">
          <img src={Cal} alt="" />
          
          <div>
          <span>Calories Burned</span><span> 220 kcal </span>
          </div>
        </motion.div>
      
        </div>
    </div>
  )
}

export default Hero
