import React from 'react';

type DeleteConfirmationPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#313f47] p-6 rounded-lg w-80">
        <h2 className="text-lg mb-4">Voulez-vous vraiment supprimer ce défi ?</h2>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Annuler
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
