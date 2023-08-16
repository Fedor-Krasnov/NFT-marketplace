import React from 'react';
import './Title.scss';

const Title = ({ description, heading, title }) => (
  <div className="title">
    <h1 className={heading} dangerouslySetInnerHTML={{ __html: title }} />
    {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
  </div>
);

export { Title };
