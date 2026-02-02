import React from 'react';

const ImageSection = ({ benefits, countries }) => {
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
              {benefits?.map((benefit) => (
                <li className="top-floated-list-item" key={benefit.id}>
                  <div className="left-icon">
                    <img alt="" src={benefit.icon} />
                  </div>

                  <h6>{benefit.type}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom-floated left-0 add-shadow">
          <h4 className="bottom-floated-heading">Country we work with</h4>

          <div className="bottom-floated-lists-div">
            <ul className="bottom-floated-lists">
              {countries?.map((country) => (
                <li className="bottom-floated-list-item" key={country.id}>
                  <div className="left-member">
                    <img alt="" src={country.flag} />
                  </div>

                  <h6>{country.country}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
