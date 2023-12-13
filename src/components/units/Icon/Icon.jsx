import React from 'react';
import classNames from 'classnames';
import iconsSvgPath from '../../../assets/media/icons/icons.svg';
import './Icon.scss';

export const IconCode = {
  close: 'close',
  discord: 'discord',
  instagram: 'instagram',
  logo: 'logo',
  rocket: 'rocket',
  user: 'user',
  youtube: 'youtube',
  eye: 'eye',
  copy: 'copy',
  plus: 'plus',
};

const iconCodeToSize = {
  [IconCode.close]: [20, 20],
  [IconCode.discord]: [32, 32],
  [IconCode.instagram]: [32, 32],
  [IconCode.logo]: [32, 32],
  [IconCode.rocket]: [32, 32],
  [IconCode.user]: [20, 20],
  [IconCode.youtube]: [32, 32],
  [IconCode.eye]: [25, 20],
  [IconCode.copy]: [32, 32],
  [IconCode.plus]: [20, 20],
};

const iconClassName = 'icon';

const Icon = ({ className, code }) => {
  const [width, height] = iconCodeToSize[code];

  return (
    <svg
      className={classNames(iconClassName, `${iconClassName}_${code}`, className)}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <use href={`${iconsSvgPath}#${code}`} />
    </svg>
  );
};

export { Icon };
