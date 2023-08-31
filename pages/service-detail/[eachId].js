import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import { WhatWeWorkImage, sliderData } from "constants/constants";
import WhatWeWork from "@/components/CybersecurityServices/WhatWeWork";
import ReasonsToInvestInCryptocurrency from "@/components/CryptoStartup/ReasonsToInvestInCryptocurrency";
import AboutUs from "@/components/CryptoStartup/AboutUs";
import IndustryPartners from "@/components/CryptoStartup/IndustryPartners";
import ServicesItem from "@/components/Services/ServicesItem";
import { useRouter } from "next/router";
import Platforms from "@/components/CryptoStartup/Platforms";
import { ThreeDots } from "react-loader-spinner";

export default function ServiceDetails() {
  const router = useRouter();
  const getId = router.query.eachId;
  const filterData = sliderData?.filter((item) => item?.id === parseInt(getId));


  if (!filterData.length) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "1"
        }}
      >
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#029894"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
  const { title, data, mainHeading, mainParagraph, id } = filterData[0];
  const { services, content } = data;
  const { sections } = content;
  const { heading, paragraph, list, image } = sections[0];

  return (
    <>
      <PageTitle
        homeText="Home"
        pageTitle={title}
        pageSubTitle={title}
      />

      <ServicesItem
        title={mainHeading}
        Paragraph={mainParagraph}
        data={services}
        id={id}
      />

      <WhatWeWork
        Items={list}
        title={heading}
        image={image}
        paragraph={paragraph}
      />

      <AboutUs
        title={sections[1].heading}
        paragraph={sections[1].paragraph}
        data={sections[1].list}
        image={sections[1].image}
      />

      <ReasonsToInvestInCryptocurrency
        title={sections[2].heading}
        data={sections[2].list}
        image={sections[2].image}
      />

      {/* <OurPlatforms
        data={sections[3].list}
        heading={sections[3].heading}
        paragraph={sections[3].paragraph}
      /> */}
      <Platforms
        data={sections[3].list}
        heading={sections[3].heading}
        paragraph={sections[3].paragraph}
      />

      <IndustryPartners
        title={sections[4].heading}
        paragraph={sections[4].paragraph}
      />

      {/* <ServiceDetailsContent /> */}
      {/* <GetStarted /> */}
    </>
  );
}
