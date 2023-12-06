import React from 'react';
import './RegistrationPage.scss';

const RegistrationPage = ({ data }) => {
  const { image, input } = data;

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

export { RegistrationPage };
