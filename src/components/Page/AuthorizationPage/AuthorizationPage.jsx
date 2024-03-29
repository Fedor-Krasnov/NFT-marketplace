import React from 'react';
import { authorizationPageData } from '../../../mocks/Page';
import { Button, Title } from '../../units';
import { Input } from '../../units/Input';
import authorizationPageStyles from './AuthorizationPage.module.scss';

const authorizationPageClassName = 'create-account-main';

const AuthorizationPage = () => {
  const { description, title, entryField, titleButton } = authorizationPageData;

  return (
    <div className={authorizationPageStyles[authorizationPageClassName]}>
      <div className={authorizationPageStyles[`${authorizationPageClassName}__img-container`]}>
        <div className={authorizationPageStyles[`${authorizationPageClassName}__img`]}></div>
      </div>
      <div className={authorizationPageStyles[`${authorizationPageClassName}__registration`]}>
        <div className={authorizationPageStyles[`${authorizationPageClassName}__title`]}>
          <Title description={description} heading="h1" title={title} />
        </div>
        <div className={authorizationPageStyles[`${authorizationPageClassName}__entry-field`]}>
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
