"use client";

import React from 'react'
import { GrLocation } from "react-icons/gr";
import { LuShield } from "react-icons/lu";
import { AiOutlineTeam } from "react-icons/ai";
import './MilkDonation.css'
import MilkDonationCounter from './MilkDonationCounter';
import useViewAnimation from "../../../hooks/useviewAnimation";

export default function MilkDonation() {
    const [topRef, topVisible] = useViewAnimation();
    const [bottomRef, bottomVisible] = useViewAnimation();
  return (
    <div className={"Donation-main"} id='milkdonation'>
        <div ref={topRef} className={`donation-top ${topVisible ? "show" : ""}`}>
            <div className="donation-img">
            <img src="./Mother.png" alt="" />
            <div className="donation-badge">
                <p><MilkDonationCounter target={1000} duration={1500} start={topVisible} /> <br />Donations</p>
            </div>
        </div>
        <div className="donation-right">
            <div className="donation-title">
                Share the Gift of <br /><span>Mother's Milk</span>
            </div>
            <div className="donation-detail">
                Connect with mothers in your community to donate or receive breast milk. Every ounce makes a difference in a baby's life.
            </div>
            <div className="donation-list">
                <GrLocation className='donation-locationicon'/>
                <div>
                    <p className="donation-infotitle">Local Matching</p>
                    <p className="donation-infodetail">Find donors within your ZIP code for convenient connections</p>
                </div>
            </div>
            <div className="donation-list">
                <LuShield className='donation-shieldicon'/>
                <div className="donation-info">
                    <p className="donation-infotitle">Verified Profiles</p>
                    <p className="donation-infodetail">All donors go through a verification process for safety</p>
                </div>
            </div>
            <div className="donation-list">
                <AiOutlineTeam className='donation-teamicon'/>
                <div className="donation-info">
                    <p className="donation-infotitle">Supportive Community</p>
                    <p className="donation-infodetail">Join thousands of mothers helping each other</p>
                </div>
            </div>
        </div>
        </div>
        <div ref={bottomRef} className={`donation-bottom ${bottomVisible ? "show" : ""}`}>
            <div className="donation-bottomtitle">
                How Milk Donation Works
            </div>
            <div className="donation-bottomrow stagger">
                <div className="donation-howbox">
                    <div className="numberingcircle1">1</div>
                    <div className="howtitle">Create Your Profile</div>
                    <p>Sign up and specify whether you're looking to donate or receive milk</p>
                </div>
                <div className="donation-howbox">
                    <div className="numberingcircle2">2</div>
                    <div className="howtitle">Find Local Matches</div>
                    <p>Browse verified profiles in your area and send connection requests</p>
                </div>
                <div className="donation-howbox">
                    <div className="numberingcircle3">3</div>
                    <div className="howtitle">Connect & Share</div>
                    <p>Coordinate safe pickup and help another family in need</p>
                </div>
            </div>
        </div>
    </div>
  )
}
