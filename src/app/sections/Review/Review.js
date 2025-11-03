import React from 'react'
import { HiStar } from "react-icons/hi";
import './Review.css'

export default function Review() {
  return (
    <div className='Review-main' id='review'>
        <div className="reviewtitle">
            Loved by Mothers Everywhere
        </div>
        <div className="reviewdetail">
            Join thousands of happy parents who trust Mom's Milk for their baby care tracking.
        </div>
        <div className="review-row">
            <div className="reviewbox">
                <div className="reviewrating">
                     <HiStar/>
                    <HiStar/>
                    <HiStar/>
                    <HiStar/>
                    <HiStar/>
                </div>
                <div className="reviewcomment">
                    "This app has been a lifesaver! Tracking my baby's feeding schedule has never been easier. The analytics help me understand my baby's patterns."
                </div>
                <div className="reviewer">
                    <img src="./Sarah Johnson.png" alt="" />
                    <div className="reviewerdetail">
                        <p className="reviewername">Sarah Johnson</p>
                        <p className="reviwerpos">New Mom</p>
                    </div>
                </div>
            </div>
            <div className="reviewbox">
                <div className="reviewrating">
                    <HiStar/>
                    <HiStar/>
                    <HiStar/>
                    <HiStar/>
                    <HiStar/>
                </div>
                <div className="reviewcomment">
                    "This app has been a lifesaver! Tracking my baby's feeding schedule has never been easier. The analytics help me understand my baby's patterns."
                </div>
                <div className="reviewer">
                    <img src="./Sarah Johnson.png" alt="" />
                    <div className="reviewerdetail">
                        <p className="reviewername">Sarah Johnson</p>
                        <p className="reviwerpos">New Mom</p>
                    </div>
                </div>
            </div>
            <div className="reviewbox">
                <div className="reviewrating">
                     <HiStar/>
                    <HiStar/>
                    <HiStar/>
                    <HiStar/>
                    <HiStar/>
                </div>
                <div className="reviewcomment">
                    "This app has been a lifesaver! Tracking my baby's feeding schedule has never been easier. The analytics help me understand my baby's patterns."
                </div>
                <div className="reviewer">
                    <img src="./Sarah Johnson.png" alt="" />
                    <div className="reviewerdetail">
                        <p className="reviewername">Sarah Johnson</p>
                        <p className="reviwerpos">New Mom</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="review-bottom">
                <div className="reviewbottomrow">
                    <div className="reviewbottomdetails">
                        <h3>⭐</h3>
                        <div className="rowtitle">4.9/5 Rating</div>
                        <p>Appstore</p>
                    </div>
                    <div className="reviewbottomdetails">
                        <h3>🏆</h3>
                        <div className="rowtitle">Editor's Choice</div>
                        <p>Google Play</p>
                    </div>
                    <div className="reviewbottomdetails">
                        <h3>👶</h3>
                        <div className="rowtitle">10K+ Users</div>
                        <p>Appstore</p>
                    </div>
                    <div className="reviewbottomdetails">
                        <h3>🖤</h3>
                        <div className="rowtitle">2K+ Donations</div>
                        <p>Sucsessful</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
