import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AjouterDefi() {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
        <h1 className="text-2xl my-5">Ajouter un défi</h1>
        <div className='flex gap-2 overflow-x-scroll scrollbar-hide w-72'>
            <div className='flex flex-col gap-2'>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>🎙️</span>
                    <p className='text-center'>Apprendre l'anglais</p>
                </div>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>🏊</span>
                    <p className='text-center'>Nager</p>
                </div>
                <div className='bg-[#58cc02] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>🏃</span>
                    <p className='text-center'>Courir</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'> 🧘‍♀️</span>
                    <p className='text-center'>Méditation</p>
                </div>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>🥗</span>
                    <p className='text-center'>Manger sainement</p>
                </div>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>🎨</span>
                    <p className='text-center'>Peinture</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>💻</span>
                    <p className='text-center'>Coder</p>
                </div>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>👣</span>
                    <p className='text-center'>Marcher</p>
                </div>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>🎓</span>
                    <p className='text-center'>Etudier</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-6xl mb-2'>🕰️</span>
                    <p className='text-center'>Levé 5h</p>
                </div>
                <div className='bg-[#313f44] w-32 h-32 rounded-xl flex flex-col justify-center items-center'>
                    {/* popup comme sur habit tracker pour ajouter son emoji et nom */}
                    <span className='text-6xl mb-2'>+</span>
                    <p className='text-center'>Autre défi</p>
                </div>
            </div>
        </div>

        <div className='my-5'>
            <h1 className='text-xl mb-3'>Combien de fois par semaine ?</h1>
            <div className='flex gap-3 justify-center'>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-[#313f44] rounded-full w-8 h-8'></div>
                    <p className='text-[#313f44]'>x 1</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-[#313f44] rounded-full w-8 h-8'></div>
                    <p className='text-[#313f44]'>x 2</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-[#313f44] rounded-full w-8 h-8'></div>
                    <p className='text-[#313f44]'>x 3</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-[#58cc02] bg-[#58cc02] rounded-full w-8 h-8'></div>
                    <p className='text-[#58cc02]'>x 4</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-[#313f44] rounded-full w-8 h-8'></div>
                    <p className='text-[#313f44]'>x 5</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-[#313f44] rounded-full w-8 h-8'></div>
                    <p className='text-[#313f44]'>x 6</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-[#313f44] rounded-full w-8 h-8'></div>
                    <p className='text-[#313f44]'>x 7</p>
                </div>
            </div>
        </div>

        <button
          className="mt-5 mb-20 bg-[#58cc02] hover:bg-[#4baf01] text-white font-bold py-3 px-6 rounded-xl 
          border-b-4 border-[#45a501] active:border-b-0 active:translate-y-[4px] transition-all w-52 h-14"
        >
          VALIDER
        </button>

        <Link href="/pages/defis">
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
