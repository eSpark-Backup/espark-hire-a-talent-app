import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import ServiceDetailsContent from '@/components/Services/ServiceDetailsContent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'

export default function ServiceDetails() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Service Details" />

      <ServiceDetailsContent />

      <GetStarted />

      <Footer />
    </>
  )
}
