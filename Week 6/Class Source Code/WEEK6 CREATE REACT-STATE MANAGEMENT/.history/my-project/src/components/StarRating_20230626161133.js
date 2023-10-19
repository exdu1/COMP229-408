import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ 
totalStars = 5,
selectedStars = 0, 
onRate = f => f})  { 
return (
<>
{createArray(totalStars).map((n,  i)  => (
<Star 
key={i}
selected={selectedStars > i} 
onSelect={() => onRate(i + 1)}
/>
))}
...
</> 
);
}