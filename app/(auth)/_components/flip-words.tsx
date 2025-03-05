import { FlipWords } from "@/components/flip-words";
import React from "react";

export function FlipWor() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="flex justify-center items-center px-4 w-full">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Plan
        <FlipWords words={words} /> <br />
       With Mordern Planning app
      </div>
    </div>
  );
}
