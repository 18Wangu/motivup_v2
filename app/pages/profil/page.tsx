// pages/profil/page.tsx
"use client";

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import Link from 'next/link';

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
    <div className="flex flex-col items-center px-5">
      <Link href="/pages/parametre" className='absolute top-5 right-5'>
        <Image
          src="/parametre.png"
          alt="Flamme"
          width={25}
          height={25}
        />
      </Link>

      <div className='flex flex-col items-center mt-12'>
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg"
          alt="Profil"
          width={100}
          height={100}
        />
        {/* a remplacer par la suite par le speudo */}
        <h1 className="text-2xl mb-3">{session.user?.name}</h1>
      </div>
      <div className="flex h-12">
        <button className="bg-[#131f24] hover:bg-[#111c20] text-[#1cb0f6] pt-2 px-6 rounded-xl border-t-2 border-l-2 border-r-2
          border-b-4 border-[#313f47] active:border-b-0 active:translate-y-[4px] transition-all flex gap-2">
          <Image
            src="/add-friend.png"
            alt="Flamme"
            width={20}
            height={20}
          />
          Ajouter un ami
        </button>
      </div>
      
      <div className="my-8 w-full">
          <div className="flex gap-2 mb-2">
            <div className="flex flex-col border-2 border-[#37464f] rounded-2xl p-3 flex-1">
              <div className='flex pb-2'>
                <Image
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/398e4298a3b39ce566050e5c041949ef.svg"
                  alt="Flamme"
                  width={20}
                  height={20}
                />
                <h1 className="text-[#ff9600] ml-2">18</h1>
              </div>
              <p className='text-[#37464f] text-xs'>Flamme hebdomadaire</p>
            </div>
            <div className="flex flex-col border-2 border-[#37464f] rounded-2xl p-3 flex-1">
              <div className='flex pb-2'>
                <Image
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
                  alt="Gemme"
                  width={20}
                  height={20}
                />
                <h1 className="text-[#1cb0f6] ml-2">86</h1>
              </div>
              <p className='text-[#37464f] text-xs'>Gemmes</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col border-2 border-[#37464f] rounded-2xl p-3 flex-1">
              <div className='flex pb-2'>
                <Image
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
                  alt="Coeur"
                  width={20}
                  height={20}
                />
                <h1 className="text-[#ff5b5b] ml-2">5</h1>
              </div>
              <p className='text-[#37464f] text-xs'>Nombre de vie</p>
            </div>
            <div className="flex flex-col border-2 border-[#37464f] rounded-2xl p-3 flex-1">
              <div className='flex pb-2'>
                <Image
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                  alt="Xp"
                  width={20}
                  height={20}
                />
                <h1 className="text-[#ffd900] ml-1">125 Xp</h1>
              </div>
              <p className='text-[#37464f] text-xs'>Total experience</p>
            </div>
          </div>
      </div>

      <div className="flex flex-col w-full">
        <h1 className='mb-2'>Mes amis</h1>
        <div className="flex border-2 border-[#37464f] rounded-2xl px-3 py-4 gap-1 flex-1 items-center overflow-x-scroll scrollbar-hide">
          <div className="flex flex-col items-center">
            <span className="text-4xl">🎅</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">🤶</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#37464f] flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-[#37464f]">+</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#37464f] flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-[#37464f]">+</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#37464f] flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-[#37464f]">+</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#37464f] flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-[#37464f]">+</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#37464f] flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-[#37464f]">+</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#37464f] flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-[#37464f]">+</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#37464f] flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-[#37464f]">+</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col w-full mt-8 mb-20">
        <div className='flex justify-between'>
          <h1 className='mb-2'>Mes badges</h1>
          <Link href="/pages/badges">
            <h2 className='text-[#1cb0f6]'>Voir tous</h2>
          </Link>
        </div>
        <div className="flex border-2 border-[#37464f] rounded-2xl px-3 py-2 overflow-x-scroll scrollbar-hide">
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
