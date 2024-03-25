import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/nextAuth";
import { redirect } from "next/navigation";
import Logout from "./pages/logout"
import RootLayout from "./layout";
import dbConnect from "./lib/dbConnect";

export default async function Home() {
  const branch = 'HQ'
  const session = await getServerSession(authOptions);
  console.log(session?.user.name) && null;

  if (!session){
    redirect('/api/auth/signin');
  }

  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-bold">
        Welcome {""}
        <a className="text-blue-600">{session.user.name} </a>
        to {branch}
        </h1>
        <Logout/>
      </main>
    </RootLayout>
  );
}
