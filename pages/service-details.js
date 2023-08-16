import React from 'react'
import PageTitle from '@/components/Common/PageTitle'
import { AboutCryptoItems, AboutCryptoParagraph, AboutCryptoTitle, BudgetPara, BudgetTitle, DatabaseItems, DatabaseTitle, Paragraph, ServicesItems, ServicesItemsTitle, ServicesItemsparagraph, Title, WhatWeWorkImage, WhatWeWorkItems, WhatWeWorkShape, WhatWeWorkTitle, content, platFormItems, sliderData, title } from 'constants/constants'
import WhatWeWork from '@/components/CybersecurityServices/WhatWeWork'
import ReasonsToInvestInCryptocurrency from '@/components/CryptoStartup/ReasonsToInvestInCryptocurrency'
import AboutUs from '@/components/CryptoStartup/AboutUs'
import OurPlatforms from '@/components/ICOLanding/OurPlatforms'
import IndustryPartners from '@/components/CryptoStartup/IndustryPartners'
import ServicesItem from '@/components/Services/ServicesItem'


export default function ServiceDetails() {
  return (
    <>
      <PageTitle
        homeText="Home"
        pageTitle="Service Details"
        pageSubTitle="Service Details"
      />

      <ServicesItem
        title={ServicesItemsTitle}
        Paragraph={ServicesItemsparagraph}
        data={ServicesItems}
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

      <IndustryPartners
        title={Title}
        paragraph={Paragraph}
      />

      {/* <ServiceDetailsContent /> */}
      {/* <GetStarted /> */}
    </>
  )
}
