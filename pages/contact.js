import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import GoogleMap from "@/components/Contact/GoogleMap";
import { ContactInfoData } from "constants/constants";


export default function Contact() {
  return (
    <>


      <PageTitle homeText="Home" pageTitle="Contact Us" pageSubTitle="Contact Us" />

      <ContactInfo data={ContactInfoData} />

      <ContactForm />

      {/* <GoogleMap /> */}


    </>
  );
}
