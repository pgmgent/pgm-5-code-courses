"use server"
import { DateTimeSlots, TimeSlot } from '@/types/types';
import fs from 'fs/promises';



function getTimeSlotsForDate(dateToFind: string, timeSlots: DateTimeSlots[]): TimeSlot[] {
  // Iterate through the timeSlots array to find the matching date
  for (const dayTimeSlots of timeSlots) {
    if (dayTimeSlots.date === dateToFind) {
      return dayTimeSlots.availableTimeSlots;
    }
  }

  // If the date is not found, return an empty array or handle the error as needed
  return [];
}

export async function getTimeSlots(date: string): Promise<TimeSlot[]> {
	const response = await fs.readFile(process.cwd() + '/public/timeslots.json');
	const timeSlotData = JSON.parse(response.toString());
	const timeSlots = getTimeSlotsForDate(date, timeSlotData);
	return timeSlots;
}

export async function getAvailableDates(): Promise<string[]> {
	const response = await fs.readFile(process.cwd() + '/public/timeslots.json');
	const timeSlotData = JSON.parse(response.toString());
	const availableDates = timeSlotData.map((dayTimeSlots: DateTimeSlots) => dayTimeSlots.date);
	return availableDates;
}

export async function deleteTimeSlot(date: string, timeSlotId: string): Promise<string> {
	const response = await fs.readFile(process.cwd() + '/public/timeslots.json');
	const timeSlotData = JSON.parse(response.toString());
	const timeSlots = getTimeSlotsForDate(date, timeSlotData);
	const updatedTimeSlots = timeSlots.filter((timeSlot: TimeSlot) => timeSlot.id !== timeSlotId);
	const updatedTimeSlotData = timeSlotData.map((dayTimeSlots: DateTimeSlots) => {
		if (dayTimeSlots.date === date) {
			return {
				date: date,
				availableTimeSlots: updatedTimeSlots,
			};
		}
		return dayTimeSlots;
	});
	await fs.writeFile(process.cwd() + '/public/timeslots.json', JSON.stringify(updatedTimeSlotData));
	if (updatedTimeSlots.length === timeSlots.length) {
		return 'Time slot not found';
	}
	return 'Time slot deleted';
}
