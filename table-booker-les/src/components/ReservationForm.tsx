"use client";
import { useState } from "react";
import { TimeSlot } from "@/types/types";
import DatePicker from "./DatePicker";
import { getTimeSlots } from "@/api/localData";
import TimeSlotSelector from "./TimeSlotSelector";

export default function ReservationForm() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  // handleDateChange
  const handleDateChange = async (date: string) => {
    console.log(date);
    let timeSlots = await getTimeSlots(date);
    setTimeSlots(timeSlots);
    setSelectedDate(date);
  };
  // handleTimeSlotChange
  const handleTimeSlotChange = () => {};
  // handleReservationSubmit
  const handleReservationSubmit = () => {};

  return (
    <div className="max-w-sm mx-auto p-4 border border-gray-300 rounded bg-gray-200">
      <h2 className="mt-4 text-3xl">Make a Reservation</h2>
      {/* DatePicker met functie onDateChange */}
      <DatePicker onDateChange={handleDateChange} />
      {selectedDate && (
        <TimeSlotSelector
          selectedDate={selectedDate}
          onTimeSlotChange={handleTimeSlotChange}
          timeSlots={timeSlots}
        />
      )}
    </div>
  );
}
