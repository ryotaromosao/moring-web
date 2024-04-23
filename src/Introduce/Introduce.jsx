import React from 'react';
import './Introduce.css'; 
const Introduce = ({ name, description, imageUrl }) => {
  return (
    <div className="introduceRev">
      <div className="introduceRev__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="introduceRev__description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Introduce;
