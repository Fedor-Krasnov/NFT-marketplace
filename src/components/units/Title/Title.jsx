import React from 'react';
import './Title.scss';
import classNames from 'classnames';
import { Button } from '../Button';

const titleClassName = 'title';

const Title = ({ className, buttonIcon, buttonTitle, description, heading, title, to }) => (
  <div className={classNames(titleClassName, className)}>
    <div>
      <h1 className={heading} dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
    {buttonTitle && (
      <div className={`${titleClassName}__button`}>
        <Button icon={buttonIcon} outline title={buttonTitle} to={to} />
      </div>
    )}
  </div>
);

export { Title };
