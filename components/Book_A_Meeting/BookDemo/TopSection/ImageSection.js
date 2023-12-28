import React from 'react';

const ImageSection = ({ solutions, teams }) => {
  return (
    <div className="image-section">
      <div className="demo-image">
        <img alt="" src="/images/book-a-meeting/image-1.png" />
      </div>

      <div className="image-subparts">
        <div className="top-floated">
          <h4 className="top-floated-heading">Solutions</h4>

          <div className="top-floated-lists-div">
            <ul className="top-floated-lists">
              {solutions?.map((solution) => (
                <li className="top-floated-list-item" key={solution.id}>
                  <div className="left-icon">
                    <img alt="" src={solution.icon} />
                  </div>

                  <h6>{solution.type}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom-floated">
          <h4 className="bottom-floated-heading">Teams</h4>

          <div className="bottom-floated-lists-div">
            <ul className="bottom-floated-lists">
              {teams?.map((team) => (
                <li className="bottom-floated-list-item" key={team.id}>
                  <div className="left-member">
                    <img alt="" src={team.member} />
                  </div>

                  <h6>{team.post}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
