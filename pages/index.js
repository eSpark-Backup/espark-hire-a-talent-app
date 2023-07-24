import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import HeroBanner from '@/components/TechnologySolutions/HeroBanner'
import Features from '@/components/TechnologySolutions/Features'
import AboutUs from '@/components/TechnologySolutions/AboutUs'
import PartnerArea from '@/components/TechnologySolutions/PartnerArea'
import OurServices from '@/components/TechnologySolutions/OurServices'
import Process from '@/components/TechnologySolutions/Process'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import TeamSlider from '@/components/Common/TeamSlider'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <Features />

      <AboutUs />

      <div className="bg-gradient-color">

        <PartnerArea />

        <OurServices />

        <Process />

      </div>

      <OurCaseStudies />

      <TeamSlider />

      <OurLatestBlog />

      <GetStarted />

      <Footer />
    </>
  )
}
