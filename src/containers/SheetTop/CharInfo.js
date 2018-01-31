import React from 'react';
import CharInfoInput from './CharInfoInput';

const CharInfo = props => {
  return (
    <div className={`${props.className} char-info`}>
      <div className="row">
        <div className="col-xs-5">
          <CharInfoInput label="Character Name" id="char-name-input" />
        </div>

        <div className="col-xs-2">
          <CharInfoInput label="Alignment" id="alignment-input" />
        </div>

        <div className="col-xs-5">
          <CharInfoInput label="Player" id="player-name-input" />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-7">
          <CharInfoInput label="Character Level" id="char-level-input" />
        </div>
        <div className="col-xs-3">
          <CharInfoInput label="Deity" id="deity-input" />
        </div>
        <div className="col-xs-2">
          <CharInfoInput label="Homeland" id="homeland-input" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-3">
          {' '}
          <CharInfoInput label="Race" id="race-input" />
        </div>
        <div className="col-xs">
          <CharInfoInput label="Size" id="size-input" />
        </div>
        <div className="col-xs">
          <CharInfoInput label="Gender" id="gender-input" />
        </div>
        <div className="col-xs">
          <CharInfoInput label="Age" id="age-input" />
        </div>
        <div className="col-xs">
          <CharInfoInput label="Height" id="height-input" />
        </div>
        <div className="col-xs">
          <CharInfoInput label="Weight" id="weight-input" />
        </div>
        <div className="col-xs">
          <CharInfoInput label="Hair" id="hair-input" />
        </div>
        <div className="col-xs">
          <CharInfoInput label="Eyes" id="eyes-input" />
        </div>
      </div>
    </div>
  );
};

export default CharInfo;
