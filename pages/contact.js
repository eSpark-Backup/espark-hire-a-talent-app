import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import ContactInfo from '@/components/Contact/ContactInfo'
import ContactForm from '@/components/Contact/ContactForm'
import GoogleMap from '@/components/Contact/GoogleMap'
import Footer from '@/components/Layout/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Contact Us" />

      <ContactInfo />

      <ContactForm />

      <GoogleMap />

      <Footer />
    </>
  )
}
