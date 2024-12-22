// pages/profil/page.tsx
"use client";  // Assurez-vous que c'est un Client Component

import React, { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Profil() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router]);

  if (!session) return null;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-5">Bienvenue, {session.user?.name}</h1>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}  // Rediriger vers la page d'accueil après la déconnexion
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl 
        border-b-4 border-red-400 active:border-b-0 active:translate-y-[4px] transition-all"
      >
        Se déconnecter
      </button>
    </div>
  );
}
