import React from "react";
import "./page.css";
import Image from "next/image";

export const metadata = {
  title: "Mom's Milk - Privacy Policy",
};

export default function Page() {
  return (
    <section className="privacy-container">
      <h1 className="policy-title">Privacy Policy –{" "}<img src="/Logo.svg" alt="" className="logo"/></h1>
      <p className="last-updated">Last Updated: October 31, 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to <span>Mom's Milk</span> (“we,” “us,” or “our”). This
        Privacy Policy explains how we collect, use, and protect your
        information when you use our breastfeeding support and donor–recipient
        matching platform (“the App”). By using <span>Mom's Milk</span>, you agree to
        the practices described in this policy.
      </p>

      <h2>2. Information We Collect</h2>

      <strong>A. Information You Provide:</strong>
      <ul>
        <li>Account Setup: Name, email, phone number, and password.</li>
        <li>Baby Profile: Baby’s name, age, birth details, feeding preferences, and health notes you choose to share.</li>
        <li>Donor/Recipient Information:
          <ul>
            <li>
              <strong>For donors:</strong> Availability status, milk
              availability details, and optional health information you
              voluntarily share.
            </li>
            <li>
              <strong>For recipients:</strong> Request details, preferences, and
              notes.
            </li>
          </ul>
        </li>
        <li>Communication: Messages or support queries submitted through the app.</li>
      </ul>

      <strong>B. Information Collected Automatically:</strong>
      <ul>
        <li>Device information, IP address, operating system, app version, and activity logs.</li>
        <li>Used only for app security, performance, and troubleshooting.</li>
      </ul>

      <strong>C. Information from Third Parties:</strong>
      <ul>
        <li>
          Payment processors: Transaction confirmations for subscription or
          premium features (if used).
        </li>
        <li>
          Authentication services: If you sign in using OTP or a third-party login.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>Facilitate donor–recipient matching features.</li>
        <li>Manage your account and baby profile.</li>
        <li>Send status updates, alerts, reminders, and notifications.</li>
        <li>Improve app functionality and maintain platform safety.</li>
        <li>Provide customer support.</li>
        <li>Fulfill legal and regulatory obligations related to health and safety.</li>
      </ul>

      <h2>4. How We Share Your Information</h2>
      <ul>
        <li>We share your information only when necessary and with your consent:</li>
        <li>With payment gateways, only for processing secure transactions.</li>
        <li>With identity/OTP verification providers, if used.</li>
        <li>If required by law, regulation, or medical safety guidelines.</li>
        <li>During business restructuring, your data may be transferred responsibly.</li>
        <li>We <span>never</span> sell your personal data.</li>
      </ul>

      <h2>5. Cookies and Tracking</h2>
      <p>
        MomsMilk uses only essential cookies for login sessions and basic functionality.We do not use advertising or analytics cookies.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We use industry-standard safeguards to protect personal and sensitive information.While no system is fully secure, we continuously update our security practices.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        Personal data is retained only as long as necessary for providing services or for legal compliance.After that, it is securely deleted or anonymized.
      </p>

      <h2>8. Your Rights</h2>
      <p>You may have the right to:</p>
      <ul>
        <li>Access or update your account details.</li>
        <li>Request deletion of your data.</li>
        <li>Restrict or object to certain processing.</li>
        <li>Request a copy of your information.</li>
        <li>Withdraw consent for optional features at any time.</li>
      </ul>
      <p>We may verify your identity before fulfilling such requests.</p>

      <h2>9. International Data Transfers</h2>
      <p>
        Your data may be stored on servers located in India. <br />
        EU/UK users: We use appropriate data protection safeguards for cross-border transfers.
      </p>

      <h2>10. Children’s Privacy</h2>
      <p>
        MomsMilk is intended for parents or guardians.We do not knowingly collect data from children under 13.If accidentally submitted, please contact us—we will remove it promptly.
      </p>

      <h2>11. External Links</h2>
      <p>
        The App may contain links to third-party services such as payment pages or authentication providers. <br />We are not responsible for their privacy practices. <br />Please review their policies separately.
      </p>

      <h2>12. Changes to This Privacy Policy</h2>
      <p>
        We may update this policy occasionally.The updated version will be posted here with a new “Last Updated” date.Continued use of MomsMilk means you accept the updated policy.
      </p>

      <h2>13. Contact Us</h2>
      <p>For privacy questions or data requests, contact us:</p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@momsmilk.com">support@momsmilk.com</a>
        </li>
        <li>
          Website:{" "}
          <a
            href="https://momsmilk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            momsmilk.com
          </a>
        </li>
      </ul>
    </section>
  );
}
