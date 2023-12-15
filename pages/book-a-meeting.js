import React from 'react';

import LandingBanner from '@/components/Book_A_Meeting/Banner';
import BookDemo from '@/components/Book_A_Meeting/BookDemo';
import LandingPartners from '@/components/Book_A_Meeting/Partners';
import WhyUs from '@/components/Book_A_Meeting/WhyUs';
import HowItWorks from '@/components/Book_A_Meeting/HowItWorks';
import CommonQuestions from '@/components/Book_A_Meeting/CommonQuestions';
import LetsTalk from '@/components/Book_A_Meeting/LetsTalk';
import Reviews from '@/components/Book_A_Meeting/Reviews';

import { bookAMeeting } from 'constants/book_a_meeting_constant';

export default function LandingPage() {
  return (
    <>
      <LandingBanner companySize={bookAMeeting.companySize} />

      <LandingPartners />

      <BookDemo
        globalTeams={bookAMeeting?.globalTeam}
        scaleBusiness={bookAMeeting?.scaleBusiness}
        solutions={bookAMeeting?.solutions}
        teams={bookAMeeting?.teams}
        benefits={bookAMeeting.benefits}
        countries={bookAMeeting?.countries}
      />

      <WhyUs whyUs={bookAMeeting?.whyUs} />

      <HowItWorks howItWorks={bookAMeeting.howItWorks} />

      <CommonQuestions commonQuestions={bookAMeeting.commonQuestions} />

      <Reviews items={bookAMeeting.reviews} />

      <LetsTalk />
    </>
  );
}
