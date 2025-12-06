"use client";
import React, { useState } from "react";
import styles from "./DonationPop.module.css";

export default function DonationPop({ open, close }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currency, setCurrency] = useState("usd");
  const presetAmounts = [5, 50, 500, 1000, 5000];
  const currencySymbols = {usd: "$",inr: "₹",eur: "€",};


  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  // const [roundUp, setRoundUp] = useState(false);

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const finalAmount = customAmount || selectedAmount;

  const handleSubmit = async () => {
    if (!finalAmount || !name || !email) {
      alert("All fields are required.");
      return;
    }

    const payload = {
      amount: Number(finalAmount),
      currency,
      donorEmail: email,
      donorName: name,
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    };

    setLoading(true);

    try {
      const res = await fetch("https://api.momsmilk.app/donations/checkout", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("API RESPONSE:", data);

      const redirectUrl = data.paymentUrl || data.checkoutUrl || data.url;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert("No payment link returned. Response:\n" + JSON.stringify(data, null, 2));
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <button className={styles.closeBtn} onClick={close}>✕</button>
        <h3 className={styles.title}>Donation Amount</h3>

        <div className={styles.amountBtn}>
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              className={`${styles.button} ${selectedAmount === amt ? styles.active : ""}`}
              onClick={() => {
                setSelectedAmount(amt);
                setCustomAmount(amt.toString());
              }}
            >
              ${amt}
            </button>
          ))}
        </div>

        {/* name */}
        <div className={styles.inputRow}>
          <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* email */}
        <div className={styles.inputRow}>
          <input 
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* enter the amount */}
        <div className={styles.inputRow}>
          <span>{currencySymbols[currency]}</span>
          <input
            type="number"
            placeholder="Enter amount"
            min="1"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
          />
        </div>

        {/* <div className={styles.toggleRow}>
          <label className={styles.toggle}>
            <input type="checkbox" checked={roundUp} onChange={() => setRoundUp(!roundUp)} />
            <span className={styles.togglebar}></span>
          </label>
          <p>
            Round up donation to cover fees
            <br />
            <small>100% goes to the cause</small>
          </p>
        </div> */}

        {/* Submit Button */}
        <button 
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Processing..." : "Next Step"}
        </button>

      </div>
    </div>
  );
}
