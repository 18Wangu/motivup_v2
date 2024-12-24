import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Types
type Defi = {
  id: number;
  name: string;
  emoji: string;
  frequency: number;
  xp: number; // Ajout de l'XP dans le type
};

type DefiCardProps = {
  defi: Defi;
  onDelete: (id: number) => void;
};

type LevelInfo = {
  currentLevel: number;
  xpForNextLevel: number;
  progress: number; // Valeur entre 0 et 1
};

// Calcul du niveau en fonction de l'XP
const calculateLevel = (xp: number): LevelInfo => {
  const levels = [150, 400, 700, 1050];
  let currentLevel = 1;
  let xpForNextLevel = levels[0];
  for (let i = 0; i < levels.length; i++) {
    if (xp < levels[i]) {
      xpForNextLevel = levels[i];
      break;
    }
    currentLevel = i + 1;
  }
  const previousLevelXp = currentLevel === 1 ? 0 : levels[currentLevel - 2];
  const progress = (xp - previousLevelXp) / (xpForNextLevel - previousLevelXp);

  return { currentLevel, xpForNextLevel, progress };
};

// Fonction pour mettre à jour l'XP dans la base de données
const updateXpInDb = async (id: number, newXp: number) => {
  try {
    await fetch('/api/defis', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, xp: newXp }),
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'XP:", error);
  }
};

// Composant principal
export const DefiCard: React.FC<DefiCardProps> = ({ defi, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [xp, setXp] = useState(defi.xp);

  const { currentLevel, xpForNextLevel, progress } = calculateLevel(xp);

  // Gestion de la case à cocher
  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    const xpChange = newChecked ? 25 : -25;
    setXp((prevXp) => Math.max(0, prevXp + xpChange)); // Évite les valeurs négatives
  };

  // Synchroniser l'XP avec la base de données
  useEffect(() => {
    updateXpInDb(defi.id, xp);
  }, [xp]);

  // Décoche la case après 10 secondes
  useEffect(() => {
    if (isChecked) {
      const timer = setTimeout(() => setIsChecked(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [isChecked]);

  // Ouvrir la popup (uniquement sur la carte de défi)
  const openModal = (event: React.MouseEvent) => {
    setIsModalOpen(true);
  };

  // Fermer la popup
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Supprimer le défi
  const handleDelete = () => {
    onDelete(defi.id);
    closeModal();
  };

  return (
    <div>
      <div className="flex items-center gap-3 p-3 border-2 rounded-xl border-[#313f47] relative cursor-pointer">
        {/* Émoji et popup d'ouverture */}
        <div onClick={openModal} className="text-6xl">
          {defi.emoji}
        </div>

        {/* Contenu de la carte */}
        <div className="flex flex-col">
          <h1 className="text-base text-[#313f47]">Niveau {currentLevel}</h1>
          <h2 className="mb-3">{defi.name}</h2>
          <div className="bg-[#313f47] rounded-xl w-52 h-3 z-0 flex items-center justify-between">
            <div
              className="bg-[#ffd900] rounded-xl h-3 z-10"
              style={{ width: `${progress * 100}%` }}
            ></div>
            <div className="flex items-center">
              <h1 className="text-[#ffd900] mr-1 text-xs">
                {xp} / {xpForNextLevel}
              </h1>
              <Image
                src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                alt="Xp"
                width={15}
                height={15}
                className="mr-1"
              />
            </div>
          </div>
        </div>

        {/* Case à cocher en haut à droite */}
        <div className="absolute top-2 right-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id={`checkbox-${defi.id}`}
            className="hidden"
          />
          <label
            htmlFor={`checkbox-${defi.id}`}
            className="w-6 h-6 border-2 border-[#313f47] bg-[#131f24] rounded-lg flex items-center justify-center cursor-pointer"
          >
            {isChecked && <div className="text-xl text-[#58cc02]">🗸</div>}
          </label>
        </div>
      </div>

      {/* Popup de confirmation de suppression */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#313f47] p-6 rounded-lg w-80">
            <h2 className="text-lg mb-4">Voulez-vous vraiment supprimer ce défi ?</h2>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
