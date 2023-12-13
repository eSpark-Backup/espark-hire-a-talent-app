import Link from 'next/link';
import React from 'react';

const PartnersModal = ({ title, link, buttonText, showModal }) => {
  React.useEffect(() => {
    let elementId = document.getElementById('navbar');
    if (showModal) {
      document.body.style.overflowY = 'hidden';
      elementId.style.display = 'none';
    } else {
      document.body.style.overflowY = 'scroll';
      elementId.style.display = 'block';
    }
  }, [showModal]);

  const MyModal = () => {
    return (
      <>
        <div className="partner-modal-wrapper"></div>
        <div
          className="partner-modal-container"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <div className="partner-modal-content">
            <div className="partner-modal-logo">
              <div className="partner-modal-logo-box">
                <img
                  src="/images/partners/partners-logo.svg"
                  alt="logo"
                  width={'100%'}
                  height={'100%'}
                />
              </div>
            </div>
            <h2>{title}</h2>
            {/* <Link href={link}>{buttonText}</Link> */}
          </div>
        </div>
      </>
    );
  };
  return <div>{showModal && <MyModal />}</div>;
};

export default PartnersModal;
