"use client";
import { use, useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(100);
  const [startTime, setStartTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    // indien isRunning true is, dan start de timer
    let timerInterval : NodeJS.Timeout | null = null;
    if (isRunning && time > 0) {
        // start de timer
        timerInterval = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);
        console.log(typeof timerInterval)
    }
    else{
        // stop de timer
        if(timerInterval) clearInterval(timerInterval);
    }
    return () => {
        // cleanup
        if(timerInterval) clearInterval(timerInterval);
    }
});

    function handleStartStopClick() {
        setIsRunning(!isRunning);
    }

    function handleResetClick() {
        setTime(startTime);
        setIsRunning(false);
    }
    function handleTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
        const timeToSet = parseInt(event.target.value);
        if(timeToSet < 0 || isNaN(timeToSet)) return;
        setStartTime(timeToSet);
        setTime(timeToSet);
    }

  return (
    <>
      <div className="border-solid border-2 border-grey-500 rounded p-2 m-2 bg-slate-900 text-white">
        <p className="my-3">{time} seconds</p>
        <div className="my-3 flex justify-between">
          <button onClick={handleStartStopClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handleResetClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Reset
          </button>
        </div>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="number"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="timer-input"
            placeholder="Countdown"
            disabled={isRunning}
            onChange={handleTimeChange}
          />
          <label
            htmlFor="timer-input"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-100 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            CountDown
          </label>
        </div>
      </div>
    </>
  );
}
