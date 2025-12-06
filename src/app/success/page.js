"use client";
import styles from "./success.module.css";
import { GiCheckMark } from "react-icons/gi";
export default function SuccessPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>

          <div  className={styles.icon} >✔</div>

        <h2 className={styles.title}>Payment Successful 🎉</h2>
        <p className={styles.message}>
          Your payment has been successfully processed. <br />
          You can now return to the homepage.
        </p>

        <button className={styles.ctnBtn} onClick={() => window.location.replace ( "/")}>
          Continue
        </button>
      </div>
    </div>
  );
}
