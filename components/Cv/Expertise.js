import React from 'react';

import ProgressSection from './ProgressSection';

const Expertise = ({ expertise, windowWidth }) => {
  return (
    <ProgressSection
      data={expertise}
      heading="EXPERTISE"
      windowWidth={windowWidth}
    />
  );
};

export default Expertise;
