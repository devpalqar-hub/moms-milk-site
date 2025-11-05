"use client"
import React, { useEffect, useRef, useState } from "react";

export default function DonationCounter({ target = 1000, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || hasAnimated.current) return;
      const rect = ref.current.getBoundingClientRect();

      // Trigger when element enters viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        hasAnimated.current = true;

        let start = 0;
        const increment = Math.ceil(target / (duration / 30));

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          setCount(start);
        }, 30);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check immediately in case element already in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, [target, duration]);

  return <span ref={ref}>{count}+</span>;
}

