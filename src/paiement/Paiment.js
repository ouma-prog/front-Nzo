import React from 'react';
import Header from '../Composants/Header'; 
import Sidebar from '../Composants/Sidebar';
import PaiementContent from '../Composants/PaiementContent';

const paiement= () => {
 

  return (
    <div>
      <Header/> 
      <div className="flex">
        <Sidebar />
        <PaiementContent /> 
      </div>
    </div>
  );
}

export default paiement;
