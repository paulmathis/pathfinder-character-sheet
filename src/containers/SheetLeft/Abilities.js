import React from 'react';
import AbilityRow from './AbilityRow';

const Abilities = () => {
  return (
    <div>
      Ability Name
      <AbilityRow name="Strength" />
      <AbilityRow name="Dexterity" />
      <AbilityRow name="Consitution" />
      <AbilityRow name="Intelect" />
      <AbilityRow name="Wisdom" />
      <AbilityRow name="Charisma" />
    </div>
  );
};

export default Abilities;
