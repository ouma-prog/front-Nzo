import React from 'react';

// Définir les styles qui ne changent pas
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
};

const InputEmail = ({ type, placeholder, onChange, value, name }) => {
  // Les styles spécifiques aux instances d'InputField sont appliqués ici
  const inputStyles = {
    ...baseStyles,
    padding: '0px 16px', // légèrement augmenté pour l'esthétique
    width: '100%', // prend la pleine largeur du parent
    height: '52px', // hauteur fixe pour tous les InputField
  };

  return (
    <input
      type={type}
      name={name}
      id={name} // l'id est généralement le même que le name
      style={inputStyles}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      // Vous pouvez ajouter un auto-complétion spécifique pour l'email, si nécessaire
      autoComplete={type === 'email' ? 'email' : undefined}
    />
  );
};

InputEmail.defaultProps = {
  type: 'text', // par défaut à 'text' s'il n'est pas fourni
  placeholder: 'Identifiant ou Email*',
};

export default InputEmail;
