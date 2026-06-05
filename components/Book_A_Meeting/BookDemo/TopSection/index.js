import React from 'react';

import ContentSection from './ContentSection';
import ImageSection from './ImageSection';

const TopSection = ({ globalTeams, solutions, teams }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ContentSection globalTeams={globalTeams} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <ImageSection solutions={solutions} teams={teams} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
