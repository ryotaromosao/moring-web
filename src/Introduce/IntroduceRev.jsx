import React from 'react';
import "./introduceRev.css"

const IntroduceRev = ({ name, description, imageUrl }) => {
  return (
    <div className="introduce">
      <div className="introduce__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="introduce__description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IntroduceRev;
