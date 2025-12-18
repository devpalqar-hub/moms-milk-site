"use client";

import React, {useState}from 'react'
import { LuMail } from "react-icons/lu";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import './Contact.css'
import useViewAnimation from "../../../hooks/useviewAnimation";


export default function Contact() {
  const [ref, visible] = useViewAnimation();

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const handleSubmit =async (e)=> {
    e.preventDefault();
  
    const API_URL="https://api.momsmilk.app/contact-form";
      setEmailError("");
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        return;
     }

      setLoading(true);
      setAlertType("loading");
      setAlertMessage("Sending...");
      setShowAlert(true);
  try{
    const response = await fetch(API_URL,{
      method: 'POST',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
          Name:name,
          email:email,
          message:message,
        }),
    });
    if (response.ok){
      setAlertType("success");
      setAlertMessage("Message sent successfully");
      setShowAlert(true);
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => setShowAlert(false),1200 );
    }
    else{
      setAlertType("error");
      setAlertMessage("Something went wrong");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false),1200 );

    }
  }
  catch(error){
    setAlertType("error");
    console.error("Error",error);
    setAlertMessage("Error sending message");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false),1200 );
  }
  };
  return (
    <div ref={ref} className={`Contact-main ${visible ? "show" : ""}`} id='contact'>
    {showAlert && (
        <div className="alertOverlay">
          <div className={`alertBox ${alertType}`}>
            <div className="alertContent">
              {alertType==="loading" ?(
                <span className="loader"></span>
              ) : alertType === "success" ? (
                <span className="alertIcon successIcon">✔</span>
              ) : (
                <span className="alertIcon errorIcon">✖</span>
              )}
              <p className="alertText">{alertMessage}</p>
            </div>
          </div>
        </div>
      )}
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
                    <a href="mailto:support@momsmilk.app"  rel="noopener noreferrer">support@momsmilk.app</a>
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
                <form onSubmit={handleSubmit}>
                    <label> Name</label>
                    <input 
                        placeholder='Your name' 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label> Email</label>
                    <input 
                        placeholder='your.email@exapmle.com' 
                        type="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value); setEmailError("");}}
                        required
                    />
                    {emailError && <p className="input-error">{emailError}</p>}
                    <label> Message</label>
                    <textarea 
                        placeholder='How can we help you?' 
                        type="text" 
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required 
                    />
                    <button type='submit'><FaPaperPlane/> Send Message</button>
                </form>
                </div>
        </div>
    </div>
  )
}
