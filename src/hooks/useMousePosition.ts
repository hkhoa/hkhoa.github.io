"use client";

import { useEffect, useRef } from "react";

type MouseCallback = (x: number, y: number) => void;

export function useMousePosition(callback: MouseCallback) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      callbackRef.current(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
}
