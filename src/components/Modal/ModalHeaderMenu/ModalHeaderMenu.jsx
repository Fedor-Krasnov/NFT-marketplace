import React from 'react';
import { HeaderMenu } from '../../Header/HeaderMenu';
import { Button, IconCode } from '../../units';
import './ModalHeaderMenu.scss';

const ModalHeaderMenu = () => (
  <div className="modal-header-menu">
    <HeaderMenu isModal />
    <Button
      className="modal-header-menu__button"
      icon={IconCode.user}
      title="Sign Up"
      to="/pages/create-account.html"
      width="fill"
    />
  </div>
);

export { ModalHeaderMenu };
