import React from 'react';
import './Tableaudebord.css';
import { FaTachometerAlt, FaMoneyBillWave, FaList } from 'react-icons/fa';

function Tableaudebord() {
  return (
    <aside className="dashboard">
      <div className="dashboard-btn" id="dashboard">
        <FaTachometerAlt className="icon" />
        <button>Tableau de bord</button>
      </div>
      <div className="dashboard-btn" id="pay">
        <FaMoneyBillWave className="icon" />
        <button>Payer ma cotisation</button>
      </div>
      <div className="dashboard-btn" id="tracking">
        <FaList className="icon" />
        <button>Suivi de paiement</button>
      </div>
    </aside>
  );
}

export default Tableaudebord;
