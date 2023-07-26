import React from "react";

const OurPlatforms = (props) => {
  const { data, platFormItemsTitle, platFormItemsContent } = props;

  return (
    <>
      <div className="platforms-area pb-70">
        <div className="container-fluid">
          <div className="section-title with-max-width">
            <h2>{platFormItemsTitle}</h2>
            {/* <p>{platFormItemsContent}</p> */}
          </div>
          <div className="row justify-content-center">
            {data.map((eachItem, i) =>
              i !== 3 ? (
                <div className="col-lg-2 col-sm-6" key={i}>
                  <div className="platforms-item with-white-color">
                    <div className="image">
                      <img src={eachItem.imageLink} alt="image" />
                    </div>
                    <h3>{eachItem.title}</h3>
                    <p>{eachItem.content}</p>

                    <div className="arrow-image">
                      <img
                        src={eachItem.arrowLink}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              ) :  (
                <div className="col-lg-2 col-sm-6" key={i}>
                  <div className="platforms-item with-white-color">
                    <div className="image">
                      <img src={eachItem.imageLink} alt="image" />
                    </div>
                    <h3>{eachItem.title}</h3>
                    <p>{eachItem.content}</p>

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
            
            <div className="col-lg-4 col-sm-6">
              <div className="platforms-item with-white-color">
                <div className="image">
                  <img
                    src="/images/crypto-startup/platforms/platforms-1.png"
                    alt="image"
                  />
                </div>
                <h3>Interview</h3>
                <p>
                  After being shortlisted by our management, you will be called
                  for an interview.​
                </p>

                <div className="arrow-image">
                  <img
                    src="/images/crypto-startup/platforms/arrow-3.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="platforms-item with-white-color">
                <div className="image">
                  <img
                    src="/images/crypto-startup/platforms/platforms-2.png"
                    alt="image"
                  />
                </div>
                <h3>On-Boarding</h3>
                <p>
                  Our world-class onboarding procedure includes meeting your
                  very own customer support specialist.
                </p>

                <div className="arrow-image">
                  <img
                    src="/images/crypto-startup/platforms/arrow-4.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="platforms-item with-white-color">
                <div className="image">
                  <img
                    src="/images/crypto-startup/platforms/platforms-3.png"
                    alt="image"
                  />
                </div>
                <h3>​ Step Back & Grow</h3>
                <p>
                  Your future begins to meet the expectations you've set for
                  yourself.​
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurPlatforms;
