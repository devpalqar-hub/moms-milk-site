import React from 'react'
import { FiFacebook ,FiTwitter,FiInstagram ,FiMail  } from "react-icons/fi";
import './Socialicons.css'

export default function Socialicons() {
  return (
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
  )
}
