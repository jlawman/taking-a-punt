"use client";

import { motion } from "motion/react";

export function AnimatedWaterLines() {
  return (
    <div className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height: "200px" }}
      >
        {/* Water line 1 - slowest, bottom */}
        <motion.path
          d="M -100 140 Q 150 130 400 140 T 900 140 T 1400 140 L 1500 140"
          stroke="#D1D5DB"
          strokeWidth="2"
          opacity="0.4"
          animate={{
            x: [-10, 10, -10],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Water line 2 - medium speed, middle */}
        <motion.path
          d="M -100 100 Q 200 95 450 100 T 950 100 T 1450 100 L 1500 100"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          opacity="0.35"
          animate={{
            x: [10, -8, 10],
            y: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Water line 3 - faster, upper */}
        <motion.path
          d="M -100 60 Q 180 55 420 60 T 920 60 T 1420 60 L 1500 60"
          stroke="#E5E7EB"
          strokeWidth="1.5"
          opacity="0.3"
          animate={{
            x: [-8, 12, -8],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Water line 4 - subtle top accent */}
        <motion.path
          d="M -100 30 Q 250 27 500 30 T 1000 30 T 1500 30"
          stroke="#E5E7EB"
          strokeWidth="1"
          opacity="0.25"
          animate={{
            x: [5, -10, 5],
            y: [0, 2, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </svg>
    </div>
  );
}
