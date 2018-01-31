import React from 'react';
import './css/CharInfoInput.css';

const CharInfoInput = ({ className, id, label }) => {
  return (
    <div className={`${className} char-info-input`}>
      <input id={id} type="text" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CharInfoInput;
