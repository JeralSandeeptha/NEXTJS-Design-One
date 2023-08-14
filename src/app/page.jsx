import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroDown from "@/components/HeroDown";
import ImageGridOne from "@/components/ImageGridOne";
import ImageGridTwo from "@/components/ImageGridTwo";
import Pricing from "@/components/Pricing";
import Profile from "@/components/Profile";
import Team from "@/components/Team";
import Contact from "@/pages/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroDown />
      <ImageGridOne />
      <Pricing />
      <Team />
      <ImageGridTwo />
      <Profile />
      <Features />
      <Contact />
      <Footer />
    </>
  )
}
