import React from 'react';
import { Icon } from '../../units';
import inputStyles from './Input.module.scss';

const inputClassName = 'input';

const Input = ({ data }) => {
  const { input, icon } = data;

  return (
    <div className={inputStyles[inputClassName]}>
      <label>
        <Icon code={icon} />
        <input placeholder={input.placeholder} />
      </label>
    </div>
  );
};

export { Input };
