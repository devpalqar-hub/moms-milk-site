import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Analytics from "./sections/Analytics/Analytics";
import Review from "./sections/Review/Review";
import Contact from "./sections/Contact/Contact";
import MilkDonation from "./sections/MilkDonation/MilkDonation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Analytics/>
      <MilkDonation/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}
