import React from "react";
import { assets } from "../../../assets/assets";

export const StarRating = ({ value = 0, max = 5, size = 16 }) => {
  return (
    <div className="flex flex-row-reverse items-center gap-[2px]">
      {[...Array(max)].map((_, idx) => {
        const i = idx + 1; 
        const isFull = i <= value; 
        return (
          <img
            key={i}
            src={isFull ? assets.full_star : assets.empty_star}
            alt={isFull ? "full star" : "empty star"}
            className="object-contain"
            style={{ width: size, height: size }}
          />
        );
      })}
    </div>
  );
};
