import Timer from '@/components/Timer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className='text-2xl'>Simple Timer</h1>
      <Timer />
    </main>
  )
}
