"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Screenshot.module.css";

const images = [
  "/ss2.png",
  "/ss1.png",
  "/ss3.png",
  "/ss4.png",
];

export default function Screenshot() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  // AUTO SWIPE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // DRAG START
  const handleStart = (x) => {
    startX.current = x;
    currentX.current = x;
    isDragging.current = true;
  };

  // DRAG MOVE
  const handleMove = (x) => {
    if (!isDragging.current) return;
    currentX.current = x;
  };

  // DRAG END
  const handleEnd = () => {
    if (!isDragging.current) return;

    const diff = currentX.current - startX.current;

    if (diff > 60) {
      // swipe right
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (diff < -60) {
      // swipe left
      setIndex((prev) => (prev + 1) % images.length);
    }

    isDragging.current = false;
  };

  return (
    <section className={styles.section}>
      <div
        className={styles.viewport}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className={styles.slide} key={i}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
