import { getServerSession } from "next-auth/next";
import { options } from "@/libs/options";
import { redirect } from "next/navigation";

export default async function ServerPage() {
  const session = await getServerSession(options);
    console.log(session)
  if (!session) {
    redirect("/");
  }
  return (
    <main>
      <h1>{session!.user!.name}</h1>
    </main>
  );
}
