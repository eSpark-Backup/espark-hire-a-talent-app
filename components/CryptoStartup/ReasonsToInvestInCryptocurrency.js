import React from "react";

const ReasonsToInvestInCryptocurrency = ({ title, data, image }) => {
  return (
    <>
      <div className="invest-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="invest-content">
                <h2>{title}</h2>
                {data?.map((items, i) => (
                  <div className="invest-inner-box" key={i}>
                    <div className="image">
                      <img src={items.icon} alt="image" />
                    </div>
                    <h3>{items.title}</h3>
                    <p>{items.description}</p>
                  </div>
                ))}

                {/* <div className="invest-inner-box">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/invest/image-1.png"
                      alt="image"
                    />
                  </div>
                  <h3>Control Over Your Assets</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
               
                <div className="invest-inner-box with-some-left">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/invest/image-2.png"
                      alt="image"
                    />
                  </div>
                  <h3>Transparent And Secure</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
               
                <div className="invest-inner-box">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/invest/image-3.png"
                      alt="image"
                    />
                  </div>
                  <h3>Good Choice For Long Term Investment</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center">
              <div className="invest-image">
                <img
                  src={image}
                  alt="image"
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
