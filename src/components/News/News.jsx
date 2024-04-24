import React from 'react';
import './News.css'; 

const News = ({ name, description, imageUrl }) => {
  return (
    <div className="news">
      <div className="news__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="news__description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default News;
