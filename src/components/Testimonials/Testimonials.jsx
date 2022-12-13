import React from 'react'
import { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftA from '../../assets/leftArrow.png'
import rightA from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const len = testimonialsData.length;
  return (
    <div className='Testimonials'>
      <div className='left-t' >
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, s: -100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "#9C254D" }}>
            {testimonialsData[selected].name}
          </span>
          ~{testimonialsData[selected].status}
        </span>
      </div>

      <div className='right-t' >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 3 }}
          whileInView={{ opacity: 1, x: 0 }}

        ></motion.div>
        <motion.div

          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 3 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image} alt="img of reviewer" />
        <div className="arrows">
          <img onClick={() => { selected === 0 ? setSelected(len - 1) : setSelected(selected - 1) }} src={leftA} alt="" />
          <img onClick={() => { selected === (len - 1) ? setSelected(0) : setSelected(selected + 1) }} src={rightA} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
