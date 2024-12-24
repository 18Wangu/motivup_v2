// components/DefiCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';

type Defi = {
  id: number;
  name: string;
  emoji: string;
  frequency: number;
};

type DefiCardProps = {
  defi: Defi;
  onDelete: (id: number) => void;
};

export const DefiCard: React.FC<DefiCardProps> = ({ defi, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // État pour la case à cocher

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
    closeModal();  // Ferme la popup après suppression
  };

  // Changer l'état de la case à cocher
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className='flex items-center gap-3 p-3 border-2 rounded-xl border-[#313f47] relative cursor-pointer'>
        <div onClick={openModal} className='text-6xl'>{defi.emoji}</div>
        <div className='flex flex-col'>
        {/* rendre les niveaux changeant en fonction de l'xp */}
          <h1 className='text-base text-[#313f47]'>Niveau 1</h1>
          <h2 className='mb-3'>{defi.name}</h2>
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
        {/* Case à cocher en haut à droite */}
        <div className="absolute top-2 right-2">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                id={`checkbox-${defi.id}`} // Ajoutez un id unique pour chaque checkbox
                className="hidden" // Cache l'input réel
            />
            <label
                htmlFor={`checkbox-${defi.id}`} // Relie le label à l'input
                className="w-6 h-6 border-2 border-[#313f47] bg-[#131f24] rounded-lg flex items-center justify-center cursor-pointer"
            >
                {isChecked && (
                <div className="text-xl text-[#58cc02]">🗸</div> // Indicateur que la case est cochée
                )}
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
