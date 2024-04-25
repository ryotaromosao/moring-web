import React, { useState, useEffect } from 'react';
import './TopPage.css';
function TopPage() {
  const [currentImage, setCurrentImage] = useState(1);
  const [animationClass, setAnimationClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('fade-out');

      setTimeout(() => {
        setCurrentImage(currentImage => (currentImage % 4) + 1);
        setAnimationClass('fade-in');
      }, 1000);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-page">
      <img
        src={`${currentImage}.JPG`}
        alt="Large Photo"
        className={`large-photo ${animationClass}`}
        onLoad={() => setAnimationClass('fade-in')}
      />
      <div className="text-overlay">
        <p>&nbsp;MEANINGFUL&nbsp;MORING CHANGES &nbsp; YOUR LIFE.</p>
      </div>
    </div>
  );
}

export default TopPage;
