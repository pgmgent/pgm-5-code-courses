import ReservationForm from '@/components/ReservationForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex justify-center flex-col content-center h-full '>
      <h1 className='text-center'>Reservation System</h1>
      {/* Reservationform Toevoegen */}
      <ReservationForm /> 
    </main>
  )
}
