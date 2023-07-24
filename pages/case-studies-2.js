import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesCard2 from '@/components/CaseStudies/CaseStudiesCard2'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'

export default function CaseStudies2() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Case Studies 2" />

      <CaseStudiesCard2 />

      <GetStarted />

      <Footer />
    </>
  )
}