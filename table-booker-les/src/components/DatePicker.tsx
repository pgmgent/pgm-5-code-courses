"use client"
import { useState } from "react";


// type DatePickerProps
type DatePickerProps = {
    onDateChange: (date: string) => void;
}

export default function DatePicker({ onDateChange } : DatePickerProps){
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = e.target.value;
        setSelectedDate(selectedDate);
        onDateChange(selectedDate)
    }
    return (
        <div className="mx-auto p-4 border-gray-300 rounded" >
            <label htmlFor="" className="block mt-5 font-bold">Select Date:</label>
            <input type="date" className="w-full p-3 mb-5 border-gray-300 rounded text-lg" onChange={handleDateChange} />
        </div>
    )
}