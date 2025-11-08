import React, { useEffect, useState, useRef } from "react";
import "./Loading.css";

const Loading = ({ duration = 800, onFinish }) => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      const progress = Math.min(elapsed / duration, 1);
      setPercent(Math.floor(progress * 100));

      if (elapsed < duration) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setPercent(100);
        setTimeout(() => {
          setIsVisible(false);
          if (onFinish) onFinish();
        }, 300); // kasih waktu fade out
      }
    };

    setPercent(0);
    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [duration, onFinish]);

  if (!isVisible) return null;

  return (
    <div className="loading-container fade-out">
      <p className="teks-loading">ATLANTIS ENTREPRENEUR SCHOOL</p>
      <div className="loading-percent">{percent}%</div>
    </div>
  );
};

export default Loading;
