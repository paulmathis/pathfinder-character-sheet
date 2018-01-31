import React from 'react';
import CharInfo from './CharInfo';
import Logo from '../../assets/logo.jpg';
import Image from '../../componenents/Image';
import './css/index.css';

const SheetTop = () => {
  return (
    <div className="row">
      <div className="col-xs-40">
        <div className="logo-container">
          <Image src={Logo} alt="Pathfinder Logo" />
          <h1>Character Sheet</h1>
        </div>
      </div>
      <CharInfo className="col-xs-60" />
    </div>
  );
};

export default SheetTop;
