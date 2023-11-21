import React from "react";

import { useRouter } from "next/router";

import { cvData } from "constants/cvsConstants";

export default function CV() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/cvs/${id}`);
  };

  return (
    <div className="container cv-main-area">
      <div className="row">
        {cvData.map((cv, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col">
            <GridView
              banner={cv.banner}
              key={index}
              handleClick={handleClick}
              cvId={cv.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const GridView = (props) => {
  const { index, banner, handleClick, cvId } = props;

  return (
    <div key={index} className="cv-banner cv-grid">
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

          <button className="hire-me grid-hire">Hire {banner.hireMe}</button>
          <button className="cv-view-more" onClick={() => handleClick(cvId)}>
            view more
          </button>
        </div>
      </div>
    </div>
  );
};
