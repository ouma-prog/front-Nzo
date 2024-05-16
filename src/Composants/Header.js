import React from 'react';
import { FiSettings } from 'react-icons/fi'; // Icône pour les paramètres
import { MdHelp } from 'react-icons/md'; // Icône pour l'aide
import { CgProfile } from 'react-icons/cg'; // Icône pour le profil
import { useNavigate } from 'react-router-dom';

const Header = ({ user }) => { // Recevoir l'utilisateur en tant que propriété
  const navigate = useNavigate(); // Initialisation de useNavigate
  
  const navigateToProfile = () => {
    navigate('/profil', { state: { user } });
  };
  
  return (
    <header className="bg-[#d7e6c5] flex justify-between items-center px-5 py-2 w-full h-20">
      <div className="text-3xl font-bold">
        LA GESTION IMMOBILIÈRE FACILE
      </div>
      <div className="flex items-center space-x-4">
        <CgProfile className="text-xl cursor-pointer" onClick={navigateToProfile} /> {/* Ajout d'un événement onClick pour naviguer vers la page de profil */}
        <FiSettings className="text-xl cursor-pointer" />
        <MdHelp className="text-xl cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
