import React from 'react';

const styles = {
  Text: {
    color: '#1b1b1b',
    fontSize: '48px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    lineHeight: '62px',
  },
};

const defaultProps = {
  text: 'LA GESTION IMMOBILIÈRE FACILE',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;