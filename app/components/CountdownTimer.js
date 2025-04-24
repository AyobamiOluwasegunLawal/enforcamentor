"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function getTimeRemaining(targetDate) {
  const total = targetDate - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

const CountdownTimer = ({ target = "2025-01-01T00:00:00" }) => {
  const targetTime = new Date(target).getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetTime));

  
  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(targetTime);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  const Box = ({ label, value }) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md w-20"
    >
      <span className="text-2xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-wider mt-1">{label}</span>
    </motion.div>
  );

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-gray-50 rounded-2xl">
      <div className="flex justify-between space-x-2">
      <Box label="Days" value={timeLeft.days} />
      <Box label="Hours" value={timeLeft.hours} />
      <Box label="Minutes" value={timeLeft.minutes} />
      <Box label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
};

export default CountdownTimer;
