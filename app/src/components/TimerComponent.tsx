"use client";
import React, { useState, useEffect } from "react";

type ElectionTimerProps = {
  electionEndingTime: number;
};

const ElectionTimer: React.FC<ElectionTimerProps> = ({
  electionEndingTime,
}) => {
  const calculateTimeLeft = () => {
    const now = Date.now();
    return Math.max((electionEndingTime - now) / 1000, 0);
  };

  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours}h : ${minutes}m : ${secs}s`;
  };

  return (
    <div className="bg-gray-900 text-white p-6 text-center rounded-lg w-72 mx-auto">
      <h2 className="text-lg font-semibold">Elections ends in</h2>
      <div className="bg-gray-300 text-black p-3 rounded-md text-2xl font-bold mt-2">
        {timeLeft > 0 ? formatTime(timeLeft) : "Election Ended"}
      </div>
    </div>
  );
};

export default ElectionTimer;
