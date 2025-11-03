import React from 'react'
import { BiLogoPlayStore,BiLogoApple  } from "react-icons/bi";
import { LuSparkles } from "react-icons/lu";
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero-main' id='hero'>
        <div className="hero-subhead">
            <LuSparkles className='hero-subhead-icon'/>
            TRUSTED BY 10,000+ MOTHERS
        </div>
        <div className="hero-title">
            Care Made Simple <br /> for New Moms
        </div>
        <div className="hero-detail">
            Moms Milk helps you track your baby's feeding, sleep, and diaper <br /> routines and connect with trusted milk donors nearby.
        </div>
        <div className="download-badges">
            <a href="">
                <div className="download-bdg">
                    <BiLogoApple className='download-icon'/>
                    App Store
                </div>
            </a>
            <a href="">
                <div className="download-bdg">
                    <BiLogoPlayStore className='download-icon'/>
                    Google Play
                </div>
            </a>
        </div>
        <p>10k+ downloads</p>
        <div className="mobilemock-design">
            <img src="./Mobilemock.png" alt="" />
            <div className="livecard">
                <div className="liveicon"></div>
                <div className="livetext">
                    <p>LIVE</p>
                    <h6>24/7</h6>
                </div>
            </div>
            <div className="savecard">
                <div className="livetext">
                    <p>SAVED</p>
                    <h6>2h/day</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
