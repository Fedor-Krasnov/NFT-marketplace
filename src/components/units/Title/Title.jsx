import React from 'react';

const Title = ({ description, heading, title }) => (
  <>
    <h1 className={heading}>{title}</h1>
    {description && <p>{description}</p>}
  </>
);

export { Title };
