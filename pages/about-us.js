import React from 'react'
import PageTitle from '@/components/Common/PageTitle'
import Process from '@/components/AboutUs/Process'
import GetStarted from '@/components/Common/GetStarted'

import {
  GetStartedButtonText,
  GetStartedParagraph,
  GetStartedTitle,
  HiringServicesImg,
  HiringServicesItems,
  HiringServicesParaggraph,
  HiringServicesShape,
  HiringServicesTitle,
  Paragraph,
  ProcessData,
  Title,
  WhatWeWorkImage,
  WhatWeWorkItems,
  WhatWeWorkShape,
  WhatWeWorkTitle,
  processTitle,
} from "constants/constants";
import WhatWeWork from '@/components/CybersecurityServices/WhatWeWork'
import IndustryPartners from '@/components/CryptoStartup/IndustryPartners'
import WhyChooseCrypto from '@/components/CryptoStartup/WhyChooseCrypto';




export default function AboutUs() {
  return (
    <>
      <PageTitle homeText="Home" pageTitle="What We Do?" pageSubTitle="What We Do" />

      {/* <AboutContent /> */}

      <WhyChooseCrypto image={HiringServicesImg} title={HiringServicesTitle} paragraph={HiringServicesParaggraph} Items={HiringServicesItems} backGround={true} shape={HiringServicesShape} />

      {/* <PartnerArea /> */}

      <Process processData={ProcessData} title={processTitle} />

      {/* <ClientsFeedbackStyle2 /> */}

      {/* <TeamSlider /> */}

      <GetStarted title={GetStartedTitle} paragraph={GetStartedParagraph} text={GetStartedButtonText} />

      <WhatWeWork Items={WhatWeWorkItems} title={WhatWeWorkTitle} image={WhatWeWorkImage} shape={WhatWeWorkShape} />

      <IndustryPartners title={Title} Paragraph={Paragraph} />
    </>
  )
}
