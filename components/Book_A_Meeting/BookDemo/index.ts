import React from 'react';

import TopSection from './TopSection';
import BottomSection from './BottomSection';

const BookDemo = ({
  globalTeams,
  scaleBusiness,
  solutions,
  teams,
  benefits,
  countries,
}) => {
  return (
    <div>
      <TopSection
        globalTeams={globalTeams}
        solutions={solutions}
        teams={teams}
      />

      <BottomSection
        scaleBusiness={scaleBusiness}
        benefits={benefits}
        countries={countries}
      />
    </div>
  );
};

export default BookDemo;
