"use client";

import { useState, useEffect } from "react";

function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "pm" : "am";
  const h = hours % 12 || 12;
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  return `${h}:${m}:${s} ${ampm}`;
}

export default function LiveClock() {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(formatTime(new Date()));
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="hidden items-center gap-2 rounded-full bg-card border border-card-border px-4 py-2 text-sm text-text-primary select-none lg:flex">
      <img
        src="/icons/clock-d.svg"
        alt=""
        className="h-4 w-4 invert"
        draggable={false}
      />
      <span className="font-mono tabular-nums">{time}</span>
    </div>
  );
}
