import React from 'react';
import { Menu } from '../../Menu';
import { Button, IconCode } from '../../units';
import './ModalHeaderMenu.scss';

const modalHeaderMenuClassName = 'modal-header-menu';

const ModalHeaderMenu = () => (
  <div className={modalHeaderMenuClassName}>
    <Menu isModal />
    <Button
      className={`${modalHeaderMenuClassName}__button`}
      icon={IconCode.user}
      title="Sign Up"
      to="/authorization"
      width="fill"
    />
  </div>
);

export { ModalHeaderMenu };
