import React from "react";
import {  FaTrash }  from "react-icons/fa";
import StarRating from "./StarRating"; // Import the StarRating component

export default function Color({ title, color, rating }) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating totalStars={5} selectedStars={rating} /> {/* Pass the required props to the StarRating component */}
    </section>
  );
}
