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
                        <a href="https://www.instagram.com/momsmilkapp?igsh=MWJ5NzZ6YzBobjUxYQ==" target="blank" rel="noopener noreferrer">
                          <div className="socialicon-box">
                              <FiInstagram className='socialicon'/>
                          </div>
                        </a>
                        <a href="mailto:support@momsmilk.app" target='blank' rel="noopener noreferrer">
                          <div className="socialicon-box">
                            <FiMail className='socialicon'/>
                          </div>
                        </a>
                    </div>
  )
}
