"use client";

import { useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

const MAX_PUPIL_OFFSET = 1.5;
const FULL_TRACK_DISTANCE = 300;

function calculatePupilOffset(
  container: HTMLDivElement,
  mouseX: number,
  mouseY: number,
): string {
  const rect = container.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = mouseX - centerX;
  const dy = mouseY - centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const factor = Math.min(distance / FULL_TRACK_DISTANCE, 1);

  const angle = Math.atan2(dy, dx);
  const tx = Math.cos(angle) * factor * MAX_PUPIL_OFFSET;
  const ty = Math.sin(angle) * factor * MAX_PUPIL_OFFSET;

  return `translate(${tx}px, ${ty}px)`;
}

export default function EyeTracker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useMousePosition((mouseX, mouseY) => {
    if (!containerRef.current || !leftPupilRef.current || !rightPupilRef.current)
      return;

    const transform = calculatePupilOffset(containerRef.current, mouseX, mouseY);
    leftPupilRef.current.style.transform = transform;
    rightPupilRef.current.style.transform = transform;
  });

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div className="flex gap-[6px]">
        <div className="flex h-[6px] w-[6px] items-center justify-center rounded-full bg-white">
          <div
            ref={leftPupilRef}
            className="h-[3px] w-[3px] rounded-full bg-black transition-transform duration-100"
          />
        </div>
        <div className="flex h-[6px] w-[6px] items-center justify-center rounded-full bg-white">
          <div
            ref={rightPupilRef}
            className="h-[3px] w-[3px] rounded-full bg-black transition-transform duration-100"
          />
        </div>
      </div>
    </div>
  );
}
