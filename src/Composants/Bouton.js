import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '720px',
    left: '891px',
    width: '200px',
    height: '51px',
    padding: '0px 8px',
    border: '1px solid #1b1b1b',
    boxSizing: 'border-box',
    borderRadius: '100000px',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.12)',
    backgroundColor: '#a8be90',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    lineHeight: '16px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Se connecter',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;