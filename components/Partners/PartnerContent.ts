import React from 'react';

const PartnerContent = ({ title, description, listItem }) => {
  return (
    <div>
      <div
        className="partner-content"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <h1>{title}</h1>
        <p>{description}</p>
        {listItem && (
          <ul>
            {listItem?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PartnerContent;
