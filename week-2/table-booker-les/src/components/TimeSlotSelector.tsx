import { TimeSlot } from "@/types/types"


type TimeSlotSelectorProps = {
    selectedDate : string,
    timeSlots : TimeSlot[],
    onTimeSlotChange: (timeSlot: string) => void;
}

export default function TimeSlotSelector(
    { selectedDate, 
        timeSlots, 
        onTimeSlotChange
    } : TimeSlotSelectorProps){
        // handeTimeSlotChange
        function handleTimeSlotChange () {

        }
        return (
            <div className='my-2 p-4 border border-gray-300 rounded bg-gray-200'>
            <label className='block mt-5 font-bold'>Select Time Slot:</label>
            <select onChange={handleTimeSlotChange} className='w-full p-3 mb-5 border border-gray-300 rounded text-lg bg-white'>
            {/* toon alle beschikbare timeslot */}
            </select>
          </div>
        )
}