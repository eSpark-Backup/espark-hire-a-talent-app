import React from 'react';
import PageTitle from '@/components/Common/PageTitle';
import PartnerSlider from '@/components/Common/PartnerSlider';
import Services2 from '@/components/CybersecurityServices/Services';
import {
  BudgetPara,
  BudgetTitle,
  FeaturesCard,
  FeaturesPara,
  FeaturesTitle,
  OurServicesCards,
  OurServicesPara,
  OurServicesTitle,
  cyberSafetyPara,
  cyberSafetyTitle,
  processOfHowItWorks,
  sliderData,
  whyChooseUsListItems,
  whyChooseUsPara,
  whyChooseUsTitle,
} from 'constants/constants';
import Features from '@/components/CybersecurityServices/Features';
import WhyChooseUs from '@/components/CybersecurityServices/WhyChooseUs';
import CyberSafety from '@/components/CybersecurityServices/CyberSafety';
import OurServices from '@/components/BusinessConsulting/OurServices';
import NewsletterForm2 from '@/components/Common/NewsletterForm2';

export default function Services() {
  return (
    <>
      <PageTitle
        homeText="Home"
        pageTitle="How It Works"
        pageSubTitle="How It Works"
      />

      <Services2
        ServicesPara="Work with us and unlock the fastest professional hiring Services! Here is How we pick a worthy professionals"
        ServicesTitle="Witness the Productive Work of a Professional HR Firm"
        cardsItems={processOfHowItWorks}
      />

      <OurServices
        items={OurServicesCards}
        title={OurServicesTitle}
        para={OurServicesPara}
      />

      <Features
        title={FeaturesTitle}
        para={FeaturesPara}
        items={FeaturesCard}
      />

      <WhyChooseUs
        title={whyChooseUsTitle}
        para={whyChooseUsPara}
        items={whyChooseUsListItems}
      />

      <CyberSafety title={cyberSafetyTitle} para={cyberSafetyPara} />

      <PartnerSlider />

      <NewsletterForm2 />
    </>
  );
}
