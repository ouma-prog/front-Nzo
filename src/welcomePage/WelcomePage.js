import React from 'react';
import './WelcomePage.css';

function WelcomePage() {
  // Fonction qui sera appelée lorsque l'utilisateur clique sur le bouton
  function handleClick() {
    alert('Bienvenue sur notre plateforme !');
  }

  return (
    <div className="welcome-container">
      <h1 className="main-title">Bienvenue sur votre plateforme de gestion immobilière</h1>
      <p>Bienvenue sur notre plateforme de gestion immobilière conçue pour simplifier la gestion de votre propriété. Notre plateforme vise à offrir aux propriétaires un outil pratique et efficace pour gérer les aspects financiers de leur bien immobilier.</p>
      
      <h2 className="subtitle">Gestion des cotisations des co-propriétaires</h2>
      <p>Notre plateforme permet aux co-propriétaires de payer facilement leurs cotisations en ligne, offrant ainsi une solution pratique et sécurisée pour les transactions financières liées à la copropriété.</p>
      
      <h2 className="subtitle">Centralisation des paiements et des informations</h2>
      <p>Nous centralisons tous les paiements et informations concernant les recettes, offrant ainsi une vue d'ensemble claire et organisée de la situation financière de la propriété. Cela facilite la gestion et la supervision des finances de la copropriété.</p>
      
      <h2 className="subtitle">Compte rendu des recettes</h2>
      <p>La plateforme offre la possibilité de générer des comptes rendus détaillés des recettes, permettant une transparence totale en matière de finances. De plus, ces comptes rendus peuvent être soumis à validation par le trésorier et les trésoriers adjoints, assurant ainsi une gestion financière rigoureuse et conforme aux normes établies.</p>
      
      <p>Nous sommes convaincus que notre plateforme de gestion immobilière simplifiera grandement la gestion financière de votre propriété, offrant transparence, efficacité et sécurité à tous les propriétaires impliqués. N'hésitez pas à explorer notre plateforme et à découvrir toutes les fonctionnalités conçues pour faciliter la gestion immobilière au quotidien.</p>
      
      <button className="continue-button" onClick={handleClick}>Continuer</button>
    </div>
  );
}

export default WelcomePage;
