import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import rArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      <div className="programs-header">
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>

      <div className="programs-category">
        {programsData.map((program)=>(
            <div className="category">
                {program.name}
                {program.image}
                <span>{program.heading}</span><span>{program.details}</span>
                <div className="join-now">
                  <span>JOIN NOW</span>
                  <img src={rArrow} alt="img" className="source" />
                </div>
            </div>
          ))}
      </div>

    </div>
  )
}

export default Programs
