import React from 'react';
import './AuthorizationPage.scss';
import { authorizationPageData } from '../../../mocks/Page/index.js';
import { Button, Title } from '../../units/index.js';
import { RegistrationPage } from './RegistrationPage/index.js';

const AuthorizationPage = () => {
  const { description, title, entryField, titleButton } = authorizationPageData;

  return (
    <div className="create-account-main">
      <div className="create-account-main__img-container">
        <div className="create-account-main__img"></div>
      </div>
      <div className="create-account-main__registration">
        <div className="create-account-main__title">
          <Title description={description} title={title} />
        </div>
        <div className="create-account-main__entry-field">
          {entryField.map((data) => (
            <RegistrationPage key={data.id} data={data} />
          ))}
          <Button title={titleButton} width="fill" />
        </div>
      </div>
    </div>
  );
};

export { AuthorizationPage };
