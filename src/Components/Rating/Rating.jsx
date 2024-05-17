import { memo, useEffect, useState } from "react";
import ReactRating from "react-rating";
import rating from "./../../assets/images/rating.png";
const Rating = ({
    isStatic=true,
    initialRating=1,
    fractions=1
}) => {
  
  return (
    
    <ReactRating
      readonly={isStatic}
      emptySymbol={<img style={{width:"20px",  filter: 'sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(75%)'}} src={rating} className="icon" />}
      fullSymbol={ <img style={{width:"20px"}} src={rating} className="icon" />}
      quiet={isStatic}
      fractions={fractions}
      initialRating={initialRating}
    />
  );
};

export default memo(Rating);