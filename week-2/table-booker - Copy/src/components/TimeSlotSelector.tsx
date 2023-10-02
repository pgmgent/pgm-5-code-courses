import React, { useState } from 'react';
import  getTimeSlots from '../app/page';
import { TimeSlot } from '@/types/types';
type TimeSlotSelectorProps = {
  selectedDate: string;
  onTimeSlotChange: (timeSlot: string) => void;
	timeSlots: TimeSlot[];
}




function TimeSlotSelector({ selectedDate, onTimeSlotChange, timeSlots }: TimeSlotSelectorProps) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const handleTimeSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTimeSlot = e.target.value;
    setSelectedTimeSlot(selectedTimeSlot);
    onTimeSlotChange(selectedTimeSlot);
  };
	
	
  // You can fetch available time slots for the selected date here
	
  return (
    <div className='my-2 p-4 border border-gray-300 rounded bg-gray-200'>
      <label className='block mt-5 font-bold'>Select Time Slot:</label>
      <select onChange={handleTimeSlotChange} className='w-full p-3 mb-5 border border-gray-300 rounded text-lg bg-white'>
			{timeSlots.length === 0 && <option disabled>No time slots available</option>}
			{timeSlots.map((slot) => (
          <option key={slot.id} value={slot.id}>
            {slot.time}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimeSlotSelector;
