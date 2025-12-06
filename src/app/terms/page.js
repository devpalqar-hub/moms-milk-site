import React from "react";
import "./page.css";

export const metadata = {
  title: "Mom's Milk - Terms & Conditions",
};

export default function Page() {
  return (
    <section className="terms-container">
      <h1 className="terms-title">
        Terms & Conditions – <img src="/Logo.svg" alt="" className="logo" />
      </h1>

      <p className="last-updated">Last Updated: October 31, 2025</p>

      <p>
        Welcome to Mom’s Milk (“we”, “our”, “the App”). By using the application,
        you agree to the following Terms & Conditions. If you do not agree,
        please stop using the App.
      </p>

      <h2>1. Use of the Application</h2>
      <ul>
        <li>
          The App helps mothers track diaper logs, sleep logs, feeding logs,
          breastfeeding sessions, pumping, and baby wellness activities.
        </li>
        <li>
          The App also includes features to connect breast milk donors and
          requesters.
        </li>
        <li>The App is intended for personal and caregiving purposes only.</li>
      </ul>

      <h2>2. Medical Disclaimer</h2>
      <ul>
        <li>Mom’s Milk does not provide medical, diagnostic, or professional healthcare advice.</li>
        <li>All logs and suggestions are informational only.</li>
        <li>Always consult a pediatrician or healthcare expert for concerns.</li>
        <li>The donor/requester feature must be used responsibly.</li>
      </ul>

      <h2>3. Account & Registration</h2>
      <ul>
        <li>Some features may require creating an account.</li>
        <li>You agree to provide accurate and updated information.</li>
        <li>You are responsible for protecting your login credentials.</li>
      </ul>

      <h2>4. User Data & Privacy</h2>
      <ul>
        <li>
          You may enter personal and baby-related logs such as sleep, diaper,
          feeding, breastfeeding, and health updates.
        </li>
        <li>
          Data is protected under strict privacy practices and not shared without
          consent (unless required by law).
        </li>
        <li>
          Limited donor/requester data may be shared to enable communication.
        </li>
        <li>See our Privacy terms for full details.</li>
      </ul>

      <h2>5. Content Ownership</h2>
      <ul>
        <li>
          All design, features, and intellectual property belong to Mom’s Milk /
          Parasya Technologies.
        </li>
        <li>You may not copy, reverse engineer, or reuse App materials.</li>
      </ul>

      <h2>6. User Responsibilities</h2>
      <p>You agree <strong>NOT</strong> to:</p>
      <ul>
        <li>misuse the App or donor/requester features</li>
        <li>provide false or harmful information</li>
        <li>harass or abuse other users</li>
        <li>attempt to hack or disrupt the App</li>
        <li>misuse contact details shared between donors and recipients</li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <ul>
        <li>The App is provided “as is”, with no warranties.</li>
        <li>We are not responsible for:</li>
        <ul>
          <li>inaccurate logs or user-generated data</li>
          <li>downtime or technical issues</li>
          <li>loss of data</li>
          <li>issues between donors and recipients</li>
          <li>decisions based on app insights</li>
        </ul>
      </ul>

      <p>Users are responsible for their actions and decisions.</p>

      <h2>8. Modifications</h2>
      <p>
        We may update these Terms at any time. Continued use means acceptance of
        the updated Terms.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate accounts for violations. You may stop using
        the App at any time.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India unless local laws apply.
      </p>

      <h2>11. Contact Information</h2>
      <ul>
        <li>Parasya Technologies (OPC) Pvt Ltd</li>
        <li>Email: <a href="mailto:support@parasya.in">support@parasya.in</a></li>
        <li>Phone: <span>+91 98957 28129</span> </li>
      </ul>
    </section>
  );
}
