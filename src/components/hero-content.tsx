"use client";

import { motion } from "motion/react";
import { WaitlistForm } from "@/components/waitlist-form";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
        Taking a Punt
      </h1>
      <p className="mt-3 italic text-sm text-gray-500">
        verb · To take a chance on something new.
      </p>
      <p className="mt-3 text-sm font-medium tracking-wide text-gray-400">
        Launching Soon
      </p>
      <p className="mt-6 text-base leading-relaxed text-gray-500">
        Stories from people who took a punt.
      </p>
      <div className="mt-8 max-w-sm">
        <WaitlistForm />
      </div>
    </motion.div>
  );
}
