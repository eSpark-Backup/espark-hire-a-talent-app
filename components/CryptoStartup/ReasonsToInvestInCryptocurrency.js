import React from 'react';

const ReasonsToInvestInCryptocurrency = ({ title, data, image }) => {
  return (
    <>
      <div className="invest-area ptb-100 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="invest-content">
                <h2>{title}</h2>
                {data?.map((items, i) => (
                  <div className="invest-inner-box" key={i}>
                    <div className="image">
                      <img
                        src={items.icon}
                        alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent"
                      />
                    </div>
                    <h3>{items.title}</h3>
                    <p>{items.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center">
              <div className="invest-image">
                <img
                  src={image}
                  alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent"
                  width={'600px'}
                  height={'600px'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReasonsToInvestInCryptocurrency;
