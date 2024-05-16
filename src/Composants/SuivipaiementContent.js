import React from 'react';
import { useLocation } from 'react-router-dom';
import Stepper from './Stepper'; // Assurez-vous que le chemin est correct

const steps = [
  { label: 'En attente', step: 1 },
  { label: 'Document validé', step: 2 },
  { label: 'En agence', step: 3 },
  { label: 'Encaissé', step: 4 }
];

const SuiviContent = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <div className="text-center text-red-500">Données de paiement non disponibles.</div>;
  }

  const {
    montantTotalSansFrais,
    montantTotalAvecFrais,
    totalDesFrais,
    operateur,
    destinataire,
    nomCompletDeLEnvoyeur,
    currentStep = 1 // assuming 'currentStep' is passed in state indicating the progress
  } = state;

  return (
    <div className="container mx-auto px-4 py-5 space-y-6">
      {/* Payment Progress Stepper */}
      <div className="w-full px-4 py-2 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4">Suivi du dernier paiement</h2>
        <Stepper steps={steps} activeStep={currentStep} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Payment Information Card */}
        <div className="px-4 py-2 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Informations du dernier paiement</h2>
          <p><strong>Montant Brut:</strong> {montantTotalSansFrais} $</p>
          <p><strong>Montant Net:</strong> {montantTotalAvecFrais} $</p>
          <p><strong>Frais de transactions:</strong> {totalDesFrais} $</p>
          <p><strong>Opérateur:</strong> {operateur}</p>
        </div>

        {/* Greeting Card */}
        <div className="px-4 py-2 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Bonjour, {nomCompletDeLEnvoyeur}</h2>
          <p>Nous avons bien reçu votre déclaration de paiement.</p>
          <p>{destinataire} prendra en charge votre demande dans un délai de 48 heures.</p>
        </div>
      </div>
    </div>
  );
}

export default SuiviContent;
