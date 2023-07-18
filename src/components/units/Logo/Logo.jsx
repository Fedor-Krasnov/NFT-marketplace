import React from 'react';
import { Link } from 'react-router-dom';
import { mainPageCheck } from '../../../helpers';
import { Icon, IconCode } from '../Icon';
import './Logo.scss';

const Logo = () => {
  const isMainPage = mainPageCheck();

  const logo = (
    <>
      <Icon className="logo__icon" code={IconCode.logo} />
      <span>NFT Marketplace</span>
    </>
  );

  return isMainPage ? (
    <div className="logo">{logo}</div>
  ) : (
    <Link className="logo" to="/">
      {logo}
    </Link>
  );
};

export { Logo };
