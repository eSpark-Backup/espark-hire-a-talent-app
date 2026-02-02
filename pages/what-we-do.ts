import React from 'react';
import PageTitle from '@/components/Common/PageTitle';
import Process from '@/components/AboutUs/Process';
import GetStarted from '@/components/Common/GetStarted';
import WhatWeWork from '@/components/CybersecurityServices/WhatWeWork';
import IndustryPartners from '@/components/CryptoStartup/IndustryPartners';
import WhyChooseCrypto from '@/components/CryptoStartup/WhyChooseCrypto';
import Faq from '@/components/Common/Faq';
import NewsletterForm2 from '@/components/Common/NewsletterForm2';

import {
  FaqData,
  FaqTitle,
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
} from 'constants/constants';

export default function AboutUs() {
  return (
    <>
      <PageTitle
        homeText="Home"
        pageTitle="What We Do?"
        pageSubTitle="What We Do"
      />

      <WhyChooseCrypto
        image={HiringServicesImg}
        title={HiringServicesTitle}
        paragraph={HiringServicesParaggraph}
        Items={HiringServicesItems}
        backGround={true}
        shape={HiringServicesShape}
      />

      <Process processData={ProcessData} title={processTitle} />

      <GetStarted
        title={GetStartedTitle}
        paragraph={GetStartedParagraph}
        text={GetStartedButtonText}
      />

      <WhatWeWork
        Items={WhatWeWorkItems}
        title={WhatWeWorkTitle}
        image={WhatWeWorkImage}
        shape={WhatWeWorkShape}
      />

      <IndustryPartners title={Title} paragraph={Paragraph} />

      <Faq title={FaqTitle} item={FaqData} />

      <NewsletterForm2 />
    </>
  );
}
