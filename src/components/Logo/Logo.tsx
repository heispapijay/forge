import React, { useState, useEffect } from "react";
import './logo.scss'

const Logo: React.FC = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const targetText = "✦ Forge";
  const [animationInterval, setAnimationInterval] = useState<number | null>(
    null
  );
  const [animationTimeout, setAnimationTimeout] = useState<number | null>(null);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    startAnimation();

    // Cleanup function to clear intervals and timeouts
    return () => {
      if (animationInterval) clearInterval(animationInterval);
      if (animationTimeout) clearTimeout(animationTimeout);
    };
  }, []);

  const startAnimation = () => {
    let iteration = 0;
    if (animationInterval) clearInterval(animationInterval);

    const interval = setInterval(() => {
      const newText = Array.from({ length: targetText.length }, (_, index) => {
        if (index < iteration) {
          return targetText[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      }).join("");

      setText(newText);

      if (iteration >= targetText.length) {
        clearInterval(interval);
        const timeout = setTimeout(() => {
          startAnimation();
        }, 3000);
        setAnimationTimeout(timeout);
      }

      iteration += 1;
    }, 100);

    setAnimationInterval(interval);
  };

  return <p className="logo">{text}</p>;
};

export default Logo;
