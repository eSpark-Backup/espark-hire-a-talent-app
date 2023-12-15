import React from 'react';
import Image from 'next/image';

const OurPlatforms = (props) => {
  const { data, platFormItemsTitle, platFormItemsContent } = props;

  return (
    <>
      <div className="platforms-area ptb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2 style={{ fontWeight: 700 }}>{platFormItemsTitle}</h2>
          </div>
          <div className="row justify-content-between">
            {data?.map((eachItem, i) =>
              i !== 3 ? (
                <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                  <div className="platforms-item with-white-color">
                    <div className="image">
                      <Image
                        src={eachItem.imageLink}
                        alt={eachItem.altTag}
                        width={74}
                        height={74}
                      />
                    </div>
                    <h3>{eachItem.title}</h3>
                    <p>{eachItem.content}</p>

                    <div className="arrow-image">
                      <Image
                        src={eachItem.arrowLink}
                        alt={eachItem.altTag}
                        width={152}
                        height={136}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                  <div className="platforms-item with-white-color">
                    <div className="image">
                      <Image
                        src={eachItem.imageLink}
                        alt={eachItem.altTag}
                        width={90}
                        height={90}
                      />
                    </div>
                    <h3>{eachItem.title}</h3>
                    <p>{eachItem.content}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPlatforms;
