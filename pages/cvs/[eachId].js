import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { Inter } from "next/font/google";

import Link from "next/link";

import Banner from "@/components/Cv/Banner";
import Detail from "@/components/Cv/Detail";
import TechTools from "@/components/Cv/TechTools";
import WorkExperience from "@/components/Cv/WorkExperience";
import Expertise from "@/components/Cv/Expertise";
import Tools from "@/components/Cv/Tool";
import EducationCertificate from "@/components/Cv/EducationCertificate";
import Feedback from "@/components/Cv/Feedback";

import { cvData } from "constants/cvsConstants";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const IndividualCV = () => {
  const router = useRouter();
  const getId = router.query.eachId;
  const cv = cvData?.find((item) => item?.id === parseInt(getId));

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    header.style.display = "none";
    footer.style.display = "none";

    return () => {
      header.style.display = "";
      footer.style.display = "";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="cv-area">
      <Banner banner={cv.banner} windowWidth={windowWidth} />

      <Detail
        para={cv.aboutMe}
        profileDetail={cv.profileDetail}
        windowWidth={windowWidth}
      />

      <TechTools tools={cv.techTools} />

      <WorkExperience experience={cv.workExperience} inter={inter} />

      <Expertise expertise={cv.expertise} windowWidth={windowWidth} />

      <Tools tools={cv.tools} windowWidth={windowWidth} />

      <EducationCertificate
        education={cv.education}
        certification={cv.certification}
        inter={inter}
      />

      <Feedback feedbacks={cv.feedback} windowWidth={windowWidth} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = cvData.map((cv) => ({
    params: { eachId: cv.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { eachId } = params;
  const filterData = cvData.filter((item) => item.id === parseInt(eachId));

  return {
    props: {
      cv: filterData[0] || null,
    },
  };
};

export default IndividualCV;
