"use client";

import React, { useState } from 'react';
import DatePicker from './DatePicker';
import TimeSlotSelector from './TimeSlotSelector';
import { TimeSlot } from '@/types/types';
import { deleteTimeSlot, getTimeSlots } from '@/api/localData';

function ReservationForm() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
	const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const handleDateChange = async(date: string) => {
		let timeSlots = await getTimeSlots(date);
		setTimeSlots(timeSlots);
    setSelectedDate(date);
  };

  const  handleTimeSlotChange = async(timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleReservationSubmit = async() => {
    // Handle the reservation submission logic here
		let message = await deleteTimeSlot(selectedDate as string, selectedTimeSlot as string)
		alert(message)
    console.log('Date:', selectedDate);
    console.log('Time Slot:', selectedTimeSlot);
    // Add your API calls or storage logic here
		setSelectedTimeSlot(null);
  };
  return (
    <div className='max-w-sm mx-auto p-4 border border-gray-300 rounded bg-gray-200'>
      <h2 className='mt-4 text-3xl'>Make a Reservation</h2>
      <DatePicker onDateChange={handleDateChange} />
      {selectedDate && (
        <TimeSlotSelector
          selectedDate={selectedDate}
          onTimeSlotChange={handleTimeSlotChange}
					timeSlots={timeSlots}

        />
      )}
      {selectedTimeSlot && (
        <button className='w-full p-3 bg-blue-500 text-white rounded text-lg cursor-pointer transition hover:bg-blue-700' onClick={handleReservationSubmit}>Submit Reservation</button>
      )}
    </div>
  );
}

export default ReservationForm;
