import React from 'react';
import './Body.css';

function Body() {
  return (
    <main className="main-body">
      <div className="dashboard-stats">
        <div className="stat-item">
          <h2>Dernière cotisation</h2>
          <p>20 €</p>
        </div>
        <div className="stat-item">
          <h2>Cumul cotisation annuel</h2>
          <p>80 €</p>
        </div>
        <div className="stat-item">
          <h2>Montant cotisation annuelle</h2>
          <p>120 €</p>
        </div>
      </div>
      <section className="transactions-section">
        <h2>Mes dernières transactions</h2>
        <div className="search-bar">
          <input type="search" placeholder="Search transactions and actions" />
        </div>
        <div className="transactions-list">
          {/* Ici vous afficherez la liste des transactions, probablement en mappant sur un tableau de données */}
        </div>
      </section>
    </main>
  );
}

export default Body;
