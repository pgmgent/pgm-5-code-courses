'use client'

import { useSession } from 'next-auth/react'
import { redirect} from 'next/navigation'


export default function ClientPage(){
    const {data: session, status} = useSession({
        required: true,
        onUnauthenticated(){
            redirect('/')
        }
    })
    if(status === 'loading'){
        return <p>Loading...</p>
    }
    return (
        <main>
            <h1>{session!.user!.name}</h1>
        </main>
    )
}