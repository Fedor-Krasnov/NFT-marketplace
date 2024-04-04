import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { pageCheck } from '../../../helpers';
import { Icon, IconCode } from '../Icon';
import logoStyles from './Logo.module.scss';

const logoClassName = 'logo';

const Logo = ({ className, withoutText }) => {
  const { isMainPage } = pageCheck();
  const logoClassNames = classNames(logoStyles[logoClassName], className);

  const logo = (
    <>
      <Icon className={logoStyles[`${logoClassName}__icon`]} code={IconCode.logo} />
      {!withoutText && <span>NFT Marketplace</span>}
    </>
  );

  return isMainPage ? (
    <div className={logoClassNames}>{logo}</div>
  ) : (
    <Link className={logoClassNames} to="/">
      {logo}
    </Link>
  );
};

export { Logo };
