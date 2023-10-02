
import { Metadata } from 'next';
import ReservationForm from '../components/ReservationForm';
import { TimeSlot } from '@/types/types';


export const metadata: Metadata = {
  title: 'Reservation System',
	description: 'Programmed By PGM-5',
}

export default async function Page({ timeSlots} : {timeSlots: TimeSlot[]}) {
	"use server"
	// timeSlots = await getTimeSlots();
  return (
    <div className='p-10'>
      <main className='flex justify-center flex-col content-center h-full '>
        <h1 className='text-center'>Reservation System</h1>
        <ReservationForm/>
      </main>
    </div>
  );
}

