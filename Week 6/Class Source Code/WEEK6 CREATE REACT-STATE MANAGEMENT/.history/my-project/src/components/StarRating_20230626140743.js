import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate }) {
  const createArray = (length) => {
    return Array.from({ length }, (_, index) => index);
  };

  return (
    <>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

const Star = ({ selected = false, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
