// ScrollText.jsx
import React, { useState, useEffect } from 'react';
import './ScrollText.css';
import useMedia from '../useMedia';

const ScrollText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [scrollStarted, setScrollStarted] = useState(false);
  const isMobile = useMedia('(max-width: 768px)'); // モバイル端末かどうかの状態

  useEffect(() => {
    if (!text || scrollStarted) return;

    const handleScroll = () => {
      const element = document.getElementById('scroll-text-parent');
      const scrollPosition = window.scrollY;
      const elementOffset = element.offsetTop;

      if (scrollPosition > elementOffset - window.innerHeight / 2) {
        setScrollStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [text, scrollStarted]);

  useEffect(() => {
    if (!scrollStarted) return;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, text, scrollStarted]);

  return (
    <div id="scroll-text-parent" className="scroll-text-parent">
      <div className={`scroll-text ${scrollStarted ? 'scroll-started' : ''} ${isMobile ? 'mobile' : ''}`}>
        {displayedText}
      </div>
    </div>
  );
};

export default ScrollText;
