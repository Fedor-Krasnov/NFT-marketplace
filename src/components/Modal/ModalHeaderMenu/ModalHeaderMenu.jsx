import React from 'react';
import { Menu } from '../../Menu';
import { Button, IconCode } from '../../units';
import modalHeaderMenuStyles from './ModalHeaderMenu.module.scss';

const modalHeaderMenuClassName = 'modal-header-menu';

const ModalHeaderMenu = ({ setIsModalMenuOpen }) => (
  <div className={modalHeaderMenuStyles[modalHeaderMenuClassName]}>
    <Menu isModal setIsModalMenuOpen={setIsModalMenuOpen} />
    <Button
      className={modalHeaderMenuStyles[`${modalHeaderMenuClassName}__button`]}
      icon={IconCode.user}
      title="Sign Up"
      to="/authorization"
      width="fill"
    />
  </div>
);

export { ModalHeaderMenu };
