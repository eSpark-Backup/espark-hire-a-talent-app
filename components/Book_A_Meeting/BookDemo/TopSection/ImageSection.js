import React from "react";

const ImageSection = () => {
  return (
    <div className="image-section">
      <div className="demo-image">
        <img alt="" src="/images/book-a-meeting/image-1.png" />
      </div>

      <div className="image-subparts">
        <div className="top-floated">
          <h4 className="top-floated-heading">Solutions</h4>

          <div className="top-floated-lists-div">
            <ul className="top-floated-lists">
              <li className="top-floated-list-item">
                <div className="left-icon">
                  <img alt="" src="/images/book-a-meeting/icons/hours.png" />
                </div>

                <h6>Hourly Based</h6>
              </li>

              <li className="top-floated-list-item">
                <div className="left-icon">
                  <img alt="" src="/images/book-a-meeting/icons/salary.png" />
                </div>

                <h6>Salary Based</h6>
              </li>

              <li className="top-floated-list-item">
                <div className="left-icon">
                  <img alt="" src="/images/book-a-meeting/icons/project.png" />
                </div>

                <h6>Project Based</h6>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-floated">
          <h4 className="bottom-floated-heading">Teams</h4>

          <div className="bottom-floated-lists-div">
            <ul className="bottom-floated-lists">
              <li className="bottom-floated-list-item">
                <div className="left-member">
                  <img alt="" src="/images/book-a-meeting/teams/member-1.png" />
                </div>

                <h6>Digital Marketer</h6>
              </li>

              <li className="bottom-floated-list-item">
                <div className="left-member">
                  <img alt="" src="/images/book-a-meeting/teams/member-2.png" />
                </div>

                <h6>React Native Developer</h6>
              </li>

              <li className="bottom-floated-list-item">
                <div className="left-member">
                  <img alt="" src="/images/book-a-meeting/teams/member-3.png" />
                </div>

                <h6>Node js Developer</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
