import React, { useState, useEffect } from 'react';
import './ScrollText.css';

const ScrollText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text) return; // textがundefinedの場合は処理を中断

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1)); 
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // 表示秒数変更

    return () => clearInterval(interval);
  }, [index, text]);

  useEffect(() => {
    const handleScroll = () => {
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-text">{displayedText}</div>;
};

export default ScrollText;