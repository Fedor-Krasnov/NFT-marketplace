import React, { useState } from 'react';
import { ModalMenuContext } from '../../contexts';
import { pageCheck } from '../../helpers';
import { headerData } from '../../mocks/components';
import { Menu } from '../Menu';
import { Button } from '../units/Button';
import { IconCode } from '../units/Icon';
import { Logo } from '../units/Logo';
import { Burger } from './Burger';
import headerStyles from './Header.module.scss';

const headerClassName = 'header';

const Header = () => {
  const { isAuthorizationPage } = pageCheck();
  const { title, to } = headerData;
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  return (
    <ModalMenuContext.Provider value={{ isModalMenuOpen, setIsModalMenuOpen }}>
      <header className={headerStyles[headerClassName]}>
        <Logo />
        <div className={headerStyles[`${headerClassName}__navbar`]}>
          <Menu />
          {!isAuthorizationPage && <Button icon={IconCode.user} title={title} to={to} />}
        </div>
        <Burger />
      </header>
    </ModalMenuContext.Provider>
  );
};

export { Header };
