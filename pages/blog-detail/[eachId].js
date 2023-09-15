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

import React from "react";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import { blogData } from "constants/blogConstants";

export default function BlogDetails() {
  const router = useRouter();
  const getId = router.query.eachId;
  const filterData = blogData?.filter((item) => item?.id === parseInt(getId));

  if (!filterData.length) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "1",
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
      <BlogDetailsContent />
    </>
  );
}
