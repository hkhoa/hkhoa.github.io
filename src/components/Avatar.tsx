"use client";

import { useState, useCallback } from "react";
import { SITE } from "@/lib/constants";
import NftBadge from "./NftBadge";
import EyeTracker from "./EyeTracker";

export default function Avatar() {
  const [isHinging, setIsHinging] = useState(false);

  const handleClick = useCallback(() => {
    if (isHinging) return;
    setIsHinging(true);
  }, [isHinging]);

  const handleAnimationEnd = useCallback(() => {
    setIsHinging(false);
  }, []);

  return (
    <div className="relative select-none">
      <NftBadge visible={!isHinging} />
      <div
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
        className={`relative h-12 w-12 cursor-pointer ${isHinging ? "animate-hinge" : "animate-fade-in"}`}
      >
        <img
          src="/images/doodle.png"
          alt={SITE.name}
          className="h-12 w-12"
          draggable={false}
        />
        <EyeTracker />
      </div>
    </div>
  );
}
