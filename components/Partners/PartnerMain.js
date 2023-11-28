import React from 'react';
import PartnerContent from './PartnerContent';

const PartnerMain = () => {
  return (
    <div className="partner-main">
      <div className="container-lg">
        <div className="row justify-content-around">
          <div className="col-sm-11 col-md-11 col-lg-7">
            <div className="partner-main-content">
              <PartnerContent />
              <PartnerContent />
              <PartnerContent />
            </div>
          </div>
          <div className="col-sm-11 col-md-6 col-lg-5">
            <div className="partner-main-form">
              <div
                style={{
                  height: '617px',
                  backgroundColor: '#029894 ',
                }}
              >
                <h1>Form</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerMain;
