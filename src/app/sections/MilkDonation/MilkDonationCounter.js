"use client";

import { useEffect, useRef, useState } from "react";

export default function MilkDonationCounter({
  target = 1000,
  duration = 2000,
  start = false,
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!start || hasAnimated.current) return;

    hasAnimated.current = true;

    let current = 0;
    const increment = Math.ceil(target / (duration / 30));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [start, target, duration]);

  return <span>{count}+</span>;
}
