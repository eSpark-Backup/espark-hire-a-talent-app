import React from "react";

import { useRouter } from "next/router";

import { cvData } from "constants/cvsConstants";
import Link from "next/link";

export default function CV() {
  const router = useRouter();

  return (
    <div className="container cv-main-area">
      <div className="row">
        {cvData.map((cv, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col">
            <GridView banner={cv.banner} key={index} cvId={cv.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

const GridView = (props) => {
  const { index, banner, cvId } = props;

  return (
    <div key={index} className="cv-banner cv-grid">
      <div className="main-box-banner">
        <div className="cv-banner-area cv-grid-banner-area">
          <div className="banner-image grid-banner-image">
            <img src={banner.image} />
          </div>

          <div className="banner-details">
            <h1 className="employee-name grid-employee-name">{banner.name}</h1>
            <div className="employee-post grid-employee-post">
              <span>{banner.post}</span>
            </div>
            <h6 className="emoployee-tag grid-emoployee-tag">{banner.tag}</h6>
          </div>
        </div>

        <div className="text-center mb-3">
          <button
            className="hire-me grid-hire"
            onClick={() =>
              window.open(
                "https://calendly.com/esparktalents/60min?month=2023-09",
                "_blank"
              )
            }
          >
            Hire {banner.hireMe}
          </button>
          <Link href={`/cvs/${cvId}`}>
            <button className="cv-view-more">view more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
