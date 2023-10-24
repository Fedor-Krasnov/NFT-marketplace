import React from 'react';
import './AuthorizationPage.scss';
import { authorizationPage } from '../../../mocks/Page/index.js';

const AuthorizationPage = () => {
  const { description, entryField, title, image, input } = authorizationPage;

  return (
    <>
      <div className="create-account-main">
        <div>
          <div className="create-account-main__img"></div>
        </div>
        <div className="create-account-main__registration">
          <h2>Create account</h2>
          <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
          <div className="registration">
            <div className="registration__container">
              <label className="registration__data-filling">
                <img alt={image.alt} className="data-filling__img" src={image.src} />
                <input className="data-filling" placeholder={input.placeholder} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AuthorizationPage };
