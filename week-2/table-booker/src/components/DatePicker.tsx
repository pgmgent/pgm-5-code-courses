import React, { useState } from 'react';

interface DatePickerProps {
  onDateChange: (date: string) => void;
}

function DatePicker({ onDateChange }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
    onDateChange(selectedDate);
  };

  return (
    <div className='mx-auto p-4 border border-gray-300 rounded'>
      <label className='block mt-5 font-bold'>Select Date:</label>
      <input className='w-full p-3 mb-5 border border-gray-300 rounded text-lg' type="date" onChange={handleDateChange} />
    </div>
  );
}

export default DatePicker;
