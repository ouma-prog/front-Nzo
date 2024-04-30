import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Newpassword.css';
import axios from 'axios';

const NewPassword = () => {
  // État local pour stocker les mots de passe saisis par l'utilisateur
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Utiliser useParams pour récupérer le resetToken de l'URL
  const { resetToken } = useParams();

  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    try {
        const response = await axios.post(`http://localhost:3003/api/resetpassword/${resetToken}`, {
            newPassword: password
        });
        console.log(response.data);
        alert('Votre mot de passe a été réinitialisé avec succès.');
        // Vous pouvez rediriger l'utilisateur vers la page de connexion ici
    } catch (error) {
        console.error('Erreur lors de la réinitialisation du mot de passe:', error);
        alert('Erreur lors de la réinitialisation du mot de passe.');
    }
};


  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <div className="title">Choisissez votre mot de passe</div>
        <input
          className="inputField"
          type="password"
          placeholder="Nouveau mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="title">Confirmez votre mot de passe</div>
        <input
          className="inputField"
          type="password"
          placeholder="Confirmez votre mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="button" type="submit">Confirmer</button>
      </form>
    </div>
  );
};

export default NewPassword;
