import React from 'react'
import { LuMail } from "react-icons/lu";
import { MdChatBubbleOutline } from "react-icons/md";
import './Contact.css'

export default function Contact() {
  return (
    <div className='Contact-main' id='contact'>
        <div className="contact-left">
            <div className="contact-title">
                Get in Touch <br /><span>We're Here to Help</span>
            </div>
            <div className="contact-detail">
                Have questions about the app or milk donation? Our support team is ready to assist you.
            </div>
            <div className="contact-list">
                <LuMail className='contact-icon1'/>
                <div>
                    <div className="contact-typetitle">Email Us</div>
                    <div className="contact-typedetail">support@momsmilk.app</div>
                </div>
            </div>
            <div className="contact-list">
                <MdChatBubbleOutline className='contact-icon2'/>
                <div>
                    <div className="contact-typetitle">Response Time</div>
                    <div className="contact-typedetail">Within 24 hours</div>
                </div>
            </div>
            <div className="frequently">
                <p className='frequentlytitle'>Frequently Asked</p>
                <div className="frequentlybox">
                    <p className="freqqn">Is the app free to use?</p>
                    <p className="freqans">Yes! Basic tracking features are completely free. Premium analytics available.</p>
                </div>
                <div className="frequentlybox">
                    <p className="freqqn">Is milk donation safe?</p>
                    <p className="freqans">We verify all donor profiles and provide safety guidelines for every connection.</p>
                </div>
            </div>
        </div>
        <div className="contact-left">
                <div className="form-container">
                    <p>Send us a message</p>
                <form>
                    <label> Name</label>
                    <input placeholder='Your name' type="text" />
                    <label> Email</label>
                    <input placeholder='your.email@exapmle.com' type="email" />
                    <label> Message</label>
                    <textarea placeholder='How can we help you?' type="text" rows={3}></textarea>
                    <button type='submit'>Send Message</button>
                </form>
                </div>
        </div>
    </div>
  )
}
