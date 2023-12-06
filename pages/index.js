import React from 'react';
import HeroSlider from '@/components/BusinessConsulting/HeroSlider';
import OurServices from '@/components/BusinessConsulting/OurServices';
import AboutUs from '@/components/BusinessConsulting/AboutUs';
import FunFacts from '@/components/Common/FunFacts';
import OurTeamMember from '@/components/Common/OurTeamMember';
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
} from 'constants/constants';
import OurPlatforms from '@/components/ICOLanding/OurPlatforms';
import PartnerArea from '@/components/TechnologySolutions/PartnerArea';
import NewsletterForm2 from '@/components/Common/NewsletterForm2';

export default function Home3() {
  return (
    <>
      <HeroSlider data={bannerData} />
      <OurPlatforms
        data={platFormItems}
        platFormItemsTitle={title}
        platFormItemsContent={content}
      />

      <AboutUs title={aboutTitle} content={aboutContent} items={aboutItems} />
      <OurServices items={sliderData} title={BudgetTitle} para={BudgetPara} />

      <FunFacts />

      <OurTeamMember data={personsData} items={listItem} teamData={teamData} />

      <PartnerArea />

      <NewsletterForm2 />
    </>
  );
}
