import React from 'react';
import { Menu } from '../../Menu';
import { Button, IconCode } from '../../units';
import './ModalHeaderMenu.scss';

const ModalHeaderMenu = () => (
  <div className="modal-header-menu">
    <Menu isModal />
    <Button
      className="modal-header-menu__button"
      icon={IconCode.user}
      title="Sign Up"
      to="/authorization"
      width="fill"
    />
  </div>
);

export { ModalHeaderMenu };
