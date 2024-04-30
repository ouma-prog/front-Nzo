import React from 'react';
import { useLocation } from 'react-router-dom';
import './Suivi.css';

function Suivi() {
  const location = useLocation();
  const { state } = location;

  // Si aucun état n'est passé, redirigez ou affichez une erreur ici.
  if (!state) {
    // Gérer l'absence de données.
    return <div>Données de paiement non disponibles.</div>;
  }

  const {
    montant_sans_frais,
    montant_avec_frais,
    frais,
    opérateur,
    nom_destinataire,
    destinataire,
   
  } = state;
  

  return (
    <div className="suivi-container">
      <h2>Suivi du dernier paiement</h2>
      <div className="suivi-steps">
        <div className="step active">En attente</div>
        <div className="step">Document validé</div>
        <div className="step">À Destination</div>
        <div className="step">Encaissé</div>
      </div>
      <div className="payment-info">
        <div className="info">
          <span>Montant Brut :</span>
          <span>{montant_sans_frais} $</span>
        </div>
        <div className="info">
          <span>Montant Net :</span>
          <span>{montant_avec_frais} $</span>
        </div>
        <div className="info">
          <span>Frais de transactions :</span>
          <span>{frais} $</span>
        </div>
        <div className="info">
          <span>Opérateur :</span>
          <span>{opérateur}</span>
        </div>
      </div>
      <div className="confirmation-message">
        <p>Bonjour {nom_destinataire},</p>
        <p>nous avons bien reçu votre déclaration de paiement.</p>
        <p> {destinataire} prendra en charge votre demande dans un délai de 48 heures.</p>
      </div>
    </div>
  );
}

export default Suivi;
