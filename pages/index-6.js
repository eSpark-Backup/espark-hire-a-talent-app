import React from 'react'
import ValueTradeArea from '@/components/ICOLanding/ValueTradeArea'
import Navbar from '@/components/ICOLanding/Navbar'
import HeroBanner from '@/components/ICOLanding/HeroBanner'
import AboutICO from '@/components/ICOLanding/AboutICO'
import Features from '@/components/ICOLanding/Features'
import WhyChooseICO from '@/components/ICOLanding/WhyChooseICO'
import TokenDistribution from '@/components/ICOLanding/TokenDistribution'
import OurPlatforms from '@/components/ICOLanding/OurPlatforms'
import Roadmap from '@/components/ICOLanding/Roadmap'
import OurLeadership from '@/components/ICOLanding/OurLeadership'
import TeamMember from '@/components/ICOLanding/TeamMember'
import IndustryPartners from '@/components/ICOLanding/IndustryPartners'
import FrequentlyAskedQuestions from '@/components/ICOLanding/FrequentlyAskedQuestions'
import ContactUs from '@/components/ICOLanding/ContactUs'
import Footer from '@/components/ICOLanding/Footer'
 
export default function Home6() {
  return (
    <>
      <ValueTradeArea />

      <Navbar />

      <HeroBanner />

      <div className="background-with-black-color">

        <AboutICO />

        <Features />

        <WhyChooseICO />

        <TokenDistribution />
        
        <OurPlatforms />

        <Roadmap />

        <OurLeadership />

        <TeamMember />

        <IndustryPartners />

        <FrequentlyAskedQuestions />

        <ContactUs />

        <Footer />

      </div>
    </>
  )
}
