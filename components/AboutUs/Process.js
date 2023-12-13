import React from 'react';

const Process = ({ title, processData }) => {
  return (
    <>
      <div className="process-area ptb-100">
        <div className="container-xl">
          <div className="process-inner">
            <h2 className="text-center mb-5 fw-semibold">{title}</h2>
            <div className="row justify-content-center">
              {processData?.map((processItems, i) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={processItems.delay}
                  data-aos-duration="1200"
                  data-aos-once="true"
                  key={i}
                >
                  <div className="single-process-box justify-content-center">
                    <div className="icon">
                      <img
                        src={processItems.image}
                        alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
                      />
                    </div>
                    <h3>{processItems.heading}</h3>
                    <p>{processItems.paragraph}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
