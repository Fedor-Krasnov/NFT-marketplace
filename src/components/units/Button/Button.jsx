import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
import classNames from 'classnames';

const Button = ({ outline, secondary, title, to }) => {
  const className = classNames('button', outline ? 'button_outline' : null, secondary ? 'button_secondary' : null);

  return to ? (
    <Link to={to} className={className}>
      {title}
    </Link>
  ) : (
    <button className={className}>{title}</button>
  );
};

export { Button };
