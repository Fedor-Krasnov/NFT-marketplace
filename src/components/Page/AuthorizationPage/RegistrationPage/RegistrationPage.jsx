import React from 'react';

const registrationPageClassName = 'registration';

const RegistrationPage = ({ data }) => {
  const { image, input } = data;

  return (
    <div className={registrationPageClassName}>
      <div className={`${registrationPageClassName}__container`}>
        <label className={`${registrationPageClassName}__data-filling`}>
          <img alt={image.alt} className={`${registrationPageClassName}__img`} src={image.src} />
          <input className={`${registrationPageClassName}__data-filling-input`} placeholder={input.placeholder} />
        </label>
      </div>
    </div>
  );
};

export { RegistrationPage };
