import React from 'react';

const ClientFeedback = () => {
  return (
    <div className="container pb-100">
      <div className="feedback-title">
        <h1 className="text-center my-5">Client Feed back</h1>
      </div>
      <div className="client-feedback-card shadow bg-body">
        <div className="row justify-content-center align-items-center ">
          <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3">
            <div className="feedback-img">
              <img
                src="/images/discovery_call/feedback_1.png"
                alt="img"
                width={'100%'}
                height={'100vh'}
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-4 col-md-3 col-sm-3">
            <div className="feedback-content p-5">
              <div className="feedback-rating">"rating"</div>
              <h3>Mario Maher</h3>
              <h4>FRÖNB.</h4>
              <p>
                Thrilled to share our positive experience with eSpark Talent,
                our chosen talent outsourcing partner for the FRÖNB project.
                Opting to engage a dedicated team from eSpark Talent proved
                instrumental in the project's success. They not only brought a
                wealth of knowledge to the table but also consistently delivered
                our project on time, showcasing their reliability and
                commitment. The team's proactive approach, especially in calling
                for meetings to clarify any unclear scopes or requests,
                demonstrated their dedication to client satisfaction. Working
                with eSpark Talent was a pleasure, and I wholeheartedly
                recommend their services to others seeking a reliable and
                knowledgeable outsourcing partner. A big thank you to eSpark
                Talent for their invaluable support throughout the FRÖNB
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
