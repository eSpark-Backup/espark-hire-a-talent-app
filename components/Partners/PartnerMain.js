import React from 'react';
import PartnerContent from './PartnerContent';
import PartnerForm from './PartnerForm';

const PartnerMain = ({ PartnersContentData, PartnersFormData }) => {
  return (
    <div className="partner-main">
      <div className="container-lg">
        <div className="row justify-content-around">
          <div className="col-sm-11 col-md-11 col-lg-7">
            <div className="partner-main-content">
              {PartnersContentData?.map((item, index) => (
                <PartnerContent
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  listItem={item?.listItem}
                />
              ))}
            </div>
          </div>
          <div className="col-sm-11 col-md-11 col-lg-5">
            <div className="partner-main-form">
              <div>
                <PartnerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerMain;
