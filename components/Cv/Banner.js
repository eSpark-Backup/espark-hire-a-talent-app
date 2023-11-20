import React from "react";

const Banner = (props) => {
  const { banner } = props;

  return (
    <div className="cv-banner">
      <div className="cv-banner-area">
        <div className="banner-image">
          <img src={banner.image} />
        </div>

        <div>
          <h1 className="employee-name">{banner.name}</h1>
          <div className="employee-post">
            <span>{banner.post}</span>
          </div>
          <h6 className="emoployee-tag">{banner.tag}</h6>

          <button className="hire-me">Hire Kashif Hussain</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
