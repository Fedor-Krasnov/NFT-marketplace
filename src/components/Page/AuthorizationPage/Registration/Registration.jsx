import React from 'react';
import './Registration.scss';
import { Button } from '../../../units/index.js';

const Registration = ({ data }) => {
  const { image, input, titleButton } = data;

  return (
    <div className="registration">
      <div className="registration__container">
        <label className="registration__data-filling">
          <img alt={image.alt} className="data-filling__img" src={image.src} />
          <input className="data-filling" placeholder={input.placeholder} />
        </label>
      </div>
    </div>
  );
};

export { Registration };
