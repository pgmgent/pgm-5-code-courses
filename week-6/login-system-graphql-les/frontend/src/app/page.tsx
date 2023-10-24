'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

export default function Home() {
    

    return (
        <section className="flex flex-col gap-6">
            <h1>Welcome home</h1>
        </section>
    )
}