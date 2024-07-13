import React from 'react';
import userHeaderStyles from './UserHeader.module.scss';

const userHeaderClassName = 'user-header';

const UserHeader = ({ content }) => {
  const {
    background,
    image: { alt, src },
  } = content;

  console.log(content);

  return (
    <div className={userHeaderStyles[userHeaderClassName]}>
      <div
        className={userHeaderStyles[`${userHeaderClassName}__background`]}
        style={{ '--background': `url(${background.src}) no-repeat center` }}
      />
      <div className={userHeaderStyles[`${userHeaderClassName}__avatar-container`]}>
        <div className={userHeaderStyles[`${userHeaderClassName}__avatar`]}>
          <img alt={alt} src={src} />
        </div>
      </div>
    </div>
  );
};

export { UserHeader };
