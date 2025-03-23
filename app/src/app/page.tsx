import Navbar from "@/components/NavBar";
import HeroSection from "../components/HeroSection";
import "./globals.css";
import WhyVoteComponent from "@/components/WhyVote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyVoteComponent />
      <Footer />
    </main>
  );
}
