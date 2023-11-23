import React from "react";

import ProgressSection from "./ProgressSection";

const Tools = ({ tools, windowWidth }) => {
  return (
    <ProgressSection data={tools} heading="TOOLS" windowWidth={windowWidth} />
  );
};

export default Tools;
