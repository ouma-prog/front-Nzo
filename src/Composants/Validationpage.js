import React from 'react';

const ValidationPage = ({ handleConfirm }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-3xl font-bold mb-5">Demande de Validation</h1>
            <p>Votre demande de paiement a été envoyée avec succès.</p>
            <p>Veuillez confirmer pour continuer.</p>
            <button onClick={handleConfirm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">Confirmer</button>
        </div>
    );
}

export default ValidationPage;
