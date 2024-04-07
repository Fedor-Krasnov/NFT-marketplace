import React from 'react';
import { Tag } from './Tag';
import tagsStyles from './Tags.module.scss';

const tagsClassName = 'tags';

const Tags = ({ data }) => (
  <ul className={tagsStyles[tagsClassName]}>
    {data.map((tag, indexTag) => (
      <Tag key={indexTag} data={tag} />
    ))}
  </ul>
);

export { Tags };
