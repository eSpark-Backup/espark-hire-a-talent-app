import React from 'react';
import HeroSlider from '@/components/BusinessConsulting/HeroSlider';
import OurServices from '@/components/BusinessConsulting/OurServices';
import AboutUs from '@/components/BusinessConsulting/AboutUs';
import FunFacts from '@/components/Common/FunFacts';
import OurTeamMember from '@/components/Common/OurTeamMember';
import OurPlatforms from '@/components/ICOLanding/OurPlatforms';
import PartnerArea from '@/components/TechnologySolutions/PartnerArea';

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

export default function Home3() {
  return (
    <>
      <HeroSlider data={bannerData} />
      <OurPlatforms
        data={platFormItems}
        platFormItemsTitle={title}
        platFormItemsContent={content}
      />

      <OurServices items={sliderData} title={BudgetTitle} para={BudgetPara} />

      <AboutUs title={aboutTitle} content={aboutContent} items={aboutItems} />

      <FunFacts />

      <OurTeamMember data={personsData} items={listItem} teamData={teamData} />

      <PartnerArea />
    </>
  );
}
