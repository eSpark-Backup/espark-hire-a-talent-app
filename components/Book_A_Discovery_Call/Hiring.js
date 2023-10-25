import React from "react";

const Hiring = ({data}) => {
  const { heading, description , items} = data
  console.log(heading ,"ad")
  return (
    <>
      <div className="Hiring-area pb-70">
        <div className="container">
          <div className="section-title style-two">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
                <h2>{heading}</h2>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {items?.map((eachCard , i) => (<div key={i} className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
              <div className="Hiring-box">
                <div className="row my-2 justify-content-center align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <div className="Hiring-number">
                      <h1>{i + 1}</h1>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <div className="Hiring-text">
                      <h1 className="ml-auto">
                      {eachCard.title}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="Hiring-description">
                  <p>
                    {eachCard.description}
                  </p>
                </div>
              </div>
            </div>))}
            

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Hiring;
