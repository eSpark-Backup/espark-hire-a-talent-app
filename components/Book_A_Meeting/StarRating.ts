import React from 'react';

const StarRating = ({ stars }) => {
  const renderStar = (rating, index) => {
    // Calculate the class for each star based on the rating
    let starClass = 'outlined-star';

    if (rating <= stars) {
      starClass = 'filled-star';
    } else if (stars % 1 !== 0 && rating === Math.ceil(stars)) {
      starClass = 'half-star';
    }

    return (
      <li key={index} className="star-list">
        <img
          src={`/images/book-a-meeting/${starClass}.png`}
          alt={`rating_img_${rating}`}
        />
      </li>
    );
  };

  const ratings = [1, 2, 3, 4, 5];

  return <ul className="feedback-rating-ul">{ratings.map(renderStar)}</ul>;
};

export default StarRating;
