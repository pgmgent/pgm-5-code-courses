"use client"
import Timer from '@/components/Timer'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
    const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timerTime, setTimerTime] = useState<number>(60);

  const handleToggle = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimerTime(60); // Reset the timer to the initial time (60 seconds)
  };

  const handleUpdate = (newTime: number) => {
    if (!isRunning) {
      setTimerTime(newTime);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Simple Timer</h1>
        <Timer
          initialTime={timerTime}
          isRunning={isRunning}
          onToggle={handleToggle}
          onReset={handleReset}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}
