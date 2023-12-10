import React from 'react';
import Image from 'next/image';

const StarRating = ({ stars }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <ul className="feedback-rating-ul">
      {ratings.map((rating, index) => (
        <li key={index}>
          <Image
            src={
              rating <= stars
                ? '/images/discovery_call/bright-star.svg'
                : '/images/discovery_call/dark-star.svg'
            }
            alt="rating_img"
          />
        </li>
      ))}
    </ul>
  );
};

export default StarRating;
