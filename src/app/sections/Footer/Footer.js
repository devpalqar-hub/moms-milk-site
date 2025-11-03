import React from 'react'
import { FiFacebook ,FiTwitter,FiInstagram ,FiMail  } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import './Footer.css'

export default function () {
  return (
    <footer>
        <div className="footer-main">
            <div className="footer-top">
                <div className="sec1">
                    <img src="./Logo2.svg" alt="" />
                    <p>Empowering mothers with smart tracking and community support.</p>
                    <div className="socialicon-list">
                        <div className="socialicon-box">
                            <FiFacebook className='socialicon'/>
                        </div>
                        <div className="socialicon-box">
                            <FiTwitter className='socialicon'/>
                        </div>
                        <div className="socialicon-box">
                            <FiInstagram className='socialicon'/>
                        </div>
                        <div className="socialicon-box">
                            <FiMail className='socialicon'/>
                        </div>
                    </div>
                </div>
                <div className="sec2">
                    <p className='quicklink-title'>Product</p>
                    <ul>
                        <li><a href='#features'>Features</a></li>
                        <li><a >Screenshots</a></li>
                        <li><a >Pricing</a></li>
                        <li><a >Updates</a></li>
                    </ul>
                </div>
                <div className="sec3">
                    <p className='quicklink-title'>Community</p>
                    <ul>
                        <li><a href="#donation">Milk Donation</a></li>
                        <li><a >Safety Guidelines</a></li>
                        <li><a >Blog</a></li>
                        <li><a >Success Stories</a></li>
                    </ul>
                </div>
                <div className="sec4">
                    <p className='quicklink-title'>Support</p>
                    <ul>
                        <li><a >Contact Us</a></li>
                        <li><a >Help Center</a></li>
                        <li><a href='/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a></li>
                        <li><a href='/terms' target='_blank' rel='noopener noreferrer'>Terms of Services</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="footer-bottom">
            <p>© 2025 Mom's Milk. All rights reserved.</p>
            <p>Made with <span><FaHeart/></span> for mothers everywhere</p>
        </div>
    </footer>
  )
}
