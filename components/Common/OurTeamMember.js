import React from "react";
import Link from "next/link";

const OurTeamMember = (props) => {
  const { data, items, teamData } = props;

  return (
    <>
      <div className="team-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="team-member-list">
                <div className="row justify-content-center">
                  {data?.map((person, i) => (
                    <div
                      key={i}
                      className="col-lg-6 col-md-6 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <div
                        className={
                          i > 2
                            ? "single-team-member with-space"
                            : "single-team-member"
                        }
                      >
                        <img
                          src={person.img}
                          alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
                        />
                        <div
                          className={
                            i === 0
                              ? "content1"
                              : i === 1
                              ? "content2"
                              : i === 2
                              ? "content3"
                              : "content4"
                          }
                        >
                          <div>
                            <h3>{person.name}</h3>
                            <span>{person.rank}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="team-section-title">
                <h2 className="fw-semibold">{teamData?.title}</h2>
                <ul>
                  {items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link
                  href="https://calendly.com/esparktalents/60min?month=2023-09"
                  className="default-btn style-two-v2"
                  target="_blank"
                >
                  {teamData?.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamMember;
