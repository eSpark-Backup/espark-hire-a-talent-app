import React from "react";

const ImageSection = () => {
  return (
    <div className="image-section">
      <div className="bottom-image">
        <img alt="" src="/images/book-a-meeting/image-2.png" />
      </div>

      <div className="image-subparts">
        <div className="top-floated left-0">
          <h4 className="top-floated-heading">Benefits</h4>

          <div className="top-floated-lists-div">
            <ul className="top-floated-lists">
              <li className="top-floated-list-item">
                <div className="left-icon">
                  <img alt="" src="/images/book-a-meeting/icons/fuel.png" />
                </div>

                <h6>Fuel Card</h6>
              </li>

              <li className="top-floated-list-item">
                <div className="left-icon">
                  <img alt="" src="/images/book-a-meeting/icons/health.png" />
                </div>

                <h6>Health Insurance</h6>
              </li>

              <li className="top-floated-list-item">
                <div className="left-icon">
                  <img
                    alt=""
                    src="/images/book-a-meeting/icons/life-insurance.png"
                  />
                </div>

                <h6>Life Insurance</h6>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-floated left-0 add-shadow">
          <h4 className="bottom-floated-heading">Country we work with</h4>

          <div className="bottom-floated-lists-div">
            <ul className="bottom-floated-lists">
              <li className="bottom-floated-list-item">
                <div className="left-member">
                  <img alt="" src="/images/book-a-meeting/us.png" />
                </div>

                <h6>UAS</h6>
              </li>

              <li className="bottom-floated-list-item">
                <div className="left-member">
                  <img alt="" src="/images/book-a-meeting/germany.png" />
                </div>

                <h6>UK</h6>
              </li>

              <li className="bottom-floated-list-item">
                <div className="left-member">
                  <img alt="" src="/images/book-a-meeting/uae.png" />
                </div>

                <h6>UAE</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
