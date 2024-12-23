import Navbar from '@/app/components/navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Defis() {
  return (
    <div className='flex flex-col items-center justify-center my-8'>
      <h1 className="text-2xl my-5">Mes Défis</h1>

      {/* Calendrier */}
      <div className='relative mb-8'>
        <div className='flex justify-around mb-2'>
          <h1>Janv</h1> <h1>Fev</h1> <h1>Mars</h1> <h1>Avril</h1>
        </div>
        <div className='flex flex-col gap-3 absolute top-7 left-0'>
          <h1>L</h1> <h1>M</h1> <h1>V</h1>
        </div>
        <div className='flex flex-col gap-1 ml-5'>
          <div className='flex gap-1'>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
          </div>
          <div className='flex gap-1'>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
          </div>
          <div className='flex gap-1'>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
          </div>
          <div className='flex gap-1'>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#313f44] w-5 h-5 rounded-md'></div>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
            <div className='bg-[#58cc02] w-5 h-5 rounded-md'></div>
          </div>
        </div>
      </div>

      {/* Les Defis */}
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3 p-3 border-2 rounded-xl border-[#313f47] relative'>
          <div className='text-6xl'>🏋️</div>
          <div className='flex flex-col'>
            <h1 className='text-base text-[#313f47]'>Niveau 1</h1>
            <h2 className='mb-3'>Crossfit</h2>
            <div className='bg-[#313f47] rounded-xl w-52 h-3 z-0 flex items-center justify-between'>
              <div className='bg-[#ffd900] rounded-xl h-3 w-28 z-10'></div>
              <div className='flex items-center'>
                <h1 className="text-[#ffd900] mr-1 text-xs">35 / 50</h1>
                <Image
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                  alt="Xp"
                  width={15}
                  height={15}
                  className='mr-1'
                />
              </div>
            </div>
          </div>
          {/* changer en checkbox pour que ca soit cochable et que ca change l'etat de la db + animation confeti quand coche */}
          <div className='absolute top-2 right-2 w-6 h-6 border-2 border-[#313f47] rounded-[6px]'></div>
        </div>

        <div className='flex items-center gap-3 p-3 border-2 rounded-xl border-[#313f47] relative'>
          <div className='text-6xl'>📖</div>
          <div className='flex flex-col'>
            <h1 className='text-base text-[#313f47]'>Niveau 3</h1>
            <h2 className='mb-3'>Lecture</h2>
            <div className='bg-[#313f47] rounded-xl w-52 h-3 z-0 flex items-center justify-between'>
              <div className='bg-[#ffd900] rounded-xl h-3 w-12 z-10'></div>
              <div className='flex items-center'>
                <h1 className="text-[#ffd900] mr-1 text-xs">25 / 250</h1>
                <Image
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                  alt="Xp"
                  width={15}
                  height={15}
                  className='mr-1'
                />
              </div>
            </div>
          </div>
          {/* changer en checkbox pour que ca soit cochable et que ca change l'etat de la db + animation confeti quand coche */}
          <div className='absolute top-2 right-2 w-6 h-6 border-2 border-[#58cc02] rounded-[6px]'></div>
          <Image
            src="/check.png"
            alt="coche"
            width={30}
            height={30}
            className='absolute top-1 right-1'
          />
        </div>

        <div className='flex items-center gap-3 p-3 border-2 rounded-xl border-[#313f47] relative'>
          <div className='text-6xl'>🚴‍♂️</div>
          <div className='flex flex-col'>
            <h1 className='text-base text-[#313f47]'>Niveau 3</h1>
            <h2 className='mb-3'>Vélo</h2>
            <div className='bg-[#313f47] rounded-xl w-52 h-3 z-0 flex items-center justify-between'>
              <div className='bg-[#ffd900] rounded-xl h-3 w-16 z-10'></div>
              <div className='flex items-center'>
                <h1 className="text-[#ffd900] mr-1 text-xs">50 / 250</h1>
                <Image
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                  alt="Xp"
                  width={15}
                  height={15}
                  className='mr-1'
                />
              </div>
            </div>
          </div>
          {/* changer en checkbox pour que ca soit cochable et que ca change l'etat de la db + animation confeti quand coche */}
          <div className='absolute top-2 right-2 w-6 h-6 border-2 border-[#58cc02] rounded-[6px]'></div>
          <Image
            src="/check.png"
            alt="coche"
            width={30}
            height={30}
            className='absolute top-1 right-1'
          />
        </div>

        <div className='flex items-center gap-3 p-3 border-2 rounded-xl border-[#313f47] relative'>
          <div className='text-6xl'>🎙️</div>
          <div className='flex flex-col'>
            <h1 className='text-base text-[#313f47]'>Niveau 2</h1>
            <h2 className='mb-3'>Anglais</h2>
            <div className='bg-[#313f47] rounded-xl w-52 h-3 z-0 flex items-center justify-between'>
              <div className='bg-[#ffd900] rounded-xl h-3 w-16 z-10'></div>
              <div className='flex items-center'>
                <h1 className="text-[#ffd900] mr-1 text-xs">50 / 180</h1>
                <Image
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                  alt="Xp"
                  width={15}
                  height={15}
                  className='mr-1'
                />
              </div>
            </div>
          </div>
          {/* changer en checkbox pour que ca soit cochable et que ca change l'etat de la db + animation confeti quand coche */}
          <div className='absolute top-2 right-2 w-6 h-6 border-2 border-[#58cc02] rounded-[6px]'></div>
          <Image
            src="/check.png"
            alt="coche"
            width={30}
            height={30}
            className='absolute top-1 right-1'
          />
        </div>
      </div>

      <Link href="/pages/ajouterDefi">
        <button
          className="mt-5 mb-20 bg-[#58cc02] hover:bg-[#4baf01] text-white font-bold py-3 px-6 rounded-xl 
          border-b-4 border-[#45a501] active:border-b-0 active:translate-y-[4px] transition-all w-52 h-14"
        >
          AJOUTER UN DEFI
        </button>
      </Link>
      <Navbar />
    </div>
  )
}

/*
changer d'image, une qui fassse penser a defi dans la navbar
ajouter calendrier comme github avec les cases colorie en verte si defi complete ce jour la
liste des differents defis avec la case a coché pour dire que le defi est complete
en dessous mettre un bouton ajouter un defis -> redirige vers un formulaire avec choix de l'emoji, nom du defis, frequence du defis et bouton ajouter defi

ajouter la possibilite de supprimer un defi

decouper le code pour mettre dans des composants pour une meilleur lisibilité du code
*/