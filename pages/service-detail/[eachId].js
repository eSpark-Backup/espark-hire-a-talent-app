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

export default function ServiceDetails() {
  const router = useRouter();
  const getId = router.query.eachId;
  const filterData = sliderData.filter((item) => item.id === parseInt(getId));
  const { title, data } = filterData[0];
  const { services, content } = data;
  return (
    <>
      <PageTitle
        homeText="Services Details"
        pageTitle={title}
        pageSubTitle={title}
      />

      <ServicesItem
        title={ServicesItemsTitle}
        Paragraph={ServicesItemsparagraph}
        data={services}
      />

      <WhatWeWork
        Items={WhatWeWorkItems}
        title={WhatWeWorkTitle}
        image={WhatWeWorkImage}
        shape={WhatWeWorkShape}
      />

      <AboutUs
        title={AboutCryptoTitle}
        paragraph={AboutCryptoParagraph}
        data={AboutCryptoItems}
      />

      <ReasonsToInvestInCryptocurrency
        title={DatabaseTitle}
        data={DatabaseItems}
      />

      <OurPlatforms
        data={platFormItems}
        platFormItemsTitle={title}
        platFormItemsContent={content}
      />

      <IndustryPartners title={Title} paragraph={Paragraph} />

      {/* <ServiceDetailsContent /> */}
      {/* <GetStarted /> */}
    </>
  );
}
