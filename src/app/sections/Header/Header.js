"use client"
import React,{useState} from 'react'
import './Header.css'
import Socialicons from '@/app/components/Socialicons/Socialicons'

export default function Header() {
  const[menuOpen,setmenuOpen]= useState(false)
  return (
    <header>
        <nav>
            <img src="./Logo.svg" alt="" />
            <ul className={menuOpen?"open":""}>
              <li><a href="#features" onClick={() => setmenuOpen(false)}>Features</a></li>
              <li><a>App</a></li>
              <li><a href="#donation" onClick={() => setmenuOpen(false)}>Donation</a></li>
              <li><a href="#review" onClick={() => setmenuOpen(false)}>Stories</a></li>
              <div className="social-header">Follow Us:<Socialicons/></div>
            </ul>
            <div className="header-right">
              <div className="download-button">
              <p>Download Now</p>
              <img src="./Icon.svg" alt="" />
            </div>
            <div className="menu" onClick={()=> setmenuOpen(!menuOpen)}>
                <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                <span style={{ opacity: menuOpen ? 0 : 1 }}  />
                <span  style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }} />
            </div>
            </div>
            
        </nav>
    </header>
  )
}
