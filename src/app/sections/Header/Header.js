import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header>
        <nav>
            <img src="./Logo.svg" alt="" />
            <ul>
              <li>Features</li>
              <li>App</li>
              <li>Donation</li>
              <li>Stories</li>
            </ul>
            <div className="download-button">
              <p>Download Now</p>
              <img src="./Icon.svg" alt="" />
            </div>
            
        </nav>
    </header>
  )
}
