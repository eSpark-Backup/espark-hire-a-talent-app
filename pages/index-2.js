import React from 'react'
import NavbarStyle2 from '@/components/Layout/NavbarStyle2'
import HeroBanner from '@/components/DigitalMarketing/HeroBanner'
import PartnerSlider from '@/components/Common/PartnerSlider'
import OurServices from '@/components/DigitalMarketing/OurServices'
import AboutUs from '@/components/DigitalMarketing/AboutUs'
import Testimonials from '@/components/Common/Testimonials'
import Process from '@/components/DigitalMarketing/Process'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import OurTeamMember from '@/components/Common/OurTeamMember'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import GetStartedStyle2 from '@/components/Common/GetStartedStyle2'
import Footer from '@/components/Layout/Footer'

export default function Home2() {
  return (
    <>
      <NavbarStyle2 />

      <HeroBanner />

      <PartnerSlider />

      <OurServices />

      <AboutUs />

      <Testimonials />

      <Process />

      <OurCaseStudies />

      <OurTeamMember />

      <OurLatestBlog />

      <GetStartedStyle2 />
 
      <Footer />
    </>
  )
}
