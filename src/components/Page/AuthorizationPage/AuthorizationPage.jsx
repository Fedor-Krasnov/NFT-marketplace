import React from 'react';
import './AuthorizationPage.scss';
import { authorizationPageData } from '../../../mocks/Page';
import { Button, Title } from '../../units';
import { Input } from '../../units/Input';

const authorizationPageClassName = 'create-account-main';

const AuthorizationPage = () => {
  const { description, title, entryField, titleButton } = authorizationPageData;

  return (
    <div className={authorizationPageClassName}>
      <div className={`${authorizationPageClassName}__img-container`}>
        <div className={`${authorizationPageClassName}__img`}></div>
      </div>
      <div className={`${authorizationPageClassName}__registration`}>
        <div className={`${authorizationPageClassName}__title`}>
          <Title description={description} heading="h1" title={title} />
        </div>
        <div className={`${authorizationPageClassName}__entry-field`}>
          {entryField.map((data) => (
            <Input key={data.id} data={data} />
          ))}
          <Button title={titleButton} width="fill" />
        </div>
      </div>
    </div>
  );
};

export { AuthorizationPage };
