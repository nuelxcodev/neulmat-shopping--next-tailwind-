"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";

interface Prop {
  numofrate?: number; // Assuming numofrate is always a number
}

function Rating({ numofrate = 0 }: Prop): React.JSX.Element {
  // Array to hold stars JSX elements
  const stars = [];

  // Loop to create stars based on rating
  for (let i = 0; i < 5; i++) {
    if (i < numofrate) {
      stars.push(<FontAwesomeIcon icon={faStar} />);
    } else if (i === Math.ceil(numofrate || 0) && (numofrate || 0) % 1 !== 0) {
      stars.push(<FontAwesomeIcon icon={faStarHalf} />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStarHalf} />);
    }
  }

  return (
    <div>
      <div className=" text-green-700">{stars}</div>
    </div>
  );
}

export default Rating;
