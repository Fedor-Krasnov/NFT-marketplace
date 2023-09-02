import React from 'react';
import './Title.scss';
import { Button } from '../Button';

const Title = ({ buttonIcon, buttonTitle, description, heading, title }) => (
  <div className="title">
    <div>
      <h1 className={heading} dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
    {buttonTitle && (
      <div className="title__button">
        <Button icon={buttonIcon} title={buttonTitle} />
      </div>
    )}
  </div>
);

export { Title };
