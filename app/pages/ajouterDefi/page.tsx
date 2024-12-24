// pages/ajouterDefi/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Importer useRouter
import Link from 'next/link';
import Image from 'next/image';

export default function AjouterDefi() {
  const [selectedChallenge, setSelectedChallenge] = useState<{ name: string; emoji: string } | null>(null);
  const [selectedFrequency, setSelectedFrequency] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();  // Initialiser le hook useRouter

  const challenges = [
    { name: 'Apprendre l\'anglais', emoji: '🎙️' },
    { name: 'Nager', emoji: '🏊' },
    { name: 'Courir', emoji: '🏃' },
    { name: 'Méditation', emoji: '🧘‍♀️' },
    { name: 'Manger sainement', emoji: '🥗' },
    { name: 'Peinture', emoji: '🎨' },
    { name: 'Coder', emoji: '💻' },
    { name: 'Marcher', emoji: '👣' },
    { name: 'Etudier', emoji: '🎓' },
    { name: 'Levé 5h', emoji: '🕰️' },
  ];

  const frequencies = [1, 2, 3, 4, 5, 6, 7];

  const handleSubmit = async () => {
    if (!selectedChallenge || !selectedFrequency) {
      alert('Veuillez sélectionner un défi et une fréquence.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: selectedChallenge.name,
          emoji: selectedChallenge.emoji,
          frequency: selectedFrequency,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erreur lors de la création du défi.');
      }

      // alert('Défi ajouté avec succès !');
      console.log("Défi selectionné : ", selectedChallenge);
      console.log("Fréquence selectionnée : ", selectedFrequency);

      // Rediriger vers la page des défis après la création réussie
      router.push('/pages/defis');  // Effectuer la redirection

    } catch (error) {
      console.error(error);
      alert('Erreur lors de l\'ajout du défi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-2xl my-5">Ajouter un défi</h1>

      {/* Liste des défis avec scroll horizontal */}
      <div className="flex overflow-x-auto gap-3 scrollbar-hide w-72 px-5">
        {challenges.map((challenge) => (
          <div
            key={challenge.name}
            onClick={() => setSelectedChallenge(challenge)}
            className={`w-44 h-44 rounded-xl flex flex-col justify-center items-center cursor-pointer flex-shrink-0 ${
              selectedChallenge?.name === challenge.name ? 'bg-[#58cc02]' : 'bg-[#313f44]'
            }`}
          >
            <span className="text-6xl mb-2">{challenge.emoji}</span>
            <p className="text-center">{challenge.name}</p>
          </div>
        ))}
      </div>

      {/* Choix de la fréquence */}
      <div className="my-5">
        <h1 className="text-xl mb-3">Combien de fois par semaine ?</h1>
        <div className="flex gap-3 justify-center">
          {frequencies.map((freq) => (
            <div
              key={freq}
              onClick={() => setSelectedFrequency(freq)}
              className={`flex flex-col items-center cursor-pointer ${
                selectedFrequency === freq ? 'text-[#58cc02]' : 'text-[#313f44]'
              }`}
            >
              <div
                className={`border-2 rounded-full w-8 h-8 flex justify-center items-center ${
                  selectedFrequency === freq ? 'bg-[#58cc02] border-[#58cc02]' : 'border-[#313f44]'
                }`}
              ></div>
              <p>{`x ${freq}`}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton de validation */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`mt-5 mb-20 text-white font-bold py-3 px-6 rounded-xl w-52 h-14 ${
          isLoading ? 'bg-gray-400' : 'bg-[#58cc02] hover:bg-[#4baf01]'
        }`}
      >
        {isLoading ? 'Chargement...' : 'VALIDER'}
      </button>

      {/* Lien vers la page précédente */}
      <Link href="/pages/defis">
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/images/48b38c250a652878bc0c779a07f2ca48.svg"
          alt="Fermer la page"
          width={15}
          height={15}
          className="absolute top-5 right-5"
        />
      </Link>
    </div>
  );
}
