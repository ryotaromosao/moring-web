import React, { useState, useEffect, useRef } from 'react';
import './ScrollText.css';

const ScrollText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!text || hasAnimated) return; // textがundefinedまたはすでにアニメーションが実行された場合は処理を中断

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1)); 
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setHasAnimated(true); 
      }
    }, 100); // 表示秒数変更

    return () => clearInterval(interval);
  }, [index, text, hasAnimated]);

  useEffect(() => {
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          setIndex(0);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    observer.observe(scrollRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={scrollRef} className="scroll-text">{displayedText}</div>;
};

export default ScrollText;
