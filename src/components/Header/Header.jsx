import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
export default function Header() {

  const mob = window.innerWidth < 768 ? true : false;
  const [open, setOpen] = useState(false);
  return (
    <div className='header' id='home' >
      <img className='logo' src={Logo} alt="logo" />
      {(open === false && mob === true) 
        ? (<div
          onClick={()=>{setOpen(true)}}
          ><img src={Bars} alt="" style={{width : "1.5rem", height: "1.5rem"}}/></div>) 
        
        : <ul className='header-menu' >
        <li ><Link onClick={()=>{setOpen(false)}} to='home' activeClass='active' smooth = {true} span = {true} >Home</Link></li>
        <li ><Link onClick={()=>{setOpen(false)}} to='programs' smooth = {true} span = {true} >Programs</Link></li>
        <li ><Link onClick={()=>{setOpen(false)}} to='reasons' smooth = {true} span = {true} >Why Us</Link></li>
        <li ><Link onClick={()=>{setOpen(false)}} to='plans' smooth = {true} span = {true}>Plans</Link></li>
        <li ><Link onClick={()=>{setOpen(false)}} to='join' smooth = {true} span = {true}>Join</Link></li>
      </ul>}

    </div>
  )
}
