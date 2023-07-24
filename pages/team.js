import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import OurTeamMembers from '@/components/Team/OurTeamMembers'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'

export default function Team() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Meet Our Leadership Team" />

      <OurTeamMembers />

      <GetStarted />

      <Footer />
    </>
  )
}
