import React, { useState } from 'react';
import { MdDashboard, MdPayment, MdTrackChanges } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState('dashboard'); // Default active state

  const handleClick = (name) => {
    setActive(name); // Set active state based on clicked link
  }

  return (
    <div className="w-96 h-screen bg-[#fbfcf7] pt-20">
      <ul className="pl-4">
        <li className="mb-2">
          <NavLink
            to="/dashboard"
            onClick={() => handleClick('dashboard')}
            className={`flex items-center gap-2 rounded w-full h-16 px-4 ${active === 'dashboard' ? 'bg-[#d7e6c5] text-[#61646b]' : 'bg-[#fbfcf7] text-[#5f605e]'}`}
          >
            <MdDashboard className="text-3xl" />
            Tableau de bord
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/paiement"
            onClick={() => handleClick('paiement')}
            className={`flex items-center gap-2 rounded w-full h-16 px-4 ${active === 'paiement' ? 'bg-[#d7e6c5] text-[#61646b]' : 'bg-[#fbfcf7] text-[#5f605e]'}`}
          >
            <MdPayment className="text-3xl" />
            Payer ma cotisation
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/suivi"
            onClick={() => handleClick('suivipaiement')}
            className={`flex items-center gap-2 rounded w-full h-16 px-4 ${active === 'suivipaiement' ? 'bg-[#d7e6c5] text-[#61646b]' : 'bg-[#fbfcf7] text-[#5f605e]'}`}
          >
            <MdTrackChanges className="text-3xl" />
            Suivi de paiement
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
