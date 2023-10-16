"use client";
import Image from "next/image";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div class="md:container md:mx-auto">
        <div class="space-y-4 font-mono font-bold text-xs text-white">
          <div className="flex space-x-4">
            <div className="w-[100rem] px-4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">
              w-1/2
              {JSON.stringify(data)}
              <div>
                <button className="btn" onClick={() => signOut()}>
                  signOut
                </button>
              </div>
              <div>
                <button className="btn" onClick={() => signIn()}>
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
