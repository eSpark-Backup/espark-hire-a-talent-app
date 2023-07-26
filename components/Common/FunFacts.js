import React from 'react'

const FunFacts = () => {
  return (
    <>
      <div className="funfacts-area pt-100 pb-70">
        <div className="container">
          <h1>&nbsp;&nbsp;We Have Completed 100+ Projects Successfully​</h1>
          <br/> 
          <br/>
          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-md-6 col-sm-4 col-6" 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-funfacts-box">
                <div className="icon">
                  <i className="ri-stack-fill"></i>
                </div>
                <h3>1,000+​</h3>
                <p>Projects Completed​</p>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6 col-sm-4 col-6" 
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-funfacts-box">
                <div className="icon bg-4D69FF">
                  <i className="ri-user-smile-fill"></i>
                </div>
                <h3>100+​</h3>
                <p>Team Members​</p>
              </div>
            </div>
            
            <div 
              className="col-lg-3 col-md-6 col-sm-4 col-6" 
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-funfacts-box">
                <div className="icon bg-FFC23B">
                  <i className="ri-medal-fill"></i>
                </div>
                <h3>500+​</h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6 col-sm-4 col-6" 
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-funfacts-box">
                <div className="icon bg-00A4C8">
                  <i className="ri-group-fill"></i>
                </div>
                <h3>100%</h3>
                <p>Customer Satisfaction​</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFacts
