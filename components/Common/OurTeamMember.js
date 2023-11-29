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
                        <img src={person.img} alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent" />
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
                          {/* <div className="d-flex align-items-center justify-content-between flex-column">
                            <h3>{person.name}</h3>
                            <span>{person.rank}</span>
                          </div> */}
                          <div>
                            <h3 >{person.name}</h3>
                            <span>{person.rank}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <img src="/images/team/team13.jpg" alt="team" />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Sarah Taylor</h3>
                          <span>Art Director</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <img src="/images/team/team14.jpg" alt="team" />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Ellyse Perry</h3>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <img src="/images/team/team15.jpg" alt="team" />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Steven Smith</h3>
                          <span>Development</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="team-section-title">
                {/* <span className="sub-title">{teamData?.subTitle}</span> */}
                <h2 className="fw-semibold">{teamData?.title}</h2>
                <ul>
                  {items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {/* <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p> */}
                <Link legacyBehavior href="https://calendly.com/esparktalents/60min?month=2023-09">
                  <a className="default-btn style-two-v2" target="_blank">
                    {/* <span className="ri-arrow-right-s-line"></span> */}
                    {teamData?.buttonText}
                  </a>
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
