import React from 'react';
import Header from '../Composants/Header'; 
import Sidebar from '../Composants/Sidebar';
import ValidationPage from '../Composants/Validationpage';
const paiement= () => {
 

  return (
    <div>
      <Header/> 
      <div className="flex">
        <Sidebar />
        <ValidationPage /> 
      </div>
    </div>
  );
}

export default paiement;
