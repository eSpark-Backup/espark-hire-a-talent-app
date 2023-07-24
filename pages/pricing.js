import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import PricingTable from '@/components/Pricing/PricingTable'
import Faq from '@/components/Common/Faq'
import ComparePlans from '@/components/Pricing/ComparePlans'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'

export default function Pricing() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Pricing" />

      <PricingTable />

      <Faq />

      <ComparePlans />

      <GetStarted />

      <Footer />
    </>
  )
}
