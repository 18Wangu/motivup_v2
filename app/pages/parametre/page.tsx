"use client";

import { signOut } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Parametre() {
  return (
    <div className='flex flex-col items-center gap-5 mt-12'>
      <div className="relative w-24">
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg"
          alt="Profil"
          width={100}
          height={100}
        />
        {/* mettre la possibilité d'upload une photo */}
        <Image
          src="/pencil.png"
          alt="modifier"
          width={20}
          height={20}
          className='absolute bottom-0 -right-2'
        />
      </div>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Theo"
        className="rounded-xl border-2 border-[#313f47] bg-[#202f36] text-white placeholder-gray-400 px-3 py-2 text-center w-40"
      />
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl 
        border-b-4 border-red-400 active:border-b-0 active:translate-y-[4px] transition-all"
      >
        Se déconnecter
      </button>
      <Link href="/pages/profil">
          <Image 
              src="https://d35aaqx5ub95lt.cloudfront.net/images/48b38c250a652878bc0c779a07f2ca48.svg" 
              alt="Fermer la page" 
              width={15} 
              height={15}
              className='absolute top-5 right-5' 
          />
      </Link>
    </div>
  )
}
