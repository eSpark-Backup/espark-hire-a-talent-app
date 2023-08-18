import React from 'react'

const NewsletterForm2 = () => {
  return (
    <>
      <div className="subscribe2-area pt-100">
        {/* <div className="call-Card-Round-Image"></div> */}
        <div className="container-fluid px-0">
          <div className='cta-images'>
            <img className='cta-image1' src="images/cta/ctaImage1.png" alt="" />
            <img className='cta-image2' src="images/cta/ctaImage2.png" alt="" />
            <img className='cta-image3' src="images/cta/ctaImage3.png" alt="" />
          </div>
          <div className="subscribe2-inner">
            {/* <span className="sub-title">READY TO GET STARTED</span> */}
            <h2>Boosts Your Company Faster <br /> with Amazing eSpark Talent</h2>
            <p>
              Accelerate your projects and reach your goals quickly with highly experienced <br /> tech experts with in-depth knowledge of the industry.
            </p>
            <div className="newsletter-form">
              <a to="#">
                <button type="submit">
                  Schedule a Meeting
                </button>
              </a>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default NewsletterForm2
