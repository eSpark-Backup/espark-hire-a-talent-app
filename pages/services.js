import React from "react";
// import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Common/PageTitle";
import ServicesItem from "../components/Services/ServicesItem";
import OurCaseStudies from "@/components/Common/OurCaseStudies";
import WorkProcess from "@/components/Common/WorkProcess";
import PartnerSlider from "@/components/Common/PartnerSlider";
import PricingTable from "@/components/Pricing/PricingTable";
import Faq from "@/components/Common/Faq";
import GetStarted from "@/components/Common/GetStarted";
import Services2 from "@/components/CybersecurityServices/Services";
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
} from "constants/constants";
// import Features from "@/components/TechnologySolutions/Features";
import Features from "@/components/CybersecurityServices/Features";
import WhyChooseUs from "@/components/CybersecurityServices/WhyChooseUs";
import CyberSafety from "@/components/CybersecurityServices/CyberSafety";
import NewsletterForm from "@/components/Common/NewsletterForm";
import OurServices from "@/components/BusinessConsulting/OurServices";
// import Footer from "@/components/Layout/Footer";

export default function Services() {
  return (
    <>
      {/* Changing Starts */}
      <PageTitle homeText="Home" pageTitle="How It Works" pageSubTitle="How It Works" />

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

      {/* <NewsletterForm /> */}
      {/* Changes Finish Here*/}

      {/* <ServicesItem />

      <GetStarted />

      <OurCaseStudies />

      <WorkProcess /> */}

      {/* <div className="bg-f9f9f9 border-bottom">
        <PricingTable />
      </div>

      <Faq /> */}
    </>
  );
}
