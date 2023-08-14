import React from 'react';

const Title = ({ description, heading, title }) => (
  <>
    <h1 className={heading} dangerouslySetInnerHTML={{ __html: title }} />
    {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
  </>
);

export { Title };
