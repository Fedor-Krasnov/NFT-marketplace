import React from 'react';
import { Link } from 'react-router-dom';
import buttonStyles from './Button.module.scss';
import classNames from 'classnames';
import { Icon } from '../Icon';

const buttonClassName = 'button';

const Button = ({ className, icon, outline, secondary, title, to, width }) => {
  const buttonClassNames = classNames(
    buttonStyles[buttonClassName],
    { [buttonStyles[`${buttonClassName}_icon`]]: icon },
    { [buttonStyles[`${buttonClassName}_outline`]]: outline },
    { [buttonStyles[`${buttonClassName}_secondary`]]: secondary },
    { [buttonStyles[`${buttonClassName}_width-${width}`]]: width },
    className,
  );

  const buttonTitle = (
    <>
      {icon && <Icon code={icon} />}
      {title}
    </>
  );

  return to ? (
    <Link to={to} className={buttonStyles[buttonClassNames]}>
      {buttonTitle}
    </Link>
  ) : (
    <button className={buttonStyles[buttonClassNames]}>{buttonTitle}</button>
  );
};

export { Button };
