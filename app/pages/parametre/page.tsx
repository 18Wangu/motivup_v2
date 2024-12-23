"use client";

import { signOut } from 'next-auth/react'
import React from 'react'

export default function Parametre() {
  return (
    <div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}  // Rediriger vers la page d'accueil après la déconnexion
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl 
          border-b-4 border-red-400 active:border-b-0 active:translate-y-[4px] transition-all"
        >
          Se déconnecter
        </button>
      
    </div>
  )
}
