import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import {
  AboutCryptoItems,
  AboutCryptoParagraph,
  AboutCryptoTitle,
  BudgetPara,
  BudgetTitle,
  DatabaseItems,
  DatabaseTitle,
  Paragraph,
  ServicesItems,
  ServicesItemsTitle,
  ServicesItemsparagraph,
  Title,
  WhatWeWorkImage,
  WhatWeWorkItems,
  WhatWeWorkShape,
  WhatWeWorkTitle,
  content,
  platFormItems,
  sliderData,
  title,
} from "constants/constants";
import WhatWeWork from "@/components/CybersecurityServices/WhatWeWork";
import ReasonsToInvestInCryptocurrency from "@/components/CryptoStartup/ReasonsToInvestInCryptocurrency";
import AboutUs from "@/components/CryptoStartup/AboutUs";
import OurPlatforms from "@/components/ICOLanding/OurPlatforms";
import IndustryPartners from "@/components/CryptoStartup/IndustryPartners";
import ServicesItem from "@/components/Services/ServicesItem";
import { useRouter } from "next/router";
import Platforms from "@/components/CryptoStartup/Platforms";

export default function ServiceDetails() {
  const router = useRouter();
  const getId = router.query.eachId;
  const filterData = sliderData?.filter((item) => item?.id === parseInt(getId));
  const { title, data , mainHeading, mainParagraph } = filterData[0];
  const { services, content } = data;
  const { sections } = content;
  const { heading, paragraph, list } = sections[0]
  console.log(filterData,"......")
  return (
    <>
      <PageTitle
        homeText="Services Details"
        pageTitle={title}
        pageSubTitle={title}
      />

      <ServicesItem
        title={mainHeading}
        Paragraph={mainParagraph}
        data={services}
      />

      <WhatWeWork
        Items={list}
        title={heading}
        image={WhatWeWorkImage}
        paragraph={paragraph}

      />

      <AboutUs
        title={sections[1].heading}
        paragraph={sections[1].paragraph}
        data={sections[1].list}
      />

      <ReasonsToInvestInCryptocurrency
        title={sections[2].heading}
        data={sections[2].list}
      />

      <OurPlatforms
        data={sections[3].list}
        heading={sections[3].heading}
        paragraph={sections[3].paragraph}
      />
      <Platforms 
       data={sections[3].list}
       heading={sections[4].heading}
       paragraph={sections[4].paragraph}

      />

      <IndustryPartners title={sections[4].heading} paragraph={sections[4].paragraph} />

      {/* <ServiceDetailsContent /> */}
      {/* <GetStarted /> */}
    </>
  );
}
