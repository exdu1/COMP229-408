import React from "react";
import StarRating from "./StarRating"; // Import the StarRating component
import { FaTrash } from "react-icons/fa";

export default function Color({ id, title, color, rating, onRemove = () => {} }) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash color="red" />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating totalStars={5} selectedStars={rating} />
    </section>
  );
}
