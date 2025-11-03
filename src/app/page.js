import Image from "next/image";
import styles from "./page.module.css";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Analytics from "./sections/Analytics/Analytics";
import Donation from "./sections/Donation/Donation";
import Review from "./sections/Review/Review";
import Contact from "./sections/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Analytics/>
      <Donation/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}
