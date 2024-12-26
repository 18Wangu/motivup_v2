"use client";

import Navbar from '@/app/components/navbar';
import React, { useState } from 'react';

type Reward = {
  name: string;
  emoji: string;
};

// Liste des récompenses avec leurs probabilités
const rewards: { reward: Reward; probability: number }[] = [
  { reward: { name: 'Booster x2 XP', emoji: '✨' }, probability: 25 },
  { reward: { name: 'Booster x3 XP pour un ami', emoji: '👥' }, probability: 25 },
  { reward: { name: 'Booster x3 XP', emoji: '🌟' }, probability: 15 },
  { reward: { name: '1 cœur pour un ami', emoji: '🤝' }, probability: 15 },
  { reward: { name: 'Gemme', emoji: '🪙' }, probability: 10 },
  { reward: { name: '1 cœur supplémentaire', emoji: '❤️' }, probability: 10 },
];

// Fonction pour sélectionner une récompense aléatoire
const getRandomReward = () => {
  const totalProbability = rewards.reduce((sum, { probability }) => sum + probability, 0);
  const random = Math.random() * totalProbability;

  let cumulative = 0;
  for (const { reward, probability } of rewards) {
    cumulative += probability;
    if (random <= cumulative) {
      return reward;
    }
  }
  return null; // Par sécurité
};

export default function Recompenses() {
  const [reward, setReward] = useState<Reward | null>(null);

  const handleOpenChest = () => {
    const randomReward = getRandomReward();
    setReward(randomReward);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">

      {reward ? (
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Vous avez gagné :</p>
          <div className="text-6xl">{reward.emoji}</div>
          <p className="text-2xl font-semibold mt-2">{reward.name}</p>
          <button
            onClick={() => setReward(null)}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Ouvrir un autre coffre
          </button>
        </div>
      ) : (
        <button
          onClick={handleOpenChest}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-xl text-2xl flex items-center justify-center"
        >
          🎁 Ouvrir un coffre
        </button>
      )}

      <Navbar />
    </div>
  );
}
