import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Benefits from "../components/Benefits";
import Classes from "../components/Classes";
import Schedule from "../components/Schedule";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <Classes />
        <Schedule />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
