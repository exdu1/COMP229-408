/*import React from "react";
import {  FaStar }  from "react-icons/fa"; 
export default function StarRating()  {
return [
<FaStar color="red" />, 
<FaStar color="red" />, 
<FaStar color="red" />, 
<FaStar color="grey" />, 
<FaStar color="grey" />
]; 
}
//const Star = ({  selected = false })  => (
//<FaStar color={selected ? "red" : "grey"}  />
//);
const Star = ({  selected = false,  onSelect = f => f })  => (
<FaStar color={selected ? "red" : "grey"}  onClick={onSelect}  /> 
);
const createArray = length => [...Array(length)];
export default function StarRating({  totalStars = 5 })  { 
return createArray(totalStars).map((n,  i)  => <Star key={i}  />);
}

//const createArray = length => [...Array(length)];
//export default function StarRating({  totalStars = 5 })  { 
//return createArray(totalStars).map((n,  i)  => <Star key={i}  />);
//}

export default function StarRating({  totalStars = 5 })  { 
const [selectedStars]  = useState(3);
return (
<>
{createArray(totalStars).map((n,  i)  => (
<Star key={i}  selected={selectedStars > i}  /> 
))}
<p>
{selectedStars}  of {totalStars}  stars 
</p>
</> 
);
}
export default function StarRating({  totalStars = 5 })  { 
const [selectedStars,  setSelectedStars]  = useState(0); 
return (
<>
{createArray(totalStars).map((n,  i)  => (
<Star 
key={i}
selected={selectedStars > i}
onSelect={()  => setSelectedStars(i + 1)} 
/>
))} 
<p>
{selectedStars}  of {totalStars}  stars 
</p>
</> 
);
}*/

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating()  {
return [
<FaStar color="red" />, 
<FaStar color="red" />, 
<FaStar color="red" />, 
<FaStar color="grey" />, 
<FaStar color="grey" />
]; 
};

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

const Star = ({ selected = false, onSelect = () => {} }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

