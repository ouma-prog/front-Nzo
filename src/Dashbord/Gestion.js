
import React from 'react';
import Header from './Header'
import Tableaudebord from './Tableaudebord'; 
import Body from './Body'; 
import './Gestion.css'; 

function Gestion() {
  return (
    <div className="gestion-page">
      <Header />
      <div className="content-container">
        <Tableaudebord />
        <Body />
      </div>
    </div>
  );
}

export default Gestion;
