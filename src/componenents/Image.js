import React from 'react';

const Image = props => {
  return (
    <div className={props.className}>
      <img width="100%" height="auto" src={props.src} alt={props.alt} />
    </div>
  );
};

export default Image;
