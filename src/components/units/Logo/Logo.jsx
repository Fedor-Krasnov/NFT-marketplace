import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { pageCheck } from '../../../helpers';
import { Icon, IconCode } from '../Icon';
import logoStyles from './Logo.module.scss';

const logoClassName = 'logo';

const Logo = ({ className, setIsModalMenuOpen, withoutText }) => {
  const { isMainPage } = pageCheck();
  const logoClassNames = classNames(logoStyles[logoClassName], className);

  const closeModalMenu = () => {
    if (setIsModalMenuOpen) {
      setIsModalMenuOpen(false);
    }
  };

  const logo = (
    <>
      <Icon className={logoStyles[`${logoClassName}__icon`]} code={IconCode.logo} />
      {!withoutText && <span>Nexus</span>}
    </>
  );

  return isMainPage ? (
    <div className={logoClassNames}>{logo}</div>
  ) : (
    <Link className={logoClassNames} onClick={closeModalMenu} to="/">
      {logo}
    </Link>
  );
};

export { Logo };
