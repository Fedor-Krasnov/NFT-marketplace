import React from 'react';
import './Tags.scss';
import { Tag } from './Tag';

const tagsClassName = 'tags';

const Tags = ({ data }) => (
  <ul className={tagsClassName}>
    {data.map((tag, indexTag) => (
      <Tag key={indexTag} data={tag} />
    ))}
  </ul>
);

export { Tags };
