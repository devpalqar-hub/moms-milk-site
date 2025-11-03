import React from 'react'
import './Features.css'
import { LuBaby ,LuMoon,LuChartColumn ,LuHeart, LuShield  } from "react-icons/lu";
import { PiPulseBold } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RxLightningBolt } from "react-icons/rx";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
export default function Features() {
  return (
    <div className='feature-main' id='features'>
      <div className="feature-subhead">
        <MdOutlineFeaturedPlayList className='feature-subhead-icon'/>
        FEATURES
      </div>
        <div className="feature-title">
            Everything you need
        </div>
        <div className="feature-detail">
            Comprehensive tools designed for the modern parent
        </div>
        <div className="featurecard-gridA">
            <div className="featurecard">
              <LuBaby className='baby-icon'/>
                <div className="featurecard-title">
                  Smart Feeding
                </div>
                <p>AI-powered tracking with predictive insights and automatic pattern recognition.</p>
            </div>
            <div className="featurecard">
              <PiPulseBold className='pulse-icon'/>
                <div className="featurecard-title">
                  Health Monitoring
                </div>
                <p>Real-time diaper tracking with intelligent health alerts and trends.</p>
            </div>
            <div className="featurecard">
              <LuMoon className='moon-icon'/>
                <div className="featurecard-title">
                  Sleep Intelligence
                </div>
                <p>Advanced sleep analytics with personalized recommendations.</p>
            </div>
            <div className="featurecard">
              <LuChartColumn className='chart-icon'/>
                <div className="featurecard-title">
                  Growth Insights
                </div>
                <p>Beauttiful visualizations showing developmetal progress over time.</p>
            </div>
            <div className="featurecard">
              <LuHeart className='heart-icon'/>
                <div className="featurecard-title">
                  Milk Sharing
                </div>
                <p>Verified community for safe milk donation and support</p>
            </div>
            <div className="featurecard">
              <HiOutlineLocationMarker className='location-icon'/>
                <div className="featurecard-title">
                  Smart Matching
                </div>
                <p>Location-based donar matching with secure verification</p>
            </div>
        </div>
        <div className="featurecard-gridB">
          <div className="fcard">
            <RxLightningBolt className='fcard-icon'/>
            <div className="fcard-title">
              Lightning fast
            </div>
            <p>Log activities under 3 seconds</p>
          </div>
           <div className="fcard">
            <LuShield className='fcard-icon'/>
            <div className="fcard-title">
              Bank-grade security
            </div>
            <p>End-to-end encrypted data</p>
          </div>
           <div className="fcard">
            <LuMoon className='fcard-icon'/>
            <div className="fcard-title">
              Dark mode ready
            </div>
            <p>Optimized for night feeding</p>
          </div>
        </div>
    </div>
  )
}
