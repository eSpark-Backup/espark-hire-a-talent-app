import React from "react";
import HeroSlider from "@/components/BusinessConsulting/HeroSlider";
import OurServices from "@/components/BusinessConsulting/OurServices";
import AboutUs from "@/components/BusinessConsulting/AboutUs";
import FunFacts from "@/components/Common/FunFacts";
// import FreeSEOQuotesForm from '@/components/Common/FreeSEOQuotesForm'
// import ClientsFeedback from '@/components/Common/ClientsFeedback'
// import OurCaseStudies from '@/components/Common/OurCaseStudies'
import OurTeamMember from "@/components/Common/OurTeamMember";
// import OurLatestBlog from '@/components/Common/OurLatestBlog'
import NewsletterForm from "@/components/Common/NewsletterForm";
import {
  BudgetPara,
  BudgetTitle,
  aboutContent,
  aboutItems,
  aboutTitle,
  bannerData,
  content,
  listItem,
  personsData,
  platFormItems,
  sliderData,
  teamData,
  title,
} from "constants/constants";
import OurPlatforms from "@/components/ICOLanding/OurPlatforms";
import PartnerArea from "@/components/TechnologySolutions/PartnerArea";

export default function Home3() {
  return (
    <>


      <HeroSlider data={bannerData} />
      <OurPlatforms
        data={platFormItems}
        platFormItemsTitle={title}
        platFormItemsContent={content}
      />

      <OurServices data={sliderData} title={BudgetTitle} para={BudgetPara} />

      <AboutUs title={aboutTitle} content={aboutContent} items={aboutItems} />

      <FunFacts />

      {/* <FreeSEOQuotesForm /> */}

      {/* <ClientsFeedback /> */}

      {/* <OurCaseStudies /> */}

      <OurTeamMember data={personsData} items={listItem} teamData={teamData} />

      <PartnerArea />

      {/* <OurLatestBlog /> */}

      <NewsletterForm />

    
    </>
  );
}
