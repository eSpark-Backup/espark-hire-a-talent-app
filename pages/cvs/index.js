import React, { useEffect } from "react";

import Detail from "@/components/Cv/Detail";
import TechTools from "@/components/Cv/TechTools";
import WorkExperience from "@/components/Cv/WorkExperience";
import Expertise from "@/components/Cv/Expertise";
import Tools from "@/components/Cv/Tool";
import Feedback from "@/components/Cv/Feedback";
import EducationCertificate from "@/components/Cv/EducationCertificate";
import Banner from "@/components/Cv/Banner";

import { cvData } from "constants/cvsConstants";

export default function CV() {
  useEffect(() => {
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    header.style.display = "none";
    footer.style.display = "none";
  });

  return (
    <div className="cv-area">
      <Banner banner={cvData[0].banner} />

      <Detail
        para={cvData[0].aboutMe}
        profileDetail={cvData[0].profileDetail}
      />

      <TechTools tools={cvData[0].techTools} />

      <WorkExperience experience={cvData[0].workExperience} />

      <Expertise expertise={cvData[0].expertise} />

      <Tools tools={cvData[0].tools} />

      <EducationCertificate
        education={cvData[0].education}
        certification={cvData[0].certification}
      />

      <Feedback feedbacks={cvData[0].feedback} />
    </div>
  );
}
