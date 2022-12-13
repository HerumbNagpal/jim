import React from 'react'
import './Reasons.css'
import im1 from '../../assets/image1.png'
import im2 from '../../assets/image2.png'
import im3 from '../../assets/image3.png'
import im4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'

export default function Reasons() {
    return (
        <div className='Reasons' id='reasons'>
            <div className="left-r">
                <img src={im1} alt="" />
                <img src={im2} alt="" />
                <img src={im3} alt="" />
                <img src={im4} alt="" />
            </div>
            <div className="right-r">
                <span>some reasons</span>
                <div className='why'>
                    <span className='stroke-text'>WHY</span>
                    <span> choose </span>
                    <span> us?</span>
                </div>

                <div className='details-r'>
                    <div className='re'><img className='tick' src={tick} alt=""></img><span>over 10 expert coaches</span></div>
                    <div className='re'><img className='tick' src={tick} alt="" /><span></span>Access to all gold's gym</div>
                    <div className='re'><img className='tick' src={tick} alt="" /><span></span>free programs for new members</div>
                    <div className='re'><img className='tick' src={tick} alt="" /><span></span>Available on fitpass</div>
                </div>
                
            </div>
        </div>
    )
}
