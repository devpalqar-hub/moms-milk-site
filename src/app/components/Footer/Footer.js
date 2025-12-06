"use client"
import React ,{useState} from 'react'
import { FaHeart } from "react-icons/fa6";
import './Footer.css'
import Socialicons from '@/app/components/Socialicons/Socialicons';
import Link from "next/link";


export default function Footer () {
    const [showPopup, setShowPopup] = useState(false);
    const handleUpdates = () => {
        setShowPopup(true);

        setTimeout(() => {
        setShowPopup(false);
        }, 2000);
    };
  return (
    <>
    <footer>
        <div className="footer-main">
            <div className="footer-top">
                <div className="sec1">
                    <img src="/Logo2.svg" alt="" />
                    <p>Empowering mothers with smart tracking and community support.</p>
                    <Socialicons/>
                </div>
                <div className="sec2">
                    <p className='quicklink-title'>Product</p>
                    <ul>
                        <li><a href='#features'>Features</a></li>
                        <li><a href='#analytics'>Screenshots</a></li>
                        {/* <li><a >Pricing</a></li> */}
                        <li><a onClick={handleUpdates}>Updates</a></li>
                    </ul>
                </div>
                <div className="sec3">
                    <p className='quicklink-title'>Community</p>
                    <ul>
                        <li><a href="#milkdonation">Milk Donation</a></li>
                        {/* <li><a >Safety Guidelines</a></li> */}
                        {/* <li><a >Blog</a></li> */}
                        <li><a href='#review'>Success Stories</a></li>
                    </ul>
                </div>
                <div className="sec4">
                    <p className='quicklink-title'>Support</p>
                    <ul>
                        <li><a href='#contact'>Contact Us</a></li>
                        {/* <li><a >Help Center</a></li> */}
                        <li><Link href='/privacy' >Privacy Policy</Link></li>
                        <li><Link href='/terms' >Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2025 Mom's Milk. All rights reserved.</p>
            <p>Made with <span><FaHeart/></span> for mothers everywhere</p>
        </div>
    </footer>
    {showPopup && (
            <div className="updates-popup">
            No updates available.
            </div>
        )}
    </>
  );
}
