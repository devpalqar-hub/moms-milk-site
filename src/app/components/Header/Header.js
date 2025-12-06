"use client"
import React,{useState,useEffect } from 'react'
import './Header.css'
import Socialicons from '@/app/components/Socialicons/Socialicons'
import DonationPop from '../donation/DonationPop'

export default function Header() {
  const[menuOpen,setmenuOpen]= useState(false);
  const [openDonation, setOpenDonation] = useState(false);

  const [storeUrl, setStoreUrl] = useState("https://play.google.com/store/apps/details?id=com.app.momsmilk");


  useEffect(() => {
    if (menuOpen || openDonation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, openDonation]);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const ua = navigator.userAgent.toLowerCase();
    const ANDROID_URL ="https://play.google.com/store/apps/details?id=com.app.momsmilk";
    const IOS_URL = "https://apps.apple.com/us/app/momsmilk/id6751459414";
    const isIOS = /iphone|ipad|ipod/.test(ua);
    // const isAndroid = /android/.test(ua);

    if (isIOS) {
      setStoreUrl(IOS_URL);
    } else {
      setStoreUrl(ANDROID_URL);
    }
  }, []);




  return (
    <>
      <header >
        <nav>
            <img src="/Logo.svg" alt="" />
            <ul className={menuOpen?"open":""}>
              <li><a href="#features" onClick={() => setmenuOpen(false)}>Features</a></li>
              <li><a href="#analytics" onClick={() => setmenuOpen(false)}>App</a></li>
              <li><a onClick={() => {setOpenDonation(true);setmenuOpen(false)}}>Donation</a></li>
              <li><a href="#review" onClick={() => setmenuOpen(false)}>Stories</a></li>
              <div className="social-header">Follow Us:<Socialicons/></div>
            </ul>
            <div className="header-right">
              <a href={storeUrl} target='_blank' rel='noopener noreferrer'>
                <div className="download-button">
                  <p>Download Now</p>
                <img src="/Icon.svg" alt="" />
              </div>
              </a>
            <div className="menu" onClick={()=> setmenuOpen(!menuOpen)}>
                <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                <span style={{ opacity: menuOpen ? 0 : 1 }}  />
                <span  style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }} />
            </div>
            </div>
            
        </nav>
    </header>
    <DonationPop open={openDonation} close={() => setOpenDonation(false)} />
    </>
  )
}
