// pages/profil/page.tsx
"use client";

import React, { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';

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
    <div className="flex flex-col items-center">
      <div>
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg"
          alt="Profil"
          width={150}
          height={150}
        />
        <h1 className="text-2xl mb-5">Bienvenue, {session.user?.name}</h1>
      </div>
      <button className="bg-[#58cc02] hover:bg-[#4baf01] text-white font-bold py-3 px-6 rounded-xl 
        border-b-4 border-[#45a501] active:border-b-0 active:translate-y-[4px] transition-all">
        Ajouter un ami
      </button>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}  // Rediriger vers la page d'accueil après la déconnexion
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl 
        border-b-4 border-red-400 active:border-b-0 active:translate-y-[4px] transition-all"
      >
        Se déconnecter
      </button>
      <div className="my-8">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex border-2 border-grey-300 rounded-2xl px-3 py-2 w-32">
              <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/398e4298a3b39ce566050e5c041949ef.svg"
                alt="Flamme"
                width={20}
                height={20}
              />
              <h1 className="text-[#ff9600] ml-2">18</h1>
            </div>
            <div className="flex border-2 border-grey-300 rounded-2xl px-3 py-2 w-32">
              <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
                alt="Gemme"
                width={20}
                height={20}
              />
              <h1 className="text-[#1cb0f6] ml-2">86</h1>
            </div>
            <div className="flex border-2 border-grey-300 rounded-2xl px-3 py-2 w-32">
              <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
                alt="Coeur"
                width={20}
                height={20}
              />
              <h1 className="text-[#ff5b5b] ml-2">5</h1>
            </div>
            <div className="flex border-2 border-grey-300 rounded-2xl px-3 py-2 w-32">
              <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                alt="Xp"
                width={20}
                height={20}
              />
              <h1 className="text-[#ffd900] ml-2">125 Xp</h1>
            </div>
          </div>
      </div>

      <div className="flex flex-col border-2 border-grey-300 rounded-2xl px-3 py-2 w-72">
        <h1>Flamme amis</h1>
        <div className="flex gap-1">
          <div className="flex flex-col items-center">
            <span className="text-4xl">🎅</span>
            <h2 className="text-xs">Celeste</h2>
            <div className="flex items-center">
              <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/398e4298a3b39ce566050e5c041949ef.svg"
                alt="Flamme"
                width={15}
                height={15}
              />
              <h1 className="text-[#ff9600] ml-1">7</h1>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center ml-2">
            <span className="text-gray-300">+</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center ml-2">
            <span className="text-gray-300">+</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center ml-2">
            <span className="text-gray-300">+</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col border-2 border-grey-300 rounded-2xl px-3 py-2 w-72 mt-3 mb-8">
        <h1>Mes badges</h1>
        <div className="flex">
          <Image
            src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/64d0bbcd8f4e6d5018502540f1e0094b.svg"
            alt="badge sportif du mois"
            width={120}
            height={120}
          />
          <Image
            src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/64d0bbcd8f4e6d5018502540f1e0094b.svg"
            alt="badge sportif du mois"
            width={120}
            height={120}
          />
        </div>
      </div>
      <Navbar />
    </div>
  );
}
