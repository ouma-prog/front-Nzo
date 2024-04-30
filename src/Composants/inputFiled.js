import React from 'react';

const styles = {
  Input: {
    top: '289px',
    left: '905px',
    width: '217px',
    height: '52px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '100px',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.12)',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '14px',
    fontFamily: 'Red Hat Display',
    fontWeight: 500,
    lineHeight: '18px',
    outline: 'none',
  },
};

const InputEmail = (props) => {
  const { placeholder } = props; // Utilisez la prop placeholder
  return (
    <input style={styles.Input} placeholder={placeholder} /> // Utilisez la prop placeholder
  );
};

export default InputEmail;
