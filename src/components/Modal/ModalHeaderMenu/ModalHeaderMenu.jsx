import React from 'react';
import { pageCheck } from '../../../helpers';
import { headerData } from '../../../mocks/components';
import { Menu } from '../../Menu';
import { Button, IconCode } from '../../units';
import modalHeaderMenuStyles from './ModalHeaderMenu.module.scss';

const modalHeaderMenuClassName = 'modal-header-menu';

const ModalHeaderMenu = ({ setIsModalMenuOpen }) => {
  const { isAuthorizationPage } = pageCheck();
  const { title, to } = headerData;

  return (
    <div className={modalHeaderMenuStyles[modalHeaderMenuClassName]}>
      <Menu isModal setIsModalMenuOpen={setIsModalMenuOpen} />
      {!isAuthorizationPage && (
        <Button
          className={modalHeaderMenuStyles[`${modalHeaderMenuClassName}__button`]}
          icon={IconCode.user}
          onClick={() => setIsModalMenuOpen(false)}
          title={title}
          to={to}
          width="fill"
        />
      )}
    </div>
  );
};

export { ModalHeaderMenu };
