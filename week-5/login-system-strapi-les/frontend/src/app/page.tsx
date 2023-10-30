"use client";
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home</h1> <br />
      <button onClick={() => signIn()}>Login</button> <br />
      <button onClick={() => signOut()}>Logout</button> <br />
      
      <Link href='/server'>Server page</Link>
      </main>
  )
}
