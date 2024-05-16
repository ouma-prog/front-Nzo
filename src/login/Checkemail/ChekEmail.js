// CheckEmail.js
import React from 'react';
import { Link } from 'react-router-dom';

const CheckEmail = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-[#d7e6c5] flex items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-center">
          LA GESTION<br />IMMOBILIÈRE<br />FACILE
        </h1>
      </div>
      <div className="w-2/3 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold">Consultez votre messagerie</h2>
          <p className="text-gray-600">
            Merci ! Si votre adresse figure dans nos dossiers, vous recevez un e-mail contenant des instructions pour réinitialiser votre mot de passe.
          </p>
          <p className="text-gray-600">
            Si vous n'avez pas reçu d'e-mail d'ici 5 minutes, vérifiez votre dossier de courriers indésirables, demandez un nouvel envoi ou réessayez avec une nouvelle adresse mail.
          </p>
          <div className="text-center">
            <Link to="/forgotpassword" className="font-medium text-green-600 hover:text-green-500">Réessayer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckEmail;
