import React from 'react';
import Header from '../Composants/Header'; 
import Sidebar from '../Composants/ProfilSidebar';
import ProfilContent from '../Composants/ProfilContent';
import { useLocation } from 'react-router-dom';

const Profil = () => {
    const location = useLocation();
    const { state } = location;
    const user = state && state.user;

    return (
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <ProfilContent user={user} /> {/* Passez l'utilisateur comme une propriété à ProfilContent */}
        </div>
      </div>
    );
}

export default Profil;
