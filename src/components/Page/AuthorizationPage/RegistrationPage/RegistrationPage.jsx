import React from 'react';
import { Icon } from '../../../units/index.js';
import './RegistrationPage.scss';

const registrationPageClassName = 'registration';

const RegistrationPage = ({ data }) => {
  const { input, icon } = data;

  return (
    <div className={registrationPageClassName}>
      <div className={`${registrationPageClassName}__container`}>
        <label className={`${registrationPageClassName}__data-filling`}>
          <Icon className={`${registrationPageClassName}__img`} code={icon} />
          <input className={`${registrationPageClassName}__data-filling-input`} placeholder={input.placeholder} />
        </label>
      </div>
    </div>
  );
};

export { RegistrationPage };
