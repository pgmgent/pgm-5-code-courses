"use server"
import { DateTimeSlots, TimeSlot } from '@/types/types'
import fs from 'fs/promises'

function getTimeSlotsForDate(dateToFind: string, timeSlotData: DateTimeSlots[]): TimeSlot[] {
    for(const dayTimeSlots of timeSlotData) {
        if(dayTimeSlots.date === dateToFind) {
            return dayTimeSlots.availableTimeSlots;
        }
    }
    return [];
}

export async function getTimeSlots(date: string): Promise<TimeSlot[]> {
    const response = await fs.readFile(process.cwd() + '/public/timeslots.json');
    const timeSlotData = JSON.parse(response.toString());
    const timeSlots = getTimeSlotsForDate(date, timeSlotData);
    return timeSlots;
}