import React from 'react';
import './Header.css';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Exemple d'icônes FontAwesome

function Header() {
  return (
    <header className="header">
         <div className="header-right">
           <h1>LA GESTION IMMOBILIÈRE FACILE</h1>

            </div>
      
      <div className="header-left">
        <FaUserCircle className="icon" /> {/* Icône de profil */}
        <FaCog className="icon" /> {/* Icône de paramètres */}
        <FaSignOutAlt className="icon" /> {/* Icône de sortie */}
      </div>
      
      
   
    </header>
  );
}

export default Header;
