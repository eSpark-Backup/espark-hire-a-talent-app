import React from "react";

const Banner = (props) => {
  const { banner, windowWidth } = props;

  return (
    <div className={`cv-banner ${windowWidth < 767 ? "potrait-view" : null}`}>
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

          <button
            className="hire-me"
            onClick={() =>
              window.open(
                "https://calendly.com/esparktalents/60min?month=2023-09",
                "_blank"
              )
            }
          >
            Hire {banner.hireMe}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
