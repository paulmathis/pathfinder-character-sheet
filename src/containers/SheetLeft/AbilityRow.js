import React from 'react';
import InputBox from '../../componenents/InputBox';
import LabelBox from '../../componenents/LabelBox';

const AbilityRow = props => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', marginBottom: '5px' }}>
      <LabelBox>
        <h2>{props.name.slice(0, 3).toUpperCase()}</h2>
        <h6>{props.name}</h6>
      </LabelBox>
      <InputBox />
      <InputBox />
      <InputBox />
      <InputBox />
    </div>
  );
};

export default AbilityRow;
