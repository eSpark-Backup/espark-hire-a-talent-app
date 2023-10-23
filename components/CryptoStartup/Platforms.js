import React from "react";

const Platforms = ({ heading, paragraph, data }) => {
  return (
    <>
      <div className="platforms-area pb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
          </div>

          <div className="row justify-content-center">
            {data?.map((eachItem, i) =>
              i !== 3 ? (
                <div className="col-lg-3 col-md-3 col-sm-6" key={i}>
                  <div className="platforms-item with-white-color">
                    <div className="image">
                      <img src={eachItem.icon} alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent" />
                    </div>
                    <h3>{eachItem.title}</h3>
                    <p>{eachItem.paragraph}</p>

                    <div className="arrow-image">
                      <img src={eachItem.arrowPath} alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-lg-3 col-md-3 col-sm-6" key={i}>
                  <div className="platforms-item with-white-color">
                    <div className="image">
                      <img src={eachItem.icon} alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent" />
                    </div>
                    <h3>{eachItem.title}</h3>
                    <p>{eachItem.paragraph}</p>

                    {/* <div className="arrow-image">
                      <img
                        src="/images/crypto-startup/platforms/arrow-3.png"
                        alt="image"
                      />
                    </div> */}
                  </div>
                </div>
              )
            )}
          </div>

          {/* <div className="row justify-content-center">
            {data?.map((items, i) =>
              i !== 3 ? (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div className="platforms-item">
                    <div className="image">
                      <img src={items?.icon} alt="image" />
                    </div>
                    <h3>{items?.title}</h3>
                    <p>{items?.paragraph}</p>

                    <div className="arrow-image">
                      <img src={items?.arrowPath} alt="image" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div className="platforms-item">
                    <div className="image">
                      <img src={items?.icon} alt="image" />
                    </div>
                    <h3>{items?.title}</h3>
                    <p>{items?.paragraph}</p>
                  </div>
                </div>
              )
            )}
          </div> */}

          {/* <div className="col-lg-4 col-sm-6">
              <div className="platforms-item">
                <div className="image">
                  <img
                    src="/images/crypto-startup/platforms/platforms-1.png"
                    alt="image"
                  />
                </div>
                <h3>NFT Marketplace</h3>

                <div className="arrow-image">
                  <img
                    src="/images/crypto-startup/platforms/arrow-1.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="platforms-item">
                <div className="image">
                  <img
                    src="/images/crypto-startup/platforms/platforms-2.png"
                    alt="image"
                  />
                </div>
                <h3>Exchange</h3>

                <div className="arrow-image">
                  <img
                    src="/images/crypto-startup/platforms/arrow-2.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="platforms-item">
                <div className="image">
                  <img
                    src="/images/crypto-startup/platforms/platforms-3.png"
                    alt="image"
                  />
                </div>
                <h3>Blockchain</h3>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Platforms;
