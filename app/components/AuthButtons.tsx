// components/AuthButtons.tsx
"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButtons({ buttonText = "INSCRIPTION AVEC GOOGLE" }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/pages/profil");
    }
  }, [session, router]);

  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <button
        onClick={handleSignIn}
        className="bg-[#58cc02] hover:bg-[#4baf01] text-white font-bold py-3 px-6 rounded-xl 
        border-b-4 border-[#45a501] active:border-b-0 active:translate-y-[4px] transition-all w-72"
      >
        {buttonText}
      </button>
    </div>
  );
}
