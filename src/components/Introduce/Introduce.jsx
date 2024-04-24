import React from 'react';
import './Introduce.css'; 

const Introduce = ({ name, description, imageUrl }) => {
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

export default Introduce;
