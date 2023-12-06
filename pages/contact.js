import React from 'react';
import PageTitle from '@/components/Common/PageTitle';
import ContactInfo from '@/components/Contact/ContactInfo';
import ContactForm from '@/components/Contact/ContactForm';
import NewsletterForm2 from '@/components/Common/NewsletterForm2';

import { ContactInfoData } from 'constants/constants';

export default function Contact() {
  return (
    <>
      <PageTitle
        homeText="Home"
        pageTitle="Contact Us"
        pageSubTitle="Contact Us"
      />
      <ContactInfo data={ContactInfoData} />
      <ContactForm />
      <NewsletterForm2 />
    </>
  );
}
