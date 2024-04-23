import React, { useState, useEffect } from 'react';
import './TopPage.css'; // 必要に応じてスタイルシートをインポート

function TopPage() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-page">
      <img src={`${currentImage}.JPG`} alt="Large Photo" className="large-photo" />
      <div className="text-overlay">
        <p>&nbsp;MEANINGFUL&nbsp;MORNING &nbsp;CHANGES &nbsp;YOUR&nbsp;LIFE.</p>
      </div>
    </div>
  );

}

export default TopPage;
