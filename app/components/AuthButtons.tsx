"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Bienvenue, {session.user?.name}</p>
        <button onClick={() => signOut()} className="bg-red-600 p-5 rounded-2xl text-white">Se déconnecter</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-8">
      <button onClick={() => signIn("google")} className="bg-blue-800 p-5 rounded-xl text-white">Google</button>
    </div>
  );
}
