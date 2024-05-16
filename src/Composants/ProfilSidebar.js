import React from 'react';
import { MdPerson, MdHelp, MdSettings } from 'react-icons/md'; // Correctly importing the icons

const ProfilSidebar = ({ activeTab, setActiveTab }) => {
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-91 h-screen bg-[#fbfcf7] pt-20 fixed top-20 left-0"
         style={{ width: '365px', height: '826px' }}> {/* Inline style for exact width and height */}
      <ul>
        <li className={`p-2 cursor-pointer flex items-center justify-start gap-2 ${activeTab === 'profil' ? 'bg-[#e2e3df]' : 'bg-transparent'} rounded-md`}
            onClick={() => handleTabChange('profil')}
            style={{ height: '64px' }}> {/* Inline styles for height */}
          <MdPerson className="text-3xl text-[#5f605e]" />
          Mon profil
        </li>
        <li className={`p-2 cursor-pointer flex items-center justify-start gap-2 ${activeTab === 'aide' ? 'bg-[#e2e3df]' : 'bg-transparent'} rounded-md`}
            onClick={() => handleTabChange('aide')}
            style={{ height: '64px' }}>
          <MdHelp className="text-3xl text-[#5f605e]" />
          Obtenir de l'aide
        </li>
        <li className={`p-2 cursor-pointer flex items-center justify-start gap-2 ${activeTab === 'parametres' ? 'bg-[#e2e3df]' : 'bg-transparent'} rounded-md`}
            onClick={() => handleTabChange('parametres')}
            style={{ height: '64px' }}>
          <MdSettings className="text-3xl text-[#5f605e]" />
          Paramètres
        </li>
      </ul>
    </div>
  );
}

export default ProfilSidebar; // Ensuring the component is exported as default
