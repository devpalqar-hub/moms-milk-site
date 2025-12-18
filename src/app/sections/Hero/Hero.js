"use client";

import React from 'react'
import { BiLogoPlayStore,BiLogoApple  } from "react-icons/bi";
import { LuSparkles } from "react-icons/lu";
import './Hero.css'
import useViewAnimation from "../../../hooks/useviewAnimation";

export default function Hero() {
  const [ref, visible] = useViewAnimation();

  return (
    <div ref={ref} className={`hero-main ${visible ? "show" : ""}`} id='hero'>
        <h1 className="sr-only">Mom’s Milk</h1>
        <div className="hero-subhead">
            <LuSparkles className='hero-subhead-icon'/>
            TRUSTED BY 10,000+ MOTHERS
        </div>
        <div className="hero-title">
            Care Made Simple <br /> for New Moms
        </div>
        <div className="hero-detail">
            Mom's Milk helps you track your baby's feeding, sleep, and diaper  routines and connect with trusted milk donors nearby.
        </div>
        <div className="download-badges">
            <a href="https://apps.apple.com/us/app/momsmilk/id6751459414" target='_blank' rel='noopener noreferrer'>
                <div className="download-bdg">
                    <BiLogoApple className='download-icon'/>
                    App Store
                </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.app.momsmilk" target='_blank' rel='noopener noreferrer'>
                <div className="download-bdg">
                    <BiLogoPlayStore className='download-icon'/>
                    Google Play
                </div>
            </a>
        </div>
        <p>10k+ downloads</p>
        <div className="mobilemock-design">
            <div className="circleback"></div>
                <img src="/HeroMockup.png" alt=""/>
        </div>
    </div>
  )
}
