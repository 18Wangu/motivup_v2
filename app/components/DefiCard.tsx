import React, { useState, useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { ProgressBar } from './ProgressBar';
import DeleteConfirmationPopup from './DeleteConfirmationPopup';
import { useLevel } from './useLevel';

type Defi = {
  id: number;
  name: string;
  emoji: string;
  frequency: number;
  xp: number;
};

type DefiCardProps = {
  defi: Defi;
  onDelete: (id: number) => void;
};

const updateXpInDb = async (id: number, newXp: number) => {
  try {
    await fetch('/api/defis', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, xp: newXp }),
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'XP:', error);
  }
};

export const DefiCard: React.FC<DefiCardProps> = ({ defi, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [xp, setXp] = useState(defi.xp);
  const [checkCount, setCheckCount] = useState(0);
  const [flamme, setFlamme] = useState(0);
  const [coeur, setCoeur] = useState(3);
  const [coffre, setCoffre] = useState(0);
  const [completedThisWeek, setCompletedThisWeek] = useState(false);

  const { currentLevel, xpForNextLevel, progress } = useLevel(xp);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (newChecked) {
      setCheckCount((prev) => prev + 1);
      setXp((prevXp) => Math.max(0, prevXp + 25));
    } else {
      setCheckCount((prev) => (prev > 0 ? prev - 1 : 0));
      setXp((prevXp) => Math.max(0, prevXp - 25));
    }
  };

  // Mise à jour de l'XP dans la base de données
  useEffect(() => {
    updateXpInDb(defi.id, xp);
  }, [xp]);

  // Décocher automatiquement les cases après 2 secondes (une journée simulée)
  useEffect(() => {
    if (isChecked) {
      const timer = setTimeout(() => setIsChecked(false), 2000); // 2 secondes pour le test
      return () => clearTimeout(timer);
    }
  }, [isChecked]);

  useEffect(() => {
    const weekTimer = setInterval(() => {
      let anyDefiCompleted = false;
  
      // Réinitialisation des défis et gestion des coffres
      if (checkCount >= defi.frequency) {
        setCoffre((prev) => prev + 1); // Gain de coffre
        anyDefiCompleted = true; // Au moins un défi complété
      }
      setCheckCount(0); // Réinitialisation des actions pour le défi
  
      // Gestion globale des flammes et cœurs
      if (anyDefiCompleted) {
        setFlamme((prev) => prev + 1); // Ajout d'une flamme
      } else if (coeur > 0) {
        setCoeur((prev) => prev - 1); // Perte d'un cœur si aucun défi n'a été complété
      } else {
        setFlamme(0); // Si les cœurs sont épuisés, les flammes sont réinitialisées
      }
    }, 14000); // Une semaine simulée en 14 secondes
  
    return () => clearInterval(weekTimer);
  }, [checkCount, defi.frequency, coeur]);
  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleDelete = () => {
    onDelete(defi.id);
    closeModal();
  };

  return (
    <div>
      <div className="flex items-center gap-3 p-3 border-2 rounded-xl border-[#313f47] relative cursor-pointer">
        <div onClick={openModal} className="text-6xl">{defi.emoji}</div>
        <div className="flex flex-col">
          <h1 className="text-base text-[#313f47]">Niveau {currentLevel}</h1>
          <h2>{defi.name}</h2>
          <span className="text-xs text-[#ffd900] mb-3">{defi.frequency} fois/semaine</span>
          <ProgressBar progress={progress} xp={xp} xpForNextLevel={xpForNextLevel} />
        </div>
        <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} id={`checkbox-${defi.id}`} />
      </div>

      <div className="mt-4 text-sm text-[#313f47]">
        <p>Flamme : {flamme}</p>
        <p>Cœur : {coeur}</p>
        <p>Coffre : {coffre}</p>
      </div>

      <DeleteConfirmationPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
};
