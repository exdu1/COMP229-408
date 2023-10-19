import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars] = useState(3);

  return (
    <>
      {Array.from({ length: totalStars }).map((_, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);
