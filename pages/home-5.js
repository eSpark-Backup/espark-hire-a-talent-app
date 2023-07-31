import React from 'react'
import ValueTradeArea from '@/components/CryptoStartup/ValueTradeArea'
import Navbar from '@/components/CryptoStartup/Navbar'
import HeroBanner from '@/components/CryptoStartup/HeroBanner'
import AboutUs from '@/components/CryptoStartup/AboutUs'
import Features from '@/components/CryptoStartup/Features'
import PreTokenSale from '@/components/CryptoStartup/PreTokenSale'
import Platforms from '@/components/CryptoStartup/Platforms'
import WhyChooseCrypto from '@/components/CryptoStartup/WhyChooseCrypto'
import TokenDistribution from '@/components/CryptoStartup/TokenDistribution'
import ReasonsToInvestInCryptocurrency from '@/components/CryptoStartup/ReasonsToInvestInCryptocurrency'
import Roadmap from '@/components/CryptoStartup/Roadmap'
import TeamMember from '@/components/CryptoStartup/TeamMember'
import OurLeadership from '@/components/CryptoStartup/OurLeadership'
import DownloadApp from '@/components/CryptoStartup/DownloadApp'
import IndustryPartners from '@/components/CryptoStartup/IndustryPartners'
import InvestorsPartners from '@/components/CryptoStartup/InvestorsPartners'
import ContactUs from '@/components/CryptoStartup/ContactUs'
import Footer from '@/components/CryptoStartup/Footer'

export default function Home5() {
  return (
    <>
      <ValueTradeArea />

      <Navbar />

      <HeroBanner />

      <div className="background-with-gradient-color">

        <AboutUs />

        <Features />

        <PreTokenSale />

        <Platforms />

        <WhyChooseCrypto />

        <TokenDistribution />

        <ReasonsToInvestInCryptocurrency />

        <Roadmap />

        <TeamMember />

        <OurLeadership />

        <DownloadApp />

        <IndustryPartners />

        <InvestorsPartners />

        <ContactUs />

        <Footer />

      </div>
    </>
  )
}
