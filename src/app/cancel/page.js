"use client";
import styles from "./cancel.module.css";

export default function CancelPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <div className={styles.icon}>✖</div>

        <h2 className={styles.title}>Payment Failed ❌</h2>
        <p className={styles.message}>
          Something went wrong  <br />
          You can try again or return to the homepage.
        </p>

        <button 
          className={styles.ctnBtn} 
          onClick={() => window.location.href = "/"}
        >
          Go Back
        </button>

      </div>
    </div>
  );
}
