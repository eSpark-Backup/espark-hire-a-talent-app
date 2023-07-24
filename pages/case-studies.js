import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesCard from '@/components/CaseStudies/CaseStudiesCard'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'

export default function CaseStudies() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Case Studies" />

      <CaseStudiesCard />

      <GetStarted />

      <Footer />
    </>
  )
}