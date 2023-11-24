import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStar = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <FaStar key={index} className="text-yellow-500" />
  ));

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  const remainingStars = Array.from(
    { length: 5 - stars.length },
    (_, index) => <FaStar key={`empty-${index}`} className="text-gray-300" />
  );

  return (
    <div className="flex items-center">
      {stars}
      {remainingStars}
    </div>
  );
};

export default RatingStar;


