export type TimeSlot = {
	id: string;
	time: string;
}

export type DateTimeSlots = {
	date: string;
	availableTimeSlots: TimeSlot[];
};