import React from 'react';
import { Button, Title } from '../../units';
import { Input } from '../../units/Input';
import authorizationPageStyles from './AuthorizationPage.module.scss';

const authorizationPageClassName = 'authorization-page';

const AuthorizationPage = ({ content }) => {
  const { description, title, entryField, titleButton } = content;

  return (
    <>
      <div className={authorizationPageStyles[authorizationPageClassName]}>
        <div className={authorizationPageStyles[`${authorizationPageClassName}__img-container`]}>
          <div className={authorizationPageStyles[`${authorizationPageClassName}__img`]} />
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
    </>
  );
};

export { AuthorizationPage };
