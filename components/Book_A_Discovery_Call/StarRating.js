import React from 'react';

const StarRating = ({ stars }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <ul className="feedback-rating-ul">
      {ratings.map((rating, index) => (
        <li key={index}>
          <img
            src={
              rating <= stars
                ? '/images/discovery_call/star.png'
                : '/images/discovery_call/star_d.png'
            }
            alt="rating_img"
          />
        </li>
      ))}
    </ul>
  );
};

export default StarRating;
