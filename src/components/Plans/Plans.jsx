import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
    return (
        <div className='plans-container' id='plans'>
            <div className="blur blur-p-1"></div>
            <div className="blur blur-p-2"></div>
            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className='stroke-text'>Ready To start</span>
                <span>Your journey</span>
                <span className='stroke-text'>now with  us</span>
            </div>

            <div className="plans">
                {plansData.map((plan,i)=>{
                    return (<div className='pln' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>
                    
                    <div className="features">
                            {plan.features.map((feature,i)=>{
                                return (<div className="feature">
                                <img src={whiteTick} alt="" className='whiteTick' />    
                                <span key={i}>
                                        {feature}
                                    </span>
                                </div>)
                    })}   
                    </div>
                    <div><span>see more benifits -{'>'} </span></div>
                    <button className="btn">JOIN NOW</button>
                    
                    </div>
                    
                    )
                    
                })}
            </div>
        </div>
    )
}

export default Plans
