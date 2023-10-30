import { authOptions } from "@/libs/auth"
import { getServerSession } from "next-auth/next"
import UserCard from "@/components/UserCard"
import { redirect } from "next/navigation"

export default async function ServerPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    console.log(session)

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"Server"} />
        </section>
    )

}
