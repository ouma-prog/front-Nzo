import React from 'react';

// Utilisez les mêmes styles de base définis pour InputField
const baseStyles = {
  border: '0',
  boxSizing: 'border-box',
  borderRadius: '100000px',
  boxShadow: '0px 2px 8px rgba(0,0,0,0.12)',
  backgroundColor: '#ffffff',
  color: '#000000',
  fontSize: '14px',
  fontFamily: 'Red Hat Display',
  fontWeight: 500,
  lineHeight: '18px',
  outline: 'none',
  padding: '0px 16px',
  width: '100%', // Assurez-vous que cela ne dépasse pas le conteneur parent
  height: '52px', // Une hauteur fixe pour tous les champs de saisie
};

const Inputpassword = ({ placeholder, onChange, value, name }) => {
  // Appliquez les mêmes styles avec une petite modification pour le padding si nécessaire
  const inputStyles = {
    ...baseStyles,
    // Ajoutez ou modifiez les styles spécifiques au champ de mot de passe si nécessaire
  };

  return (
    <input
      type="password" // Définir le type sur "password" pour cacher le texte entré
      name={name}
      id={name} // l'id est généralement le même que le name
      style={inputStyles}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete="current-password" // Bonne pratique pour les champs de mot de passe
    />
  );
};

// Définissez les props par défaut pour votre composant de mot de passe
Inputpassword.defaultProps = {
  placeholder: 'Mot de passe*',
};

export default Inputpassword;
