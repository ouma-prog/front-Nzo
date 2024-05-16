import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic pour réinitialiser le mot de passe
    console.log('Email pour réinitialisation du mot de passe:', email);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-white shadow-md rounded-lg w-2/3">
      <h1 className="text-3xl font-bold mb-6">Réinitialisation du mot de passe</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Changer mon mot de passe</button>
      </form>
      <button className="mt-4 text-green-500 hover:text-green-700" onClick={() => window.location.href = '/login'}>
        Revenir à la page de connexion
      </button>
    </div>
  );
};

export default ResetPassword;
