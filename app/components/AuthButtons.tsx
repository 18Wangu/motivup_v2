// components/AuthButtons.tsx

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function AuthButtons({ buttonText = "INSCRIPTION AVEC GOOGLE" }) {
  const { data: session } = useSession();
  const [pseudo, setPseudo] = useState("");

  const handleSignIn = async () => {
    await signIn("google");
  };

  if (session) {
    return (
      <div>
        <p>Bienvenue, {session.user?.name}</p>
        <button onClick={() => signOut()} className="">Se déconnecter</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <button onClick={handleSignIn} className="bg-[#58cc02] hover:bg-[#4baf01] text-white font-bold py-3 px-6 rounded-xl 
        border-b-4 border-[#45a501] active:border-b-0 active:translate-y-[4px] transition-all w-72">
          {buttonText}
      </button>
    </div>
  );
}
