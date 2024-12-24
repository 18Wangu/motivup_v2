// pages/defis/page.tsx
"use client";

import Navbar from '@/app/components/navbar';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DefiCard } from '@/app/components/DefiCard';
import { Calendar } from '@/app/components/Calendar';

type Defi = {
  id: number;
  name: string;
  emoji: string;
  frequency: number;
};

export default function Defis() {
  const [defis, setDefis] = useState<Defi[]>([]);

  useEffect(() => {
    const fetchDefis = async () => {
      try {
        const response = await fetch('/api/defis');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des défis');
        }
        const data = await response.json();
        setDefis(data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchDefis();
  }, []);

  // Fonction pour supprimer un défi
  const deleteDefi = async (id: number) => {
    try {
      const response = await fetch('/api/defis', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du défi');
      }

      // Filtrer le défi supprimé de la liste
      setDefis((prevDefis) => prevDefis.filter((defi) => defi.id !== id));
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center my-8'>
      <h1 className="text-2xl my-5">Mes Défis</h1>

      {/* Calendrier */}
      <Calendar />

      {/* Affichage des défis récupérés */}
      <div className='flex flex-col gap-3'>
        {defis.map((defi) => (
          <DefiCard key={defi.id} defi={defi} onDelete={deleteDefi} />
        ))}
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
  );
}
