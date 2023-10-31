import React from 'react';
import './AuthorizationPage.scss';
import { authorizationPageData } from '../../../mocks/Page/index.js';
import { Button } from '../../units/index.js';
import { Registration } from './Registration/index.js';

const AuthorizationPage = () => {
  const { description, title, entryField, titleButton } = authorizationPageData;

  return (
    <div className="create-account-main">
      <div>
        <div className="create-account-main__img"></div>
      </div>
      <div className="create-account-main__registration">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="create-account-main__entry-field">
          {entryField.map((data) => (
            <Registration key={data.id} data={data} />
          ))}
          <Button title={titleButton} width="fill" />
        </div>
      </div>
    </div>
  );
};

export { AuthorizationPage };
