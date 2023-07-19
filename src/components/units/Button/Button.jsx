import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
import classNames from 'classnames';
import { Icon } from '../Icon';

const Button = ({ icon, outline, secondary, title, to }) => {
  const className = classNames(
    'button',
    { ['button_icon']: icon },
    { ['button_outline']: outline },
    { ['button_secondary']: secondary },
  );

  const buttonTitle = (
    <>
      {icon && <Icon code={icon} />}
      {title}
    </>
  );

  return to ? (
    <Link to={to} className={className}>
      {buttonTitle}
    </Link>
  ) : (
    <button className={className}>{buttonTitle}</button>
  );
};

export { Button };
