import Link from "next/link";
import React from "react";
const CareerCards = ({ data }) => {
  return (
    <div>
      {data?.map((eachCard, index) => (
        <div className="row career-card" key={index}>
          <div className="col-lg-3 col-sm-12 career-card-title">
            <h2>{eachCard?.heading}</h2>
            <p>
              {eachCard.location[0]}
              <br />
              {eachCard.date}
            </p>
          </div>
          <hr className="horizonal-line" />
          <div className="col-lg-6 col-sm-12 career-card-description">
            <h2>Description</h2>
            <p>{eachCard?.description}</p>
          </div>
          <div className="col-lg-3 col-sm-12 career-card-button">
            <Link href={eachCard?.link}>
              <a className="default-btn style-two" target="_blank">
                <span className="ri-arrow-right-s-line"></span>
                Apply Now
              </a>
            </Link>
          </div>
        </div>
      ))}
      {/* <div className="row justify-content-around align-items-center career-card">
        <div className="col-lg-3 career-card-title">
          <h2>Assistant Human Resources Officer</h2>
          <p>
            Karachi
            <br />
            2023/09/26
          </p>
        </div>
        <div className="col-lg-6 career-card-description">
          <h2>Description</h2>
          <p>
            eSpark Consulting Group is currently looking for an experienced
            Assistant HR Officer with outstanding administrative and
            communication skills. As an Assistant HR Officer, you’ll work with
            the HR team to ensure the organization runs as smoothly as possible.
            You’ll assist with uplifting and developing employees to reach their
            full potential while also bringing new people on board. Overseeing
            daily operations of HR, documentation, and record keeping.
          </p>
        </div>
        <div className="career-card-button">
          <Link href="https://calendly.com/esparktalents/60min?month=2023-09">
            <a className="default-btn style-two" target="_blank">
              <span className="ri-arrow-right-s-line"></span>
              Apply Now
            </a>
          </Link>
        </div>
      </div> */}
    </div>
  );
};
export default CareerCards;
