import React from 'react'
import PageTitle from '@/components/Common/PageTitle'
import ServiceDetailsContent from '@/components/Services/ServiceDetailsContent'
import GetStarted from '@/components/Common/GetStarted'


export default function ServiceDetails() {
  return (
    <>
      

      <PageTitle homeText="Home" pageTitle="Service Details" />

      <ServiceDetailsContent />

      <GetStarted />

    
    </>
  )
}
