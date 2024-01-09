import React from 'react';
import './Title.scss';
import { Button } from '../Button';

const titleClassName = 'title';

const Title = ({ buttonIcon, buttonTitle, description, heading, title, to }) => (
  <div className={titleClassName}>
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
