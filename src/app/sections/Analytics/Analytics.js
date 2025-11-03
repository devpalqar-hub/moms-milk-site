import React from 'react'
import { LuTrendingUp,LuClock4 ,LuSparkles,LuInfinity  } from "react-icons/lu";
import './Analytics.css'

export default function Analytics() {
  return (
    <div className='analytics-main' id='analytics'>
      <div className="analytics-section">
          <div className="analytics-left">
              <div className="analytics-subhead">
                <LuTrendingUp className='analytics-subhead-icon'/>
                ANALYTICS
              </div>
              <div className="analytics-title">
                Insights that <br /><span>matter</span>
              </div>
              <div className="anlytics-detail">
                Beautiful visualizations reveal patterns you never knew existed.Make informed decisions backend by data.
              </div>
              <div className="analytics-list">
                <LuSparkles className='analytics-listicon'/>
                <div>
                    <p className='analytics-listtitle'>Predictive Analytics</p>
                    <p className="analytics-listdetail">AI forecasts feeding times and sleep patterns</p>
                </div>
              </div>
              <div className="analytics-list">
                <LuTrendingUp  className='analytics-listicon'/>
                <div>
                    <p className='analytics-listtitle'>Growth  Tracking</p>
                    <p className="analytics-listdetail">Monitor development milestones automatically</p>
                </div>
              </div>
              <div className="analytics-list">
                <LuClock4  className='analytics-listicon'/>
                <div>
                    <p className='analytics-listtitle'>Export Reports</p>
                    <p className="analytics-listdetail">Share insights with pediatricians instantly</p>
                </div>
              </div>
          </div>
          <img src="./Analyticmobilemock.png" alt="" />
      </div>
      <div className="timeline-section">
        <img src="./Analyticmobilemock.png" alt="" />
        <div className="timeline-right">
              <div className="analytics-subhead">
                <LuClock4/>
                TIMELINE
              </div>
              <div className="analytics-title">
                Every moment,<br /><span>captured</span>
              </div>
              <div className="anlytics-detail">
                Effortless logging with intelligent suggestions. Your baby's day, beautifully organized.
              </div>
              <div className="timeline-container">                
                <div>
                    <p className='timeline-containertitle'>One-Tap Logging</p>
                    <p className="timeline-containerdetail">Record activities in under 3 seconds</p>
                </div>
                <p className='timeline-containericon'>3s</p>
              </div>
              <div className="timeline-container">
                <div>
                    <p className='timeline-containertitle'>Smart Reminders</p>
                    <p className="timeline-containerdetail">Never miss a feeding or medication</p>
                </div>
                <p className='timeline-containericon'>100%</p>
              </div>
              <div className="timeline-container">
                <div>
                    <p className='timeline-containertitle'>Photo Timeline</p>
                    <p className="timeline-containerdetail">Attach memmories to every moment</p>
                </div>
                <LuInfinity className='timeline-containericon'/>
              </div>
          </div>
      </div>
      <div className="analytics-bottom">
        <div className="analytics-bottomrow">
          <div className="analytics-bottombox">
            <p className='analytics-bottomicon'>📱</p>
            <p className='analytics-bottomtitle'>Mobile First</p>
            <p className='analytics-bottomdetail'>Optimized for on-the-go parents</p>
        </div>
        <div className="analytics-bottombox">
            <p className='analytics-bottomicon'>🌙</p>
            <p className='analytics-bottomtitle'>Dark Mode</p>
            <p className='analytics-bottomdetail'>Easy on the eyes during night feeds</p>
        </div>
        <div className="analytics-bottombox">
            <p className='analytics-bottomicon'>📊</p>
            <p className='analytics-bottomtitle'>Smart Insights</p>
            <p className='analytics-bottomdetail'>AI-powered pattern recognition</p>
        </div>
        <div className="analytics-bottombox">
            <p className='analytics-bottomicon'>🔒</p>
            <p className='analytics-bottomtitle'>Secure & Private</p>
            <p className='analytics-bottomdetail'>Your data stays protected</p>
        </div>
        </div>
      </div>
    </div>
  )
}
