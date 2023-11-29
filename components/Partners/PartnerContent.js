import React from 'react';

const PartnerContent = ({ title, description, listItem }) => {
  return (
    <div>
      <div className="partner-content">
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
