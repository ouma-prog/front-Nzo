import React from 'react';
import Header from '../Composants/Header'; 
import Sidebar from '../Composants/Sidebar';
import SuiviContent from '../Composants/SuivipaiementContent'
const suivi= () => {
 

  return (
    <div>
      <Header/> 
      <div className="flex">
        <Sidebar />
        <SuiviContent/> 
      </div>
    </div>
  );
}

export default suivi;
