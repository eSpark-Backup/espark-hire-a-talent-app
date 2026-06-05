import React from 'react';
import Image from 'next/image';

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
                      <Image
                        width={74}
                        height={74}
                        src={eachItem.icon}
                        alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent"
                      />
                    </div>
                    <h3>{eachItem.title}</h3>
                    <p>{eachItem.paragraph}</p>

                    <div className="arrow-image">
                      <Image
                        src={eachItem.arrowPath}
                        width={152}
                        height={136}
                        alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-lg-3 col-md-3 col-sm-6" key={i}>
                  <div className="platforms-item with-white-color">
                    <div className="image">
                      <Image
                        width={90}
                        height={90}
                        src={eachItem.icon}
                        alt="Hire app developer - Freelance mobile app developer - Hire dedicated mobile app developers - Hire cross platform app developer - Hire a mobile app developer – eSpark Talent"
                      />
                    </div>
                    <h3>{eachItem.title}</h3>
                    <p>{eachItem.paragraph}</p>
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

export default Platforms;
