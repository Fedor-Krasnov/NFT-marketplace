import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { pageCheck } from '../../../helpers';
import { Icon, IconCode } from '../Icon';
import './Logo.scss';

const Logo = ({ className, withoutText }) => {
  const { isMainPage } = pageCheck();
  const logoClassName = classNames('logo', className);

  const logo = (
    <>
      <Icon className="logo__icon" code={IconCode.logo} />
      {!withoutText && <span>NFT Marketplace</span>}
    </>
  );

  return isMainPage ? (
    <div className={logoClassName}>{logo}</div>
  ) : (
    <Link className={logoClassName} to="/">
      {logo}
    </Link>
  );
};

export { Logo };
