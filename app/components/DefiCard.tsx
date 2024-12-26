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
    console.error("Erreur lors de la mise à jour de l'XP:", error);
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

  const { currentLevel, xpForNextLevel, progress } = useLevel(xp);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    setCheckCount((prev) => (newChecked ? prev + 1 : prev));
    const xpChange = newChecked ? 25 : -25;
    setXp((prevXp) => Math.max(0, prevXp + xpChange));
  };

  useEffect(() => {
    updateXpInDb(defi.id, xp);
  }, [xp]);

  useEffect(() => {
    if (isChecked) {
      const timer = setTimeout(() => setIsChecked(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isChecked]);

  useEffect(() => {
    const weekTimer = setTimeout(() => {
      if (checkCount >= defi.frequency) {
        setCoffre((prev) => prev + 1);
        setFlamme((prev) => Math.max(1, prev + 1));
      } else {
        setCoeur((prev) => {
          if (prev > 0) return prev - 1;
          setFlamme(0);
          return 0;
        });
      }
      setCheckCount(0);
    }, 14000);

    return () => clearTimeout(weekTimer);
  }, [checkCount, defi.frequency, coffre, flamme, coeur]);

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
          <span className='text-xs text-[#ffd900] mb-3'>{defi.frequency} fois/semaine</span>
          <ProgressBar progress={progress} xp={xp} xpForNextLevel={xpForNextLevel} />
        </div>
        <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} id={`checkbox-${defi.id}`} />
      </div>

      <DeleteConfirmationPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
};
