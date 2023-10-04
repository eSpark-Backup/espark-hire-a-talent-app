import React from "react";
// import Link from "next/link";
// import NewsletterForm2 from "@/components/Common/NewsletterForm2";
import PageTitle from "@/components/Common/PageTitle";
import CareerCards from "@/components/Careers/CareerCards";
import { jobInfo } from "constants/careerConstants";
function Career() {
  return (
    <>
      <PageTitle homeText="Home" pageTitle="Careers" pageSubTitle="Careers" />
      <div className="container-xxl career-section ptb-100">
       <CareerCards data={jobInfo} />
      </div>
    </>
  );
}
export default Career;
