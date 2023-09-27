// components/Timer.tsx
import { useEffect, useState } from 'react';

interface TimerProps {
  initialTime: number;
  isRunning: boolean;
  onToggle: () => void;
  onReset: (newTime : number) => void;
  onUpdate: (newTime: number) => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, isRunning, onToggle, onReset, onUpdate }) => {
  const [time, setTime] = useState<number>(initialTime);
	const [startTime, setStartTime] = useState<number>(initialTime);
useEffect(() => {
	let timerInterval: NodeJS.Timeout | null = null;

	if (isRunning && time > 0) {
		timerInterval = setInterval(() => {
			setTime((prevTime) => prevTime - 1);
		}, 1000);
	} else {
		if(timerInterval) clearInterval(timerInterval);
	}

	return () => {
		if(timerInterval) clearInterval(timerInterval);
	};
}, [time, isRunning]);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Math.ceil(Number(event.target.value));
		setStartTime(newTime);
		// setTime(newTime);
    onUpdate(newTime);
  };

	const handleReset = () => {
		setTime(startTime);
		onReset(startTime);
	}

	const handleToggle = () => {
		if(time === 0) {
			setTime(startTime);
			onReset(startTime);
		}
		// if(!isRunning) {
		// 	setTime(startTime);
		// 	onReset(startTime);
		// }
		onToggle();
	}

  return (
    <div className="text-4xl font-bold">
      <div>{time} seconds</div>
      <div className="mt-4">
        <button onClick={handleToggle} className="bg-blue-500 text-white px-4 py-2 mr-4 rounded">
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset
        </button>
      </div>
      <div className="mt-4">
				<label htmlFor="">Next timer</label>
				<br />
        <input
          type="number"
          value={startTime}
          onChange={handleTimeChange}
          className="w-40 border rounded p-2 text-black"
          disabled={isRunning}
        />
      </div>
    </div>
  );
};

export default Timer;
